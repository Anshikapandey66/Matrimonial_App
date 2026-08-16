const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },

    password: {
      type: String,
      required: true
    },

    age: {
      type: Number,
      min: 18
    },

    city: {
      type: String,
      trim: true
    },

    profession: {
      type: String,
      trim: true
    },

    education: {
      type: String,
      trim: true
    },

    about: {
      type: String,
      trim: true
    },

    profilePhoto: {
      type: String,
      default: ""
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("User", userSchema);
