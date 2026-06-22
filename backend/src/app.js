import express from 'express';
import cors from 'cors';

import { ENV } from './config/env.js';
import { errorHandler } from './middleware/error.middleware.js';
import routes from './routes/index.js';

const app = express();

app.use(cors());
app.use(express.json());

// API Routes
app.use('/api', routes);

// Error Handling Middleware should be the last middleware
app.use(errorHandler);

export default app;
