const MealItem = ({ meal, onDeleteMeal }) => {
	return (
		<li className="meal-item">
			{meal.name}, {meal.calories} kcal, {meal.type}, P: {meal.protein}g, C:{" "}
			{meal.carbs}g, F: {meal.fat}g
			<button
				className="button button-danger"
				onClick={() => onDeleteMeal(meal.id)}
			>
				Delete
			</button>
		</li>
	);
};

export default MealItem;
