const Workout = require("../models/workoutmodel");
const mongoose = require("mongoose");

// get all workout model
const getAllWorkout = async (req, res) => {
  try {
    const workouts = await Workout.find({}).sort({ createdAt: -1 });
    res.status(200).json(workouts);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
};

// get a single workout model
const getWorkout = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Not a valid ID" });
    }

    const workout = await Workout.findById(id);

    if (!workout) {
      return res.status(404).json({ error: "No such workout" });
    }

    res.json({ workout });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// create a new workout model
const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body;
  try {
    const workout = await Workout.create({ title, load, reps });
    res
      .status(201)
      .json({ message: "New workout created successfully", workout });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
};

// delete a new workout model
const deleteWorkout = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Not a valid ID" });
    }

    const workout = await Workout.findByIdAndDelete(id);

    if (!workout) {
      return res.status(404).json({ error: "No such workout" });
    }

    res.json({ message: "Workout deleted successfully", workout });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// update a new workout model
const updateWorkout = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, load, reps } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Not a valid ID" });
    }

    const workout = await Workout.findOneAndUpdate(
      { _id: id },
      { ...req.body },
      { new: true }
    );

    if (!workout) {
      return res.status(404).json({ error: "No such workout" });
    }

    res.json({ message: "Workout updated successfully", workout });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createWorkout,
  getAllWorkout,
  getWorkout,
  updateWorkout,
  deleteWorkout,
};
