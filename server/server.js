const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const { readdirSync } = require("fs");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

// Global Middleware
app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json({ limit: "10mb" }));

readdirSync("./Routes").map((r) => app.use("/api", require("./Routes/" + r)));

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
