# Frontend + Backend Assignment

**Tech Stack:** React, JavaScript, TailwindCSS, Node.js (Express)

## Objective
Build a simplified ChatGPT-style application. The application should have a responsive frontend and a Node.js backend that serves mock data through APIs (no database required).

## Requirements

### Frontend (React, JavaScript, TailwindCSS)

#### Landing Page
- A “New Chat” screen where the user can start a new chat.

#### Left Side Panel
- Displays:
  - All sessions
  - "New Chat" option
  - User info
- Panel should be collapsible.

#### Chat Interface
- After the user asks a new question:
  - Fetch dummy data (from backend API).
  - Display answer in Table View (Structured Tabular Data) along with some descriptions.

#### Answer Feedback
- Each answer should have:
  - Like 👍
  - Dislike 👎

#### Dark/Light Theme
- Toggle option on the top bar.
- Entire application (background, font, colors, etc.) should switch themes.

### Backend (Node.js, Express)
- **Mock Data:** Create dummy JSON data to serve via APIs.
- **APIs:**
  - Start new chat → Returns new session ID.
  - Ask question in a session → Returns dummy table + information.
  - Fetch sessions → Returns list of sessions with IDs/titles.
  - Fetch session history → Returns full chat history for a session.

⚠️ No database required — serve data directly from mock JSON files.

### General Requirements
- Application must be responsive across mobile, and desktop.
- Code should be clean, modular, and well-structured.
- Follow best practices for:
  - React + JavaScript
  - TailwindCSS for styling
  - Node.js Express APIs

### Deliverables
- Frontend code (React + JavaScript + TailwindCSS).
- Backend code (Node.js Express with mock JSON APIs).
- Instructions to run both frontend and backend locally.
- Deploy code on GitHub and share the link to the public repository.
