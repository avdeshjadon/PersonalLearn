# PersonalLearn Backend

This is the Express/Node.js backend for the PersonalLearn platform.
It serves API endpoints and synchronizes local markdown files with MongoDB.

## Running Locally

1. Set up `.env` with `MONGODB_URI` and `PORT=5001`.
2. Run `npm install`.
3. Run `npm run dev` to start the nodemon server.

## Production

In production, Chokidar sync is disabled. It serves as a pure REST API connected to MongoDB.
