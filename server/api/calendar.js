const express = require("express");
const router = express.Router();
const db = require("db");
const { compareDate } = require("../utils");

router.get("/api/calendar", async (req, res) => {
  const { hostUserId } = req.query;

  try {
    let events = await db.calendar.findEventsForUser(hostUserId);

    let newEvents = events.map((item) => item.start).sort(compareDate);

    res.json({
      name: "Eng Test User",
      timeslotLengthMin: 60,
      timeslots: newEvents,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
