import "./App.css";
import MealForm from "./components/MealForm";
import MealList from "./components/MealList";
import CalorieCounter from "./components/CalorieCounter";

function App() {
	return (
		<>
			<h1>Calorie Counter – Track Your Daily Intake</h1>
			<MealForm />
			<MealList />
			<CalorieCounter />
		</>
	);
}

export default App;
