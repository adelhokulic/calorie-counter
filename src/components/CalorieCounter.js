const CalorieCounter = ({ goal, meals }) => {
	const calorieSum = meals.reduce((sum, meal) => sum + meal.calories, 0);
	const proteinSum = Math.round(
		meals.reduce((sum, meal) => sum + meal.protein, 0),
	);
	const carbsSum = Math.round(meals.reduce((sum, meal) => sum + meal.carbs, 0));
	const fatSum = Math.round(meals.reduce((sum, meal) => sum + meal.fat, 0));
	const remaining = goal - calorieSum;
	const percent = goal === 0 ? 0 : Math.round((calorieSum / goal) * 100);
	const barWidth = Math.min(percent, 100);
	const sumByType = (type) => {
		return meals
			.filter((meal) => meal.type === type)
			.reduce((sum, meal) => sum + meal.calories, 0);
	};
	return (
		<>
			<h2 className="section-title">CalorieCounter</h2>
			<p className="stat">Eaten: {calorieSum}</p>
			<p
				className="stat stat-remaining"
				style={{ color: calorieSum > goal ? "red" : "black" }}
			>
				Remaining: {remaining}
			</p>
			<p className="stat">Percent: {percent} %</p>
			<div className="progress">
				<div className="progress-fill" style={{ width: `${barWidth}%` }}></div>
			</div>
			<div className="type-totals macro-totals">
				<p className="type-total">Protein: {proteinSum} g</p>
				<p className="type-total">Carbs: {carbsSum} g</p>
				<p className="type-total">Fat: {fatSum} g</p>
			</div>

			<div className="type-totals">
				<p className="type-total">Breakfast: {sumByType("Breakfast")}</p>
				<p className="type-total">Lunch: {sumByType("Lunch")}</p>
				<p className="type-total">Dinner: {sumByType("Dinner")}</p>
				<p className="type-total">Snack: {sumByType("Snack")}</p>
			</div>
		</>
	);
};

export default CalorieCounter;
