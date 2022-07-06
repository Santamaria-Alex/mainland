const mongoose = require("mongoose");

const wTeamsSchema = mongoose.Schema({
  teamName: {
    type: String,
    required: [true, "Please add team."],
  },
  gamesPlayed: {
    type: Number,
    required: true,
    default: 0,
  },
  wins: {
    type: Number,
    required: true,
    default: 0,
  },
  losses: {
    type: Number,
    required: true,
    default: 0,
  },
  ties: {
    type: Number,
    required: true,
    default: 0,
  },
  goalsFor: {
    type: Number,
    required: true,
    default: 0,
  },
  goalsAgainst: {
    type: Number,
    required: true,
    default: 0,
  },
  goalDif: {
    type: Number,
    required: true,
    default: 0,
  },
  points: {
    type: Number,
    required: true,
    default: 0,
  },
});

module.exports = mongoose.model("wTeams", wTeamsSchema);
