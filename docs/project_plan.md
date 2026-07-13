# Project brief

Product: Quizzical — a five-question trivia quiz.

Primary user flow:

Landing screen → Start quiz → Loading → Answer 5 questions
→ Check answers → Review score/answers → Play again

---

## Core requirements

* A welcoming landing screen with a “Start quiz” button.
* Fetch five questions from Open Trivia DB.
* Decode HTML entities from the API.
* Show each question with shuffled answers.
* Allow one selected answer per question.
* Score the completed quiz.
* Clearly show correct, incorrect, and unselected correct answers.
* Fetch a fresh quiz on “Play again.”

---

## Quality requirements

* Works on mobile and desktop.
* Keyboard-accessible answer buttons with visible focus states.
* Clear loading and error states.
* No duplicated state: score is derived from the questions and selections.

---

# Delivery plan

0. Plan: Scope, data shape, and acceptance criteria agreed	
1. App shell: Start screen matches the basic design and can enter quiz mode
2. API integration:	App fetches, decodes, and reshapes five questions
3. Question UI:	Reusable questions and answer options render correctly	
4. Answer selection: One answer can be selected per question
5. Results:	Check answers scores and displays feedback
6. Replay/resilience:	Fresh quiz, loading state, and error handling	
7. Polish:	Responsive styling, accessibility pass, README, deployment	

Each slice should be small enough to demo in under a minute. I won’t start the next one until the current one works.