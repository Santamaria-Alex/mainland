const express = require("express");
const {
  getWedTeams,
  setWedTeams,
  updateWedTeams,
  deleteWedTeams,
} = require("../Controllers/wTeamsController");
const router = express.Router();

router.route("/").get(getWedTeams).post(setWedTeams);

router.route("/:id").delete(deleteWedTeams).put(updateWedTeams);

module.exports = router;
