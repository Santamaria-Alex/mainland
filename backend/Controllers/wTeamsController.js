const asyncHandler = require("express-async-handler");

const wTeams = require("../models/wTeamsModel");

//@desc Get all wednesday teams
//@route GET /api/mainland
//@access Private
const getWedTeams = asyncHandler(async (req, res) => {
  const wedTeams = await wTeams.find();

  res.status(200).json(wedTeams);
});

//@desc     Set wednesday schedule
//@route    POST /api/goals
//@access   Private
const setWedTeams = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add text field.");
  }

  res.status(200).json({ message: "Set Wednesday Teams" });
});

//@desc     Update wednesday schedule
//@route    PUT /api/goals/:id
//@access   Private
const updateWedTeams = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update Wednesday Teams ${req.params.id}` });
});

//@desc     Delete wednesday schedule
//@route    DELETE /api/goals/:id
//@access   Private
const deleteWedTeams = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete Wednesday Team ${req.params.id}` });
});

module.exports = {
  getWedTeams,
  setWedTeams,
  updateWedTeams,
  deleteWedTeams,
};
