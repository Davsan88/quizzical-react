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

Works on mobile and desktop.
Keyboard-accessible answer buttons with visible focus states.
Clear loading and error states.
No duplicated state: score is derived from the questions and selections.