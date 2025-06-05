import nodemailer from "nodemailer";

//ebft gmlc lyyc rsdz
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "ashrafulmomin2@gmil.com",
    pass: "ebftgmlclyycrsdz",
  },
});


async function sendEmail(email, name, subject, message) {

  const info = await transporter.sendMail({
    from: '"ashraful" <ashrafulmomin2@gmil.com>',
    to: "ashrafulmomin2@gmil.com",
    subject: subject,
    text: message + " " + name + "",

  });

  console.log("Message sent:", info.messageId);


}


export default sendEmail;