const express = require("express");
const router = express.Router();

const {
  createEvent,
  getEvents,
  getEvent,
  updateEvent,
  deleteEvent
} = require("../controllers/eventController");

router.post("/events", createEvent);
router.get("/events", getEvents);
router.get("/events/:id", getEvent);
router.put("/events/:id", updateEvent);
router.delete("/events/:id", deleteEvent);

module.exports = router;