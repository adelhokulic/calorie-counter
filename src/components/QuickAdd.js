const QuickAdd = ({ onAddMeal }) => {
	const foods = [
		{ name: "Apple", calories: 52, type: "Snack" },
		{ name: "Egg", calories: 78, type: "Breakfast" },
		{ name: "Banana", calories: 89, type: "Snack" },
	];

	const handleQuickAdd = (food) => {
		onAddMeal({ ...food, id: Date.now() });
	};

	return (
		<div className="quick-add">
			{foods.map((food) => {
				return (
					<button
						className="button button-quick"
						key={food.name}
						onClick={() => handleQuickAdd(food)}
					>
						{food.name} {food.calories} kcal
					</button>
				);
			})}
		</div>
	);
};

export default QuickAdd;
