import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.NODE_MAILER_USER,
    pass: process.env.NODE_MAILER_PASS,
  },
});


async function sendEmail(email, name, subject, message) {

  const info = await transporter.sendMail({
    from: '"ashraful" <ashrafulmomin2@gmil.com>',
    to: "ashrafulmomin2@gmil.com",
    subject: subject,
    text: message + " " + name + " " + email,
  });

  console.log("Message sent:", info.messageId);

}


export default sendEmail;