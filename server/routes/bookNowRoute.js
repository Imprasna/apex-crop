import { v4 as uuidv4 } from "uuid";
import supabase from "../config/supabaseClient.js";
import nodemailer from "nodemailer";

const SENDER_EMAIL = process.env.SENDER_EMAIL;
const RECEIVER_EMAIL = process.env.RECEIVER_EMAIL;
const APP_PASSWORD = process.env.APP_PASSWORD;

export default async function bookNowHandler(req, res) {
  console.log("POST /booknow triggered");

  const { name, phone, email, address, sessions, location } = req.body;
  console.log("📩 Received body:", req.body);

  const id = uuidv4();

  try {
    // ✅ Insert booking into Supabase
    const { data, error } = await supabase
      .from("bookings-container")
      .insert([{ id, name, phone, email, address, sessions, location }])
      .select();

    if (error) {
      console.error("❌ Supabase insert error:", JSON.stringify(error, null, 2));
      return res.status(500).json({
        message: "Supabase insert failed",
        error,
      });
    }

    console.log("✅ Booking saved successfully:", data);

    /**
     * ✅ FIXED: Explicit SMTP configuration
     * Gmail requires:
     *  - host: smtp.gmail.com
     *  - port: 465 (secure) or 587 (TLS)
     * Some hosts (like Render/Vercel free tier) block port 465,
     * so we try port 587 with secure: false first.
     */
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587, // ✅ 465 often blocked, so use 587 with TLS
      secure: false, // STARTTLS will upgrade connection
      auth: {
        user: SENDER_EMAIL,
        pass: APP_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false, // helps on certain hosts
      },
    });

    const mailOptions = {
      from: `"Apex PB Academy" <${SENDER_EMAIL}>`,
      to: RECEIVER_EMAIL,
      subject: `New Booking`,
      html: `
        <h2>New Booking Details</h2>
        <table border="1" cellpadding="6" cellspacing="0" style="border-collapse: collapse; font-family: Arial, sans-serif;">
          <tr><th align="left">Name</th><td>${name}</td></tr>
          <tr><th align="left">Phone</th><td>${phone}</td></tr>
          <tr><th align="left">Email</th><td>${email}</td></tr>
          <tr><th align="left">Address</th><td>${address}</td></tr>
          <tr><th align="left">Sessions</th><td>${sessions}</td></tr>
          <tr><th align="left">Location</th><td>${location}</td></tr>
        </table>
        <p style="margin-top: 15px; font-size: 14px;">— <b>Prasanna's</b> assistant </p>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log("📧 Email sent successfully to", RECEIVER_EMAIL);

    return res.status(200).json({
      message: "Booking submitted successfully! Email sent.",
      data,
    });
  } catch (err) {
    console.error("❌ Unexpected server error:", err);
    return res.status(500).json({
      message: "Server error",
      error: err.message,
    });
  }
}
