import "./App.css";
import MealForm from "./components/MealForm";
import MealList from "./components/MealList";
import QuickAdd from "./components/QuickAdd";
import CalorieCounter from "./components/CalorieCounter";
import { useState } from "react";
import {
	Button,
	Card,
	Col,
	Container,
	FloatingLabel,
	Form,
	Navbar,
	Row,
} from "react-bootstrap";

function App() {
	const [goal, setGoal] = useState(2000);
	const [meals, setMeals] = useState([]);

	const addMeal = (newMeal) => {
		setMeals((oldMeals) => [...oldMeals, newMeal]);
	};
	const deleteMeal = (id) => {
		setMeals(meals.filter((meal) => meal.id !== id));
	};
	return (
		<>
			<Navbar sticky="top" className="app-navbar">
				<Container>
					<Navbar.Brand as="h1" className="app-brand m-0">
						<span>
							Calorie Counter<span className="app-brand-dot">.</span>
						</span>
						<span className="app-tagline">Track your daily intake</span>
					</Navbar.Brand>
					<Button
						variant="outline-secondary"
						size="sm"
						className="btn-ghost new-day-btn"
						onClick={(e) => setMeals([])}
					>
						New day
					</Button>
				</Container>
			</Navbar>

			<Container as="main" className="py-4">
				<Row className="g-4">
					<Col lg={5}>
						<div className="d-flex flex-column gap-4">
							<Card className="app-card">
								<Card.Body>
									<Form onSubmit={(e) => e.preventDefault()}>
										<FloatingLabel controlId="daily-goal" label="Daily goal (kcal)">
											<Form.Control
												type="number"
												value={goal === 0 ? "" : goal}
												onChange={(e) => setGoal(Number(e.target.value))}
												placeholder="Type today's calorie goal..."
											/>
										</FloatingLabel>
									</Form>
								</Card.Body>
							</Card>
							<MealForm onAddMeal={addMeal} />
							<QuickAdd onAddMeal={addMeal} />
						</div>
					</Col>

					<Col lg={7}>
						<div className="d-flex flex-column gap-4">
							<CalorieCounter goal={goal} meals={meals} />
							<MealList meals={meals} onDeleteMeal={deleteMeal} />
						</div>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default App;
