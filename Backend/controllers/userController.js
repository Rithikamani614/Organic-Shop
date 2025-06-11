const bcrypt = require('bcrypt');
const User = require('../models/userModel');  // Your Mongoose model

exports.registerUser = async (req, res) => {
  try {
    // Destructure fields from request body
    const {
      firstname,
      lastname,
      email,
      number,
      password,
      confirmPassword,
      address,
      pincode,
      country,
      city,
      gender,
      languages,
    } = req.body;

    // Validate the required fields
    if (!firstname || !lastname || !email || !password || !confirmPassword || !number || !address || !pincode || !country || !city || !gender || !languages) {
      return res.status(400).json({ success: false, message: 'Missing required fields' });
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      return res.status(400).json({ success: false, message: 'Passwords do not match' });
    }

    // Check if email is already taken
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: 'Email already in use' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({
      firstname,
      lastname,
      email,
      number,
      password: hashedPassword,  // Store hashed password
      address,
      pincode,
      country,
      city,
      gender,
      languages,
    });

    // Save new user to the database
    await newUser.save();

    // Respond with success message and user details (excluding password)
    const { password: _, ...userWithoutPassword } = newUser.toObject();

    res.status(201).json({
      success: true,
      message: 'User registered successfully',
      user: userWithoutPassword,
    });
  } catch (error) {
    // Log the error and send a 500 status with a message
    console.error('Error registering user:', error);
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
      error: error.message,  // This will give you a more specific error message
    });
  }
};
