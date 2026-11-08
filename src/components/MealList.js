import MealItem from "./MealItem";
const MealList = ({ meals, onDeleteMeal }) => {
	return (
		<>
			<h2>Your Meals</h2>
			{meals.length === 0 ? (
				<p>No meals yet</p>
			) : (
				<ul>
					{meals.map((meal) => {
						return (
							<MealItem key={meal.id} meal={meal} onDeleteMeal={onDeleteMeal} />
						);
					})}
				</ul>
			)}
		</>
	);
};

export default MealList;
