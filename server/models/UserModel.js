const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Your Email is required"],
    unique: true,
  },
  username: {
    type: String,
    required: [true, "your username is required"],
  },
  password: {
    type: String,
    required: [true, "Your password is reuqired"],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 12);
});
module.exports = mongoose.model("user", userSchema);
