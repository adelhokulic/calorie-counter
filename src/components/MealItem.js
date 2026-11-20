import { Button, ListGroup } from "react-bootstrap";

const MealItem = ({ meal, onDeleteMeal }) => {
	return (
		<ListGroup.Item as="li" className="meal-item">
			<div className="meal-info">
				<div className="meal-title">
					<span className="meal-name">{meal.name}</span>
					<span className={`badge rounded-pill type-badge type-${meal.type.toLowerCase()}`}>
						{meal.type}
					</span>
				</div>
				<small className="meal-details">
					{meal.calories} kcal · P {meal.protein}g · C {meal.carbs}g · F {meal.fat}g
				</small>
			</div>
			<Button
				variant="outline-danger"
				size="sm"
				className="delete-btn"
				onClick={() => onDeleteMeal(meal.id)}
			>
				Delete
			</Button>
		</ListGroup.Item>
	);
};

export default MealItem;
