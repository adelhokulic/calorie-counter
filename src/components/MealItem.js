const MealItem = ({meal, onDeleteMeal}) => {
	return (
		<li className="meal-item">
				{meal.name}, {meal.calories} kcal, {meal.type}
				<button className="button button-danger" onClick={() => onDeleteMeal(meal.id)}>Delete</button>
		</li>
	);
};

export default MealItem;
