//@desc Get wednesday schedule
//@route GET /api/goals
//@access Private
const getSchedule = (req, res) => {
  res.status(200).json({ message: "Get schedule" });
};

//@desc     Set wednesday schedule
//@route    POST /api/goals
//@access   Private
const setSchedule = (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add text field.");
  }

  res.status(200).json({ message: "Set schedule" });
};

//@desc     Update wednesday schedule
//@route    PUT /api/goals/:id
//@access   Private
const updateSchedule = (req, res) => {
  res.status(200).json({ message: `Update schedule ${req.params.id}` });
};

//@desc     Delete wednesday schedule
//@route    DELETE /api/goals/:id
//@access   Private
const deleteSchedule = (req, res) => {
  res.status(200).json({ message: `Delete schedule ${req.params.id}` });
};

module.exports = {
  getSchedule,
  setSchedule,
  updateSchedule,
  deleteSchedule,
};
