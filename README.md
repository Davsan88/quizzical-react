# ✨ Quizzical – React Quiz App

Hello there! 👋

**Quizzical** is a responsive trivia quiz app built as the final solo project for Scrimba’s React course.

It fetches five multiple-choice questions from the Open Trivia Database API, lets players choose their answers, then provides visual feedback, a final score, and the option to play again with a fresh set of questions.

👉 [**Live Demo**](https://quizzical-davsan.netlify.app/)  
👉 [**View the Repository**](https://github.com/Davsan88/quizzical-react)

---

## 🚀 Project Overview

This project brought together the main React concepts I learned throughout the course into one complete, interactive application.

Rather than only focusing on getting the required functionality working, I also spent time improving the UI, refactoring repeated logic, and thinking carefully about state ownership and data flow.

The result is a polished trivia experience with a dark, neon-inspired visual style.

---

## ✨ Features

- Fetches five random multiple-choice trivia questions from an API
- Decodes HTML entities returned by the API
- Randomly places the correct answer among the incorrect options
- Allows one selected answer per question
- Lets users check answers even if some questions are unanswered
- Highlights correct answers in green
- Highlights selected incorrect answers in pink
- Calculates and displays the final score
- Disables answer selection once answers have been checked
- Starts a fresh round with new questions
- Includes loading and intro states
- Responsive design for desktop and mobile

---

## 🧠 Key React Concepts Practiced

- Functional components
- Props and component composition
- `useState`
- Conditional rendering
- Derived state
- Event handling
- Immutable state updates
- Array methods such as `.map()` and `.forEach()`
- Parent-to-child data flow
- Child-to-parent communication through callback props
- Dynamic class names with `clsx`

---

## 🏗️ State & Data Flow

The app keeps state as focused as possible.

`App` owns the overall application flow and fetched question data:

```text
intro → loading → playing
```

`Quiz` owns the state specific to an active quiz round:

```text
selectedAnswers
isQuizChecked
```

The final score is derived from the existing question and answer data rather than stored separately:

```text
questions[index].correctAnswer ↔ selectedAnswers[index]
```

> If a value can be calculated from existing props or state, it usually does not need to become state itself.

---

## 🛠️ Technologies Used

- React
- JavaScript (ES6+)
- CSS3
- Vite
- [Open Trivia Database API](https://opentdb.com/)
- `clsx`
- `html-entities`

---

## 🎨 Design Approach

I wanted this to feel like a finished small product rather than a basic course exercise.

Some of the design choices included:

- Dark, neon-inspired colour palette
- Cyan accents with pink and green feedback states
- Clear selected, correct, and incorrect answer styles
- Consistent spacing and component styling
- Responsive quiz layout
- A focused interface with minimal distractions

---

## ▶️ Running the Project Locally

1. Clone the repository:

```bash
git clone https://github.com/your-username/quizzical-react.git
```

2. Move into the project folder:

```bash
cd quizzical-react
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

---

## 🎯 What I Learned

This project was especially valuable because it required multiple React concepts to work together.

Some of my biggest takeaways were:

- Deciding which component should own each piece of state
- Keeping data relationships clear between questions and selected answers
- Using derived values instead of duplicating state
- Understanding that state changes trigger re-renders
- Preparing API data into a shape that is easy for components to render
- Refactoring working code into cleaner, more readable solutions

It was a real step from asking *“How do I make this work?”* to asking *“What is the clearest way to model this?”*

---

