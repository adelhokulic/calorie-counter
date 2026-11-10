# Calorie Counter

A React app for tracking daily food intake. Set a calorie goal, log meals with their macronutrients, and see your progress update instantly.

Built as a project in the ITMentorstva frontend mentorship program.

## Features

- **Daily goal:** defaults to 2000 kcal, and changing it immediately updates every total
- **Meal logging:** name, calories, meal type, and optional protein, carbs, and fat
- **Form validation:** clear error messages for an empty name, calories of 0 or less, and negative macronutrients
- **Quick add:** one-click buttons for 10 common foods
- **Daily summary:** calories eaten, calories remaining, and percentage of the goal
- **Progress bar:** stays within its track when the goal is exceeded, and the remaining calories turn red
- **Breakdowns:** calorie totals by meal type and overall macronutrient totals
- **New day:** clears all meals and keeps the goal
- **Responsive layout:** mobile-first CSS with no UI framework

## Tech Stack

- React 19 (function components and the `useState` hook)
- JavaScript (ES6+)
- CSS3 (Grid, Flexbox, custom properties, media queries)
- Create React App

## How It Works

The app stores only two pieces of shared state, both in `App`: the daily `goal` and the `meals` array. Totals, percentages, and breakdowns are calculated from those values on every render, so they cannot get out of sync.

```text
App (goal, meals)
├── MealForm        adds a meal through a callback prop
├── QuickAdd        adds a predefined meal through the same callback
├── MealList        renders the meals
│   └── MealItem    displays one meal and requests its deletion
└── CalorieCounter  calculates and displays the summary
```

Each form field is a controlled input. State updates are immutable, using the spread operator to add meals and `filter` to remove them.

## Getting Started

You need [Node.js](https://nodejs.org/) and npm installed.

```bash
git clone https://github.com/adelhokulic/brojac-kalorija.git
cd brojac-kalorija
npm install
npm start
```

The app opens at [http://localhost:3000](http://localhost:3000).

To create a production build, run `npm run build`.

## Project Structure

```text
src/
├── components/
│   ├── CalorieCounter.js
│   ├── MealForm.js
│   ├── MealItem.js
│   ├── MealList.js
│   └── QuickAdd.js
├── App.css
└── App.js
```

## Roadmap

Data currently lives in memory, so it resets when the page reloads. Planned improvements:

- Save meals and the daily goal with `localStorage`
- Add automated tests
- Migrate the project to TypeScript

## Author

**Adel Hokulic** · [GitHub](https://github.com/adelhokulic)
