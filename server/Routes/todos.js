const express = require("express");
const router = express.Router(); // เรียกใช้ router

router.get("/todos", (req, res) => {
  res.send("get all task");
});
router.post("/todos", (req, res) => {
  res.send("create new task");
});

module.exports = router;
