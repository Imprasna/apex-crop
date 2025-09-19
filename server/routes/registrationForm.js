import supabase from "../config/supabaseClient.js";
import nodemailer from "nodemailer";
import { v4 as uuidv4 } from "uuid";

const SENDER_EMAIL = process.env.SENDER_EMAIL;
const RECEIVER_EMAIL = process.env.RECEIVER_EMAIL;
const APP_PASSWORD = process.env.APP_PASSWORD;

const registrationForm = async (req, res) => {
  const {
    name,
    dateOfBirth,
    phoneNumber,
    address,
    gender,
    gameLevel,
    duprRating,
    categories
  } = req.body;

  console.log(req.body);

  const id = uuidv4();

  // Save to Supabase
  const { data, error } = await supabase
    .from("tournament_registrations")
    .insert([
      {
        id,
        name,
        date_of_birth: dateOfBirth,
        phone_number: phoneNumber,
        address,
        gender,
        game_level: gameLevel,
        dupr_rating: duprRating,
        categories: categories.join(", "),
        created_at: new Date().toISOString()
      }
    ]);

  if (error) {
    console.error("Supabase insert error:", error);
    return res.status(500).json({ error: "Database insert failed" });
  }

  // Email setup
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: SENDER_EMAIL, pass: APP_PASSWORD }
  });

  const mailOptions = {
    from: `"Apex PB Academy" <${SENDER_EMAIL}>`,
    to: RECEIVER_EMAIL,
    subject: `New Registration - ${name}`,
    html: `
      <h2>Registration Details</h2>
      <table border="1" cellpadding="6" cellspacing="0" style="border-collapse: collapse; font-family: Arial, sans-serif;">
        <tr><th align="left">Name</th><td>${name}</td></tr>
        <tr><th align="left">Date of Birth</th><td>${dateOfBirth}</td></tr>
        <tr><th align="left">Phone Number</th><td>${phoneNumber}</td></tr>
        <tr><th align="left">Address</th><td>${address}</td></tr>
        <tr><th align="left">Gender</th><td>${gender}</td></tr>
        <tr><th align="left">Game Level</th><td>${gameLevel}</td></tr>
        <tr><th align="left">DUPR Rating</th><td>${duprRating}</td></tr>
        <tr><th align="left">Categories</th><td>${categories.join(", ")}</td></tr>
      </table>
      <p style="margin-top: 15px; font-size: 14px;">— <b>Prasanna's</b> assistant </p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (mailError) {
    console.error("Email sending failed:", mailError);
  }

  res.json({ data });
};

export default registrationForm;
