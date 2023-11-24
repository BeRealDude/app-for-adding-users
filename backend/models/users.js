const mongoose = require('mongoose');

// const { ObjectId } = mongoose.Schema.Types;

const userSchema = new mongoose.Schema(
    {
      surname: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 30,
      },
      name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 30,
      },
      patronymic: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 30,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      login: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 30,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
    {
      versionKey: false,
    },
  );
  
  module.exports = mongoose.model('user', userSchema);