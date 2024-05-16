const mongoose = require("mongoose");
const validator = require("validator");

const letterSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 25,
  },
  content: {
    type: String,
    required: true,
    minLength: 50,
    maxLength: 2000,
  },
  dateCreated: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
});

module.exports = mongoose.model("letter", letterSchema);
