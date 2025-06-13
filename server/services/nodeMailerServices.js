import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.NODE_MAILER_USER,
    pass: process.env.NODE_MAILER_PASS,
  },
});

async function sendEmail(email, name, subject, message) {
  try {
    const info = await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.NODE_MAILER_USER,
      subject: subject,
      text: `${message}\n\nFrom: ${name}\nEmail: ${email}`,
    });
  } catch (err) {
    throw err;
  }
}

export default sendEmail;
