const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  dueDate: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Task", taskSchema);
