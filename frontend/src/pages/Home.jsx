import React from "react";
import { useState, useEffect } from "react";
import Workoutdetails from "../components/Workoutdetails";
import WorkOutForm from "../components/WorkOutForm";

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
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => (
            <Workoutdetails key={workout._id} workout={workout} />
          ))}
      </div>
      <WorkOutForm />
    </div>
  );
};

export default Home;
