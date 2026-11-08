const CalorieCounter = ({ goal, meals }) => {
	const calorieSum = meals.reduce((sum, meal) => sum + meal.calories, 0);
	const remaining = goal - calorieSum;
	const percent = goal === 0 ? 0 : Math.round((calorieSum / goal) * 100);

	const sumByType = (type) => {
		return meals
			.filter((meal) => meal.type === type)
			.reduce((sum, meal) => sum + meal.calories, 0);
	};
	return (
		<>
			<h2>CalorieCounter</h2>
			<p>Eaten: {calorieSum}</p>
			<p style={{ color: calorieSum > goal ? "red" : "black" }}>
				Remaining: {remaining}
			</p>
			<p>Percent: {percent} %</p>
			<div>
				<p>Breakfast: {sumByType("Breakfast")}</p>
				<p>Lunch: {sumByType("Lunch")}</p>
				<p>Dinner: {sumByType("Dinner")}</p>
				<p>Snack: {sumByType("Snack")}</p>
			</div>
		</>
	);
};

export default CalorieCounter;
