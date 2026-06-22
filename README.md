# PersonalLearn

PersonalLearn is a full-stack personal learning management system that helps you organize notes, bookmarks, flashcards, and tasks in one place.

## Project Structure

This repository is a monorepo containing two main projects:

- **`PersonalLearn-Frontend`**: The user interface built with React and Vite.
- **`PersonalLearn-Backend`**: The REST API built with Node.js, Express, and MongoDB.

---

## Getting Started

To run this project locally, you will need to start both the frontend and the backend servers.

### 1. Backend Setup (Node.js API)

1. Navigate to the backend folder:
   ```bash
   cd PersonalLearn-Backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `PersonalLearn-Backend` folder with the following variables:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   PORT=5001
   ```
4. Start the backend server:
   ```bash
   npm run dev
   ```
   *The backend will run on `http://localhost:5001`.*

### 2. Frontend Setup (React/Vite)

1. Open a new terminal and navigate to the frontend folder:
   ```bash
   cd PersonalLearn-Frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `PersonalLearn-Frontend` folder:
   ```env
   VITE_API_URL=http://localhost:5001
   VITE_PORT=5173
   ```
4. Start the frontend development server:
   ```bash
   npm run dev
   ```
   *The frontend will run on `http://localhost:5173`.*

---

## Production / Live Links
- **Frontend Live URL:** *(Add your deployed frontend URL here)*
- **Backend Live URL:** `https://your-deployed-backend-url.onrender.com`

*(Note: When deploying the frontend, make sure to update the `VITE_API_URL` environment variable to point to the live backend URL).*
