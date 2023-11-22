const express = require("express");
const {
  createWorkout,
  getAllWorkout,
  getWorkout,
  updateWorkout,
  deleteWorkout,
} = require("../controllers/workoutcontroller");
const router = express.Router();

//getall workout model
router.get("/", getAllWorkout);
// GET a single workout
router.get("/:id", getWorkout);

// POST a new workout
router.post("/", createWorkout);
//delete a new workout
router.delete("/:id", deleteWorkout);

//update a new workout
router.patch("/:id", updateWorkout);
module.exports = router;
