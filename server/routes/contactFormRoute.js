import { v4 as uuidv4 } from "uuid";
import supabase from "../config/supabaseClient.js"; // must use service_role key
import nodemailer from "nodemailer";

const SENDER_EMAIL = process.env.SENDER_EMAIL;
const RECEIVER_EMAIL = process.env.RECEIVER_EMAIL;
const APP_PASSWORD = process.env.APP_PASSWORD;

export default async function contactFormHandler(req, res) {
  console.log("POST /contact-form triggered");

  const { name, email, phone, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      error: "Name, email, and message are required"
    });
  }

  const id = uuidv4();

  try {
    const { data, error } = await supabase
      .from("contact-form")
      .insert([{ id, name, email, phone, subject, message }])
      .select(); // optional: returns inserted row

    if (error) {
      console.error("❌ Supabase insert error:", error);
      return res.status(500).json({ success: false, error: error.message });
    }

    console.log("✅ Contact form saved:", data);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: SENDER_EMAIL,
        pass: APP_PASSWORD
      }
    });

    const mailOptions = {
      from: `"Apex PB Academy" <${SENDER_EMAIL}>`,
      to: RECEIVER_EMAIL,
      subject: `New Contact Form Submission`,
      html: `
        <h2>Contact Form Details</h2>
        <table border="1" cellpadding="6" cellspacing="0" style="border-collapse: collapse; font-family: Arial, sans-serif;">
          <tr><th align="left">Name</th><td>${name}</td></tr>
          <tr><th align="left">Email</th><td>${email}</td></tr>
          <tr><th align="left">Phone</th><td>${phone || "N/A"}</td></tr>
          <tr><th align="left">Subject</th><td>${subject || "N/A"}</td></tr>
          <tr><th align="left">Message</th><td>${message}</td></tr>
        </table>
        <p style="margin-top: 15px; font-size: 14px;">— <b>Prasanna's</b> assistant</p>
      `
    };

    await transporter.sendMail(mailOptions);
    console.log("📧 Contact form email sent to", RECEIVER_EMAIL);

    res.status(201).json({
      success: true,
      message: "Contact form submitted successfully and email sent",
      data
    });

  } catch (err) {
    console.error("❌ Unexpected error:", err);
    res.status(500).json({ success: false, error: err.message });
  }
}
