const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/userModel');

const DB_URL = 'mongodb://localhost:27017/shop';

mongoose.connect(DB_URL)
  .then(async () => {
    const email = 'rithikamani614@gmail.com';
    const password = 'manum2004';
    const number = '7904713525';

    // Check if admin already exists
    const existingAdmin = await User.findOne({ email });
    if (existingAdmin) {
      console.log('⚠️ Admin already exists');
      process.exit(0);
    }

    // Create new admin user
    const newAdmin = new User({
      firstname: 'Admin',
      lastname: 'User',
      email,
      number,
      password, // Leave raw; the pre-save hook will hash it
      isAdmin: true,
      address: '',
      pincode: '',
      country: '',
      city: '',
      gender: '',
      languages: []
    });

    // Save the user (this will trigger the pre-save hash)
    await newAdmin.save();

    console.log('✅ Admin created successfully!');
    process.exit(0);
  })
  .catch(err => {
    console.error('❌ Error connecting to DB:', err);
    process.exit(1);
  });
