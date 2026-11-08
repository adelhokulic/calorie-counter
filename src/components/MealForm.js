import { useState } from "react";

const MealForm = ({ onAddMeal }) => {
	const typesOfMeal = ["Breakfast", "Lunch", "Dinner", "Snack"];
	const [name, setName] = useState("");
	const [calories, setCalories] = useState("");
	const [mealType, setMealType] = useState("Breakfast");
	const [errorMessage, setErrorMessage] = useState("");

	const [protein, setProtein] = useState("");
	const [carbs, setCarbs] = useState("");
	const [fat, setFat] = useState("");

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

		if (protein < 0 || carbs < 0 || fat < 0) {
			setErrorMessage("Macronutrients cannot be negative");
			return;
		}
		const meal = {
			id: Date.now(),
			name: name.trim(),
			calories: Number(calories),
			protein: Number(protein),
			carbs: Number(carbs),
			fat: Number(fat),
			type: mealType,
		};
		onAddMeal(meal);
		setName("");
		setCalories("");
		setMealType("Breakfast");
		setErrorMessage("");
		setProtein("");
		setCarbs("");
		setFat("");
	};
	return (
		<>
			<h2 className="section-title">Insert your meal</h2>
			<form className="meal-form" onSubmit={insertMeal}>
				<input
					className="field meal-form-wide"
					type="text"
					value={name}
					placeholder="Name"
					onChange={(e) => setName(e.target.value)}
				/>
				<input
					className="field"
					type="number"
					value={calories}
					placeholder="Calories"
					onChange={(e) => setCalories(e.target.value)}
				/>
				<input
					className="field"
					type="number"
					value={protein}
					placeholder="Protein (g)"
					onChange={(e) => setProtein(e.target.value)}
				/>
				<input
					className="field"
					type="number"
					value={carbs}
					placeholder="Carbs (g)"
					onChange={(e) => setCarbs(e.target.value)}
				/>
				<input
					className="field"
					type="number"
					value={fat}
					placeholder="Fat (g)"
					onChange={(e) => setFat(e.target.value)}
				/>

				<select
					className="field meal-form-wide"
					value={mealType}
					onChange={(e) => setMealType(e.target.value)}
				>
					{typesOfMeal.map((type) => {
						return (
							<option key={type} value={type}>
								{type}
							</option>
						);
					})}
				</select>
				<button className="button meal-form-wide" type="submit">
					Add meal
				</button>
			</form>
			{errorMessage && <p className="form-error">{errorMessage}</p>}
		</>
	);
};

export default MealForm;
