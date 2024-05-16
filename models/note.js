const mongoose = require("mongoose");
const validator = require("validator");

const noteSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 20,
  },
  content: {
    type: String,
    required: true,
    minLength: 10,
    maxLength: 200,
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  dateCreated: {
    type: Date,
    required: true,
    default: Date.now(),
  },
});

module.exports = mongoose.model("note", noteSchema);
