const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

exports.loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  try {
    // 1. Check required fields
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: '❌ Email and password are required',
      });
    }

    // 2. Find the user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: '❌ Invalid email or password',
      });
    }

    // 3. Check if the user is an admin
    if (!user.isAdmin) {
      return res.status(403).json({
        success: false,
        message: '❌ Access denied: Not an admin',
      });
    }

    // 4. Compare passwords
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: '❌ Invalid email or password',
      });
    }

    // 5. Generate token
    const token = jwt.sign(
      { id: user._id, isAdmin: true },
      process.env.JWT_SECRET || 'secretKey',
      { expiresIn: '1d' }
    );

    // 6. Respond with token and user info
    res.status(200).json({
      success: true,
      message: '✅ Admin logged in successfully',
      token,
      user: {
        id: user._id,
        email: user.email,
        isAdmin: user.isAdmin,
      },
    });

  } catch (error) {
    console.error('❌ Admin login error:', error);
    res.status(500).json({
      success: false,
      message: '❌ Server error',
      error: error.message,
    });
  }
};
