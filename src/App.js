import "./App.css";
import MealForm from "./components/MealForm";
import MealList from "./components/MealList";
import CalorieCounter from "./components/CalorieCounter";
import { useState } from "react";

function App() {
	const [goal, setGoal] = useState(2000);
	const [meals, setMeals] = useState([]);

	return (
		<>
			<h1>Calorie Counter – Track Your Daily Intake</h1>
			<form onSubmit={(e) => e.preventDefault()}>
				<input
					type="number"
					value={goal}
					onChange={(e) => setGoal(Number(e.target.value))}
					placeholder="Type today's calorie goal..."
				/>
				<p>Today's goal: {goal}</p>
				<p>Number of meals: {meals.length}</p>
			</form>
			<MealForm />
			<MealList />
			<CalorieCounter />
		</>
	);
}

export default App;
