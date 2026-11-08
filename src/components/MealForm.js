import { useState } from "react";

const MealForm = () => {
	const typesOfMeal = ["Breakfast", "Lunch", "Dinner", "Snack"];
	const [name, setName] = useState("");
	const [calorie, setCalorie] = useState("");
	const [mealType, setMealType] = useState("Breakfast");

	const insertMeal = (e) => {
		e.preventDefault();
		console.log(name, calorie, mealType);
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
					value={calorie}
					placeholder="Calories"
					onChange={(e) => setCalorie(e.target.value)}
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
		</>
	);
};

export default MealForm;
