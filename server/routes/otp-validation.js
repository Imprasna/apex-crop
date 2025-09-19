// backend/otpValidation.js
import nodemailer from "nodemailer";

const SENDER_EMAIL = process.env.SENDER_EMAIL; // your Gmail
const APP_PASSWORD = process.env.APP_PASSWORD; // Gmail app password

// In-memory OTP store
const otpStore = {}; // { "email": { otp: "123456", expires: timestamp } }

export default async function otpvalidation(req, res) {
  try {
    const { email, otp } = req.body;

    const validEmail = "apexpbacademy@gmail.com";

    // Step 1: If OTP is provided, verify it
    if (otp) {
      const record = otpStore[email];
      if (!record) {
        return res
          .status(400)
          .json({ error: "No OTP found. Please request again." });
      }

      if (Date.now() > record.expires) {
        delete otpStore[email];
        return res
          .status(400)
          .json({ error: "OTP expired. Please request again." });
      }

      if (record.otp !== otp) {
        return res.status(400).json({ error: "Invalid OTP" });
      }

      // OTP valid
      delete otpStore[email];
      return res.json({ message: "OTP validated successfully!" });
    }

    // Step 2: If no OTP, send a new OTP
    if (!email || email.toLowerCase() !== validEmail) {
      return res
        .status(400)
        .json({ error: "Only academy email ID will be valid to login" });
    }

    // Generate OTP
    const generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();

    // Save OTP in memory for 5 minutes
    otpStore[email] = {
      otp: generatedOtp,
      expires: Date.now() + 5 * 60 * 1000,
    };

    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: SENDER_EMAIL, pass: APP_PASSWORD },
    });

    await transporter.sendMail({
      from: `"Apex PB Academy OTP" <${SENDER_EMAIL}>`,
      to: email,
      subject: "Your OTP Code for Login",
      text: `Hello,

Your One-Time Password (OTP) for login is: ${generatedOtp}

Please use this OTP within the next 5 minutes.

— Prasanna's Assistant`,
    });

    console.log(`OTP sent to ${email}: ${generatedOtp}`);

    res.json({ message: "OTP sent! Please check your email." });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to send OTP" });
  }
}
