import MealItem from "./MealItem";
const MealList = ({ meals, onDeleteMeal }) => {
	return (
		<>
			<h2 className="section-title">Your Meals</h2>
			{meals.length === 0 ? (
				<p className="empty-text">No meals yet</p>
			) : (
				<ul className="meal-list">
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
