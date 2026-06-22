import express from 'express';
import { getNote } from './note.controller.js';

const router = express.Router();

router.get('/:folder/:filename', getNote);

export default router;
