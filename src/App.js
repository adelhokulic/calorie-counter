import "./App.css";
import MealForm from "./components/MealForm";
import MealList from "./components/MealList";
import CalorieCounter from "./components/CalorieCounter";
import { useState } from "react";

function App() {
	const [goal, setGoal] = useState(2000);
	const [meals, setMeals] = useState([]);

	const addMeal = (newMeal) => {
		setMeals((oldMeals) => [...oldMeals, newMeal]);
	};
	const deleteMeal = (id) => {
		setMeals(meals.filter((meal) => meal.id !== id));
	};
	return (
		<>
			<h1>Calorie Counter – Track Your Daily Intake</h1>
			<form onSubmit={(e) => e.preventDefault()}>
				<label>Daily goal</label>
				<input
					type="number"
					value={goal === 0 ? "" : goal}
					onChange={(e) => setGoal(Number(e.target.value))}
					placeholder="Type today's calorie goal..."
				/>
			</form>
			<MealForm onAddMeal={addMeal} />
			<MealList meals={meals} onDeleteMeal={deleteMeal} />
			<CalorieCounter goal={goal} meals={meals} />
			<button onClick={e => setMeals([])}>New day</button>
		</>
	);
}

export default App;
