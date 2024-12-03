const express = require("express");
const router = express.Router(); // เรียกใช้ router

const {
  createTask,
  getAllTask,
  readTask,
  updateTask,
  removeTask,
} = require("../Controllers/taskController");

router.get("/tasks", getAllTask);

router.get("/task/:id", readTask);

router.post("/tasks", createTask);

router.put("/task/:id", updateTask);

router.delete("/task/:id", removeTask);

module.exports = router;
