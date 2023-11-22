const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./Route/workout.js");
//express app
const app = express();
//env
require("dotenv").config();
const port = process.env.PORT;
const mongo = process.env.MONGO_URI;

//connect to data base
mongoose
  .connect(mongo)
  .then(() => {
    //listen request
    app.listen(port, () => {
      console.log("connected  to data base & listening on port ", port);
    });
  })
  .catch((error) => {
    console.log(error);
  });

//middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//rotue for testing
// app.get("/", (req, res) => {
//   res.json({ mssg: "welcome back soyal sir" });
// });

//rotue
app.use("/api/workouts", workoutRoutes);
