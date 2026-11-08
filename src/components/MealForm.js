import { useState } from "react";

const MealForm = ({ onAddMeal }) => {
	const typesOfMeal = ["Breakfast", "Lunch", "Dinner", "Snack"];
	const [name, setName] = useState("");
	const [calories, setCalories] = useState("");
	const [mealType, setMealType] = useState("Breakfast");
	const [errorMessage, setErrorMessage] = useState("");

	const insertMeal = (e) => {
		e.preventDefault();

		if (name.trim() === "") {
			setErrorMessage("Please insert name");
			return;
		}
		if (Number(calories) <= 0) {
			setErrorMessage("Calories must be greater than 0.");
			return;
		}
		const meal = {
			id: Date.now(),
			name: name.trim(),
			calories: Number(calories),
			type: mealType,
		};
		onAddMeal(meal);
		setName("");
		setCalories("");
		setMealType("Breakfast");
		setErrorMessage("");
	};
	return (
		<>
			<h2>Insert your meal</h2>
			<form onSubmit={insertMeal}>
				<input
					type="text"
					value={name}
					placeholder="Name"
					onChange={(e) => setName(e.target.value)}
				/>
				<input
					type="number"
					value={calories}
					placeholder="Calories"
					onChange={(e) => setCalories(e.target.value)}
				/>
				<select value={mealType} onChange={(e) => setMealType(e.target.value)}>
					{typesOfMeal.map((type) => {
						return (
							<option key={type} value={type}>
								{type}
							</option>
						);
					})}
				</select>
				<button type="submit">Add meal</button>
			</form>
			{errorMessage && <p>{errorMessage}</p>}
		</>
	);
};

export default MealForm;
