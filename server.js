const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const connectDB = require("./config/db");
connectDB();

app.use("/api", require("./routes/eventRoutes"));

app.get("/", (req, res) => {
  res.send("Events API Running");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});