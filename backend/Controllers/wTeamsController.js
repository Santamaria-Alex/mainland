const asyncHandler = require("express-async-handler");

const WTeams = require("../models/wTeamsModel");

//@desc Get all wednesday teams
//@route GET /api/mainland
//@access Private
const getWedTeams = asyncHandler(async (req, res) => {
  const wedTeams = await WTeams.find();

  res.status(200).json(wedTeams);
});

//@desc     Set wednesday teams
//@route    POST /api/mainland
//@access   Private
const setWedTeams = asyncHandler(async (req, res) => {
  // if (!req.body.text) {
  //   res.status(400);
  //   throw new Error("Please add text field.");
  // }

  const wTeam = new WTeams({
    teamName: "Sample name",
    gamesPlayed: 0,
    wins: 0,
    losses: 0,
    ties: 0,
    goalsFor: 0,
    goalsAgainst: 0,
    goalDif: 0,
    points: 0,
  });

  const createdTeam = await wTeam.save();

  res.status(201).json(createdTeam);
});

//@desc     Update wednesday schedule
//@route    PUT /api/goals/:id
//@access   Private
const updateWedTeams = asyncHandler(async (req, res) => {
  const {
    teamName,
    gamesPlayed,
    wins,
    losses,
    ties,
    goalsFor,
    goalsAgainst,
    goalDif,
    points,
  } = req.body;

  const wTeam = await WTeams.findById(req.params.id);

  if (wTeam) {
    (wTeam.teamName = teamName),
      (wTeam.gamesPlayed = gamesPlayed),
      (wTeam.wins = wins),
      (wTeam.losses = losses),
      (wTeam.ties = ties),
      (wTeam.goalsFor = goalsFor),
      (wTeam.goalsAgainst = goalsAgainst),
      (wTeam.goalDif = goalDif),
      (wTeam.points = points);

    const updatedTeam = await wTeam.save();
    res.status(200).json(updatedTeam);
  } else {
    res.status(400);
    throw new Error("Team not found");
  }
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
