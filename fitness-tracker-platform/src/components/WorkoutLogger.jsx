import { useState } from "react";

export default function WorkoutLogger() {
  const [exercise, setExercise] = useState("");
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");
  const [weight, setWeight] = useState("");
  const [workouts, setWorkouts] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!exercise || !sets || !reps || !weight) return;

    const newWorkout = {
      id: Date.now(),
      exercise,
      sets,
      reps,
      weight,
      date: new Date().toLocaleString(),
    };

    setWorkouts([newWorkout, ...workouts]);

    setExercise("");
    setSets("");
    setReps("");
    setWeight("");
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Log Your Workout</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Exercise"
          value={exercise}
          onChange={(e) => setExercise(e.target.value)}
          className="w-full border rounded p-2"
        />
        <input
          type="number"
          placeholder="Sets"
          value={sets}
          onChange={(e) => setSets(e.target.value)}
          className="w-full border rounded p-2"
        />
        <input
          type="number"
          placeholder="Reps"
          value={reps}
          onChange={(e) => setReps(e.target.value)}
          className="w-full border rounded p-2"
        />
        <input
          type="number"
          placeholder="Weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="w-full border rounded p-2"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Add Workout
        </button>
      </form>

      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2">Workout History</h3>
        {workouts.length === 0 ? (
          <p className="text-gray-500">No workouts logged yet.</p>
        ) : (
          <ul className="space-y-2">
            {workouts.map((workout) => (
              <li
                key={workout.id}
                className="p-3 bg-gray-100 rounded shadow-sm"
              >
                <strong>{workout.exercise}</strong> - {workout.sets} sets,{" "}
                {workout.reps} reps, {workout.weight}kg <br />
                <small className="text-gray-500">{workout.date}</small>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}