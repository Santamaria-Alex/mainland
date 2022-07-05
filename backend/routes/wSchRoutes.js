const express = require("express");
const {
  getSchedule,
  setSchedule,
  updateSchedule,
  deleteSchedule,
} = require("../Controllers/wSchController");
const router = express.Router();

router.route("/").get(getSchedule).post(setSchedule);

router.route("/:id").delete(deleteSchedule).put(updateSchedule);

module.exports = router;
