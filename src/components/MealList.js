import { Badge, Card, ListGroup } from "react-bootstrap";
import MealItem from "./MealItem";
const MealList = ({ meals, onDeleteMeal }) => {
	return (
		<Card className="app-card">
			<Card.Header className="card-header-clean">
				<h2 className="card-heading m-0">Your Meals</h2>
				<Badge pill bg="primary" className="count-badge">
					{meals.length}
				</Badge>
			</Card.Header>
			{meals.length === 0 ? (
				<Card.Body>
					<p className="empty-text">No meals yet</p>
				</Card.Body>
			) : (
				<ListGroup as="ul" variant="flush">
					{meals.map((meal) => {
						return (
							<MealItem key={meal.id} meal={meal} onDeleteMeal={onDeleteMeal} />
						);
					})}
				</ListGroup>
			)}
		</Card>
	);
};

export default MealList;
