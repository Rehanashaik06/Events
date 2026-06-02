const express = require("express");
const router = express.Router();

const {
  createEvent,
  getEvents,
  getEvent,
  updateEvent,
  deleteEvent,
  deleteAllEvents
} = require("../controllers/eventController");

router.post("/", createEvent);

router.get("/", getEvents);

router.get("/:id", getEvent);

router.put("/:id", updateEvent);

router.delete("/:id", deleteEvent);

router.delete("/", deleteAllEvents);

module.exports = router;