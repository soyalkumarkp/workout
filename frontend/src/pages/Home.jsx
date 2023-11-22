import React from "react";
import { useState, useEffect } from "react";
import Workoutdetails from "../components/Workoutdetails";
const Home = () => {
  const [workouts, setWorkouts] = useState(null);
  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts");
      const data = await response.json();

      if (response.ok) {
        setWorkouts(data);
      }
    };
    fetchWorkouts();
  }, []);
  return (
    <div className="workouts">
      {workouts &&
        workouts.map((workout) => (
          <Workoutdetails key={workout._id} workout={workout} />
        ))}
    </div>
  );
};

export default Home;
