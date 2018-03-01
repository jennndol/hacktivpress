const mongoose = require('mongoose');
const generatePassword = require('../helpers/generatePassword')

const UserSchema = new mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

UserSchema.pre('save', function (next) {
  this.email = this.email.toLowerCase();

  generatePassword(this.password)
    .then(hash => {
      this.password = hash;
      next();
    })
    .catch(error => {
      console.log(error);
    });
});


const User = mongoose.model('User', UserSchema);

module.exports = User;