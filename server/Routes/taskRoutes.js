const express = require("express");
const router = express.Router(); // เรียกใช้ router

const { createTask } = require("../Controllers/taskController");

router.get("/tasks", (req, res) => {
  res.send("get all task");
});

router.post("/tasks", createTask);

module.exports = router;
