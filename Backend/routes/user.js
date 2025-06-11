

const express = require('express');
const router = express.Router();
const User = require('../models/userModel');
const bcrypt = require('bcryptjs');

//  REGISTER USER
router.post('/', async (req, res) => {
  const { firstname, lastname, email, number, password, address, pincode, country, city, gender, languages } = req.body;

  try {
    const existingEmail = await User.findOne({ email });
    const existingNumber = await User.findOne({ number });

    if (existingEmail && existingNumber) {
      return res.status(400).json({ message: 'Both Email and Mobile number already exist' });
    } else if (existingEmail) {
      return res.status(400).json({ message: 'Email already exists' });
    } else if (existingNumber) {
      return res.status(400).json({ message: 'Mobile number already exists' });
    }

    const newUser = new User({ firstname, lastname, email, number, password, address, pincode, country, city, gender, languages });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Registration Error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

//  LOGIN USER
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    res.status(200).json({ message: 'Login successful', user: { id: user._id, email: user.email } });
  } catch (error) {
    console.error('Login Error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;




