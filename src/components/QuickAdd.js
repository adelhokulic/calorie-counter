const QuickAdd = ({ onAddMeal }) => {
	const foods = [
		{
			name: "Apple",
			calories: 52,
			protein: 0.3,
			carbs: 14,
			fat: 0.2,
			type: "Snack",
		},
		{
			name: "Egg",
			calories: 78,
			protein: 6.3,
			carbs: 0.6,
			fat: 5.3,
			type: "Breakfast",
		},
		{
			name: "Rice",
			calories: 130,
			protein: 2.7,
			carbs: 28,
			fat: 0.3,
			type: "Lunch",
		},
		{
			name: "Banana",
			calories: 89,
			protein: 1.1,
			carbs: 23,
			fat: 0.3,
			type: "Snack",
		},
		{
			name: "Oatmeal",
			calories: 68,
			protein: 2.4,
			carbs: 12,
			fat: 1.4,
			type: "Breakfast",
		},
		{
			name: "Greek Yogurt",
			calories: 59,
			protein: 10,
			carbs: 3.6,
			fat: 0.4,
			type: "Breakfast",
		},
		{
			name: "Almonds",
			calories: 579,
			protein: 21,
			carbs: 22,
			fat: 50,
			type: "Snack",
		},
		{
			name: "Chicken Breast",
			calories: 165,
			protein: 31,
			carbs: 0,
			fat: 3.6,
			type: "Lunch",
		},

		{
			name: "Salmon",
			calories: 208,
			protein: 20,
			carbs: 0,
			fat: 13,
			type: "Dinner",
		},
		{
			name: "Broccoli",
			calories: 34,
			protein: 2.8,
			carbs: 7,
			fat: 0.4,
			type: "Dinner",
		},
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
