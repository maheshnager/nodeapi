const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    mobile: {
      type: Number,
      required: true,
    },
    work: {
      type: String,
      enum: ["student", "employee", "self-employed"],
    },
    address: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const person = mongoose.model("person", userSchema);
module.exports = person;
