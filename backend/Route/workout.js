const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ mssg: "welcome back soyallll sir" });
});
// GET a single workout
router.get("/:id", (req, res) => {
  res.json({ mssg: "GET a single workout" });
});
//post a new workout
router.post("/", (req, res) => {
  res.json({ mssg: "post New workout created!" });
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
