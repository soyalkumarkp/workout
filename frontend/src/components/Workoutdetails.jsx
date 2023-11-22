import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const Workoutdetails = ({ workout }) => {
  const { dispatch } = useWorkoutsContext();

  const handleClick = async () => {
    const response = await fetch("/api/workouts/" + workout._id, {
      method: "DELETE",
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_WORKOUT", payload: json });
    }
  };

  // Check if workout.createdAt is a valid date before using formatDistanceToNow
  const createdAtDate = new Date(workout.createdAt);
  const distanceToNow =
    isValidDate(createdAtDate) &&
    formatDistanceToNow(createdAtDate, { addSuffix: true });

  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p>
        <strong>Load (kg): </strong>
        {workout.load}
      </p>
      <p>
        <strong>Number of reps: </strong>
        {workout.reps}
      </p>
      <p>{workout.createdAt}</p>
      <p>{distanceToNow}</p>
      <span className="material-symbols-outlined" onClick={handleClick}>
        delete
      </span>
    </div>
  );
};

export default Workoutdetails;

// Function to check if a date is valid
const isValidDate = (date) => !isNaN(date.getTime());
