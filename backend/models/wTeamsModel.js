const mongoose = require("mongoose");

const wTeamsSchema = mongoose.Schema({
  teamName: {
    type: String,
    required: [true, "Please add team."],
  },
  gamesPlayed: {
    type: Number,
    required: false,
    default: 0,
  },
  wins: {
    type: Number,
    required: false,
    default: 0,
  },
  losses: {
    type: Number,
    required: false,
    default: 0,
  },
  ties: {
    type: Number,
    required: false,
    default: 0,
  },
  goalsFor: {
    type: Number,
    required: false,
    default: 0,
  },
  goalsAgainst: {
    type: Number,
    required: false,
    default: 0,
  },
  goalDif: {
    type: Number,
    required: false,
    default: 0,
  },
  points: {
    type: Number,
    required: false,
    default: 0,
  },
});

module.exports = mongoose.model("WTeams", wTeamsSchema);
