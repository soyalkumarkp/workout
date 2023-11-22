const express = require("express");
const Workout = require("../models/workoutmodel");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ mssg: "welcome back soyallll sir" });
});
// GET a single workout
router.get("/:id", (req, res) => {
  res.json({ mssg: "GET a single workout" });
});

// POST a new workout
router.post("/", async (req, res) => {
  const { title, load, reps } = req.body;
  try {
    const workout = await Workout.create({ title, load, reps });
    // You might want to send the created workout as a response
    res.json({ mssg: "New workout created!", workout });
  } catch (error) {
    // Handle errors appropriately
    console.error(error);
    res.status(400).json({ error: error.message });
  }
});
//delete a new workout
router.delete("/:id", (req, res) => {
  res.json({ mssg: "delete New workout created!" });
});

//update a new workout
router.patch("/:id", (req, res) => {
  res.json({ mssg: "update New workout created!" });
});
module.exports = router;
