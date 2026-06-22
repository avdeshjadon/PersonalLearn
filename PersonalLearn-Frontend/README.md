# P-Learn (Personal Learning Hub)

A comprehensive, modern React application designed as a complete personal learning and productivity hub. This platform integrates reading materials, task management, active recall via flashcards, progress analytics, and more into a single cohesive dashboard.

## Key Features

- **Dashboard & Analytics**: Track your learning progress, task completion rates, and overall engagement through a detailed analytics dashboard.
- **Learning Hub**: Access structured notes on various topics including Java, Object-Oriented Programming (OOPs), Postman APIs, and Interview Prep. Features full Markdown support for rich content rendering.
- **Task Management**: Create, organize, and track your daily tasks. Keep track of what you have accomplished and what is pending.
- **Flashcards System**: Practice active recall with interactive flashcards. Test your knowledge on various subjects and flip cards to reveal answers.
- **Bookmarks**: Save important topics and notes for quick reference and easy access later.
- **Profile & Settings**:
  - Dynamic avatar selector powered by DiceBear API with over 60 styles.
  - Profile data persistence via MongoDB.
  - Native Dark Mode support for an eye-friendly experience.
  - Export functionality to download your data locally.

## Tech Stack

**Frontend:**
- React 19
- Vite
- Tailwind CSS
- Recharts (for Analytics)
- Lucide React (Icons)
- React Router

**Backend:**
- Node.js
- Express
- MongoDB (Mongoose)

## Quick Start

### Prerequisites
Make sure you have Node.js and MongoDB installed on your system. You need a running instance of MongoDB locally or a connection string to a cloud cluster.

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/personal-learn.git
cd personal-learn
```

### 2. Install Dependencies
```bash
# Install frontend dependencies
npm install

# Install backend dependencies
cd backend
npm install
cd ..
```

### 3. Environment Variables
Create a `.env` file in the `backend` directory if required, or ensure your local MongoDB is running on `mongodb://localhost:27017/personallearn`.

### 4. Run the Application
You need to run both the frontend and the backend servers simultaneously. Open **two separate terminal windows** in the project root directory.

**Terminal 1 (Start the Backend Server):**
```bash
npm run server
```
*(This starts the Node.js/Express backend)*

**Terminal 2 (Start the Frontend Development Server):**
```bash
npm run dev
```
*(This starts the React/Vite frontend)*

Open `http://localhost:5173` in your browser.

## Project Structure

```
PersonalLearn/
├── backend/                      # Node.js Express Server
│   ├── config/                   # Database configuration
│   ├── controllers/              # Business logic (Tasks, Flashcards, Profile)
│   ├── models/                   # Mongoose Database Models
│   ├── routes/                   # API Endpoints
│   └── server.js                 # Backend Entry Point
├── public/                       
│   └── notes/                    # Markdown content files
├── src/                          # React Frontend
│   ├── components/               # Reusable UI components
│   │   └── dashboard/            # Dashboard specific components (Tasks, Analytics, Settings, etc.)
│   ├── hooks/                    # Custom React hooks (Data fetching & State)
│   ├── data/                     # Static topic structures
│   ├── App.jsx                   # Main application component
│   ├── index.css                 # Global Styles & Theme Variables
│   └── main.jsx                  # React Entry Point
└── package.json
```

## Architecture

The project follows a decoupled client-server architecture. 
- The frontend is a Single Page Application (SPA) built with React, consuming a RESTful API provided by the Express backend.
- State is managed locally via Custom Hooks and synchronized with the MongoDB database to ensure data persistence across sessions.
- Styling is implemented using Tailwind CSS along with custom CSS variables for seamless theme switching between Light and Dark modes.

## Author

Avdesh Jadon

## License

This project is open source and available under the MIT License.
