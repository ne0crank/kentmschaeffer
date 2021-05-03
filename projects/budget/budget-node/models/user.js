const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  alias: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (text) => {
        return text.contains('@');
      },
      message: 'email must contain @'
    }
  },
  password: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true,
    enum : [ 'ro', 'rw', 'admin' ],
    default: 'ro'
  }
});

module.exports = mongoose.model('UserModel',UserSchema);
