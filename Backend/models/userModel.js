

// // models/user.js or models/userModel.js
// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');

// // const userSchema = new mongoose.Schema({
// //   firstname: String,
// //   lastname: String,
// //   email: { type: String, required: true, unique: true },
// //   number: { type: String, required: true, unique: true },
// //   password: { type: String, required: true },
// //   address: String,
// //   pincode: String,
// //   country: String,
// //   city: String,
// //   gender: String,
// //   languages: [String]
// // });


// const userSchema = new mongoose.Schema({
//   firstname: String,
//   lastname: String,
//   email: { type: String, required: true, unique: true },
//   number: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   address: String,
//   pincode: String,
//   country: String,
//   city: String,
//   gender: String,
//   languages: [String],
//   isAdmin: { type: Boolean, default: false } // ✅ Add this line
// });
// // Hash password before saving
// userSchema.pre('save', async function (next) {
//   if (!this.isModified('password')) return next();
//   this.password = await bcrypt.hash(this.password, 10);
//   next();
// });

// module.exports = mongoose.model('User', userSchema);







const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: { type: String, required: true, unique: true },
  number: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  address: String,
  pincode: String,
  country: String,
  city: String,
  gender: String,
  languages: [String],
  isAdmin: { type: Boolean, default: false }
});

// ✅ Hash password before saving
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// ✅ Compare password method
userSchema.methods.comparePassword = function (enteredPassword) {
  return bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('User', userSchema);
