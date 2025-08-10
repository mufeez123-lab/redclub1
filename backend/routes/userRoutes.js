const express = require('express');
const router = express.Router();
const User = require('../models/userSchema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const JWT_SECRET ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2ODk4MzI2ZTZmMTMyNGI2Y2NlZjZhOWMiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3NTQ4MDU1MTAsImV4cCI6MTc1NDg5MTkxMH0.raZMJBUQhw-CUAJ9bTGaBkGutW1sWFGkFrUrSmrL58Ythisisyoursecretkey'; 

// Register new user
router.post('/register', async (req, res) => {
  const { username, email, password, role } = req.body;

  try {
    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'Email already in use' });

    // Create user
    const user = new User({ username, email, password, role });
    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Login user
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    // Check password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    // Create JWT token
    const token = jwt.sign(
      { userId: user._id, role: user.role },
      JWT_SECRET,
      { expiresIn: '1d' }
    );

    res.json({ token, user: { username: user.username, email: user.email, role: user.role } });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
