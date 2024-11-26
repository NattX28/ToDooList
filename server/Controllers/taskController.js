const Task = require("../Models/taskModel");

exports.getAllTask = async (req, res) => {
  try {
  } catch (err) {}
};

exports.createTask = async (req, res) => {
  try {
    const { title, dueDate, description } = req.body;
    if (!title || !dueDate || !description) {
      return res.status(400).send("All fields are required.");
    }

    const newTask = {
      title,
      dueDate: new Date(dueDate), // แปลง ISO string เป็น Date object ก่อนบันทึก
      description,
    };
    await Task(newTask).save();

    res.send(newTask);
  } catch (err) {
    res.status(500).send("create task api error");
  }
};
