import { Card, Col, ProgressBar, Row } from "react-bootstrap";

const CalorieCounter = ({ goal, meals }) => {
	const calorieSum = meals.reduce((sum, meal) => sum + meal.calories, 0);
	const proteinSum = Math.round(
		meals.reduce((sum, meal) => sum + meal.protein, 0),
	);
	const carbsSum = Math.round(meals.reduce((sum, meal) => sum + meal.carbs, 0));
	const fatSum = Math.round(meals.reduce((sum, meal) => sum + meal.fat, 0));
	const remaining = goal - calorieSum;
	const percent = goal === 0 ? 0 : Math.round((calorieSum / goal) * 100);
	const barWidth = Math.min(percent, 100);
	const sumByType = (type) => {
		return meals
			.filter((meal) => meal.type === type)
			.reduce((sum, meal) => sum + meal.calories, 0);
	};
	return (
		<Card className="app-card">
			<Card.Body>
				<Card.Title as="h2" className="card-heading">
					Today's summary
				</Card.Title>

				<Row className="g-2 mb-3">
					<Col xs={4}>
						<div className="stat-tile">
							<p className="stat-label">Eaten</p>
							<p className="stat-value">{calorieSum}</p>
							<p className="stat-unit">kcal</p>
						</div>
					</Col>
					<Col xs={4}>
						<div className="stat-tile">
							<p className="stat-label">Remaining</p>
							<p
								className="stat-value"
								style={{ color: calorieSum > goal ? "red" : "black" }}
							>
								{remaining}
							</p>
							<p className="stat-unit">kcal</p>
						</div>
					</Col>
					<Col xs={4}>
						<div className="stat-tile">
							<p className="stat-label">Percent</p>
							<p className="stat-value">{percent}%</p>
							<p className="stat-unit">of goal</p>
						</div>
					</Col>
				</Row>

				<ProgressBar
					now={barWidth}
					label={`${percent}%`}
					visuallyHidden
					striped
					animated
					variant="primary"
					className="calorie-progress mb-4"
				/>

				<p className="section-label">Macronutrients</p>
				<Row className="g-2 mb-3">
					<Col xs={4}>
						<div className="mini-tile">
							Protein <strong>{proteinSum} g</strong>
						</div>
					</Col>
					<Col xs={4}>
						<div className="mini-tile">
							Carbs <strong>{carbsSum} g</strong>
						</div>
					</Col>
					<Col xs={4}>
						<div className="mini-tile">
							Fat <strong>{fatSum} g</strong>
						</div>
					</Col>
				</Row>

				<p className="section-label">By meal type</p>
				<Row className="g-2">
					<Col xs={6} md={3}>
						<div className="mini-tile">
							Breakfast <strong>{sumByType("Breakfast")} kcal</strong>
						</div>
					</Col>
					<Col xs={6} md={3}>
						<div className="mini-tile">
							Lunch <strong>{sumByType("Lunch")} kcal</strong>
						</div>
					</Col>
					<Col xs={6} md={3}>
						<div className="mini-tile">
							Dinner <strong>{sumByType("Dinner")} kcal</strong>
						</div>
					</Col>
					<Col xs={6} md={3}>
						<div className="mini-tile">
							Snack <strong>{sumByType("Snack")} kcal</strong>
						</div>
					</Col>
				</Row>
			</Card.Body>
		</Card>
	);
};

export default CalorieCounter;
