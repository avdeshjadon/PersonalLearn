import express from 'express';
import { getNote } from '../controllers/noteController.js';

const router = express.Router();

router.get('/:folder/:filename', getNote);

export default router;
