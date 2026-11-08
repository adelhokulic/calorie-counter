const MealItem = ({meal, onDeleteMeal}) => {
	return (
		<li>
				{meal.name}, {meal.calories} kcal, {meal.type}
				<button onClick={() => onDeleteMeal(meal.id)}>Delete</button>
		</li>
	);
};

export default MealItem;
