const express = require('express');
const router = express.Router();
const Contact = require('../models/contactSchema');
const nodemailer = require('nodemailer');

// Configure your mail transporter (example with Gmail SMTP)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'yourgmail@gmail.com',
    pass: 'yourgmailpassword_or_app_password'
  }
});

router.post('/', async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    // Save contact message in DB
    const contact = new Contact({ name, email, subject, message });
    await contact.save();

    // Prepare email
    const mailOptions = {
      from: email,
      to: 'yourdestinationmail@example.com',  // The email where you want to receive messages
      subject: subject || 'New Contact Message',
      text: `You received a message from ${name} (${email}):\n\n${message}`
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
