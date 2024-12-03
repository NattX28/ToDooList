const Task = require("../Models/taskModel");

exports.getAllTask = async (req, res) => {
  try {
    const allTask = await Task.find({}).exec();
    res.send(allTask);
  } catch (err) {
    res.status(500).send("getAllTask api error");
  }
};

exports.readTask = async (req, res) => {
  try {
    const id = req.params.id;
    const task = await Task.findOne({ _id: id }).exec();
    res.send(task);
  } catch (err) {
    res.status(500).send("readTask api error");
  }
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

exports.updateTask = async (req, res) => {
  try {
    const id = req.params.id;
    const newData = req.body;

    const updateData = await Task.findOneAndUpdate({ _id: id }, newData, {
      new: true,
    }).exec();
    res.send(updateData);
  } catch (err) {
    res.status(500).send("update task api error");
  }
};

exports.removeTask = async (req, res) => {
  try {
    const id = req.params.id;
    console.log("id in remove ", id);
    const removed = await Task.findOneAndDelete({ _id: id }).exec();
    console.log(removed);
    res.send(removed);
  } catch (err) {
    res.status(500).send("remove task api error");
  }
};
