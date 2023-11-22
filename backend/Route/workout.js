const express = require("express");
const {
  createWorkout,
  getAllWorkout,
  getWorkout,
} = require("../controllers/workoutcontroller");
const router = express.Router();

//getall workout model
router.get("/", getAllWorkout);
// GET a single workout
router.get("/:id", getWorkout);

// POST a new workout
router.post("/", createWorkout);
//delete a new workout
router.delete("/:id", (req, res) => {
  res.json({ mssg: "delete New workout created!" });
});

//update a new workout
router.patch("/:id", (req, res) => {
  res.json({ mssg: "update New workout created!" });
});
module.exports = router;
