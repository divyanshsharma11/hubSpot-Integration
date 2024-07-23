const nodemailer = require('nodemailer');
const { from_email, email_pass } = require('../config/config');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: from_email,
    pass: email_pass,
  },
});

const sendEmail = (to, subject, text) => {
  const mailOptions = {
    from: from_email,
    to,
    subject,
    text,
  };
  return transporter.sendMail(mailOptions);
};

module.exports = { sendEmail };
