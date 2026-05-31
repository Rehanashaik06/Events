const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

/* ========================
   MIDDLEWARE
======================== */
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
}));

app.use(express.json());

/* ========================
   DATABASE CONNECTION
======================== */
const connectDB = require("./config/db");

connectDB().then(() => {
  console.log("MongoDB Connected Successfully");
}).catch((err) => {
  console.error("MongoDB Connection Failed:", err);
});

/* ========================
   ROUTES
======================== */
// FIXED: proper route prefix
app.use("/api/events", require("./routes/eventRoutes"));

/* ========================
   HEALTH CHECK ROUTE
======================== */
app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

/* ========================
   SERVER START
======================== */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});