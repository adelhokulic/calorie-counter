import { useState } from "react";
import { Alert, Button, Card, Col, FloatingLabel, Form, Row } from "react-bootstrap";

const MealForm = ({ onAddMeal }) => {
	const typesOfMeal = ["Breakfast", "Lunch", "Dinner", "Snack"];
	const [name, setName] = useState("");
	const [calories, setCalories] = useState("");
	const [mealType, setMealType] = useState("Breakfast");
	const [errorMessage, setErrorMessage] = useState("");

	const [protein, setProtein] = useState("");
	const [carbs, setCarbs] = useState("");
	const [fat, setFat] = useState("");

	const insertMeal = (e) => {
		e.preventDefault();

		if (name.trim() === "") {
			setErrorMessage("Please insert name");
			return;
		}
		if (Number(calories) <= 0) {
			setErrorMessage("Calories must be greater than 0.");
			return;
		}

		if (protein < 0 || carbs < 0 || fat < 0) {
			setErrorMessage("Macronutrients cannot be negative");
			return;
		}
		const meal = {
			id: Date.now(),
			name: name.trim(),
			calories: Number(calories),
			protein: Number(protein),
			carbs: Number(carbs),
			fat: Number(fat),
			type: mealType,
		};
		onAddMeal(meal);
		setName("");
		setCalories("");
		setMealType("Breakfast");
		setErrorMessage("");
		setProtein("");
		setCarbs("");
		setFat("");
	};
	return (
		<Card className="app-card">
			<Card.Body>
				<Card.Title as="h2" className="card-heading">
					Insert your meal
				</Card.Title>
				<Form onSubmit={insertMeal}>
					<Row className="g-2">
						<Col xs={12}>
							<FloatingLabel controlId="meal-name" label="Name">
								<Form.Control
									type="text"
									value={name}
									placeholder="Name"
									onChange={(e) => setName(e.target.value)}
								/>
							</FloatingLabel>
						</Col>
						<Col xs={6}>
							<FloatingLabel controlId="meal-calories" label="Calories (kcal)">
								<Form.Control
									type="number"
									value={calories}
									placeholder="Calories"
									onChange={(e) => setCalories(e.target.value)}
								/>
							</FloatingLabel>
						</Col>
						<Col xs={6}>
							<FloatingLabel controlId="meal-type" label="Meal type">
								<Form.Select
									value={mealType}
									onChange={(e) => setMealType(e.target.value)}
								>
									{typesOfMeal.map((type) => {
										return (
											<option key={type} value={type}>
												{type}
											</option>
										);
									})}
								</Form.Select>
							</FloatingLabel>
						</Col>
						<Col xs={4}>
							<FloatingLabel controlId="meal-protein" label="Protein (g)">
								<Form.Control
									type="number"
									value={protein}
									placeholder="Protein (g)"
									onChange={(e) => setProtein(e.target.value)}
								/>
							</FloatingLabel>
						</Col>
						<Col xs={4}>
							<FloatingLabel controlId="meal-carbs" label="Carbs (g)">
								<Form.Control
									type="number"
									value={carbs}
									placeholder="Carbs (g)"
									onChange={(e) => setCarbs(e.target.value)}
								/>
							</FloatingLabel>
						</Col>
						<Col xs={4}>
							<FloatingLabel controlId="meal-fat" label="Fat (g)">
								<Form.Control
									type="number"
									value={fat}
									placeholder="Fat (g)"
									onChange={(e) => setFat(e.target.value)}
								/>
							</FloatingLabel>
						</Col>
						<Col xs={12}>
							<Button type="submit" variant="primary" className="w-100 add-meal-btn">
								Add meal
							</Button>
						</Col>
					</Row>
				</Form>
				{errorMessage && (
					<Alert variant="danger" className="form-error mt-3 mb-0">
						{errorMessage}
					</Alert>
				)}
			</Card.Body>
		</Card>
	);
};

export default MealForm;
