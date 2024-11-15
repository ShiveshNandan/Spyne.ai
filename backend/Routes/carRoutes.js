import express from 'express';
import { addcar, getcar } from '../controllers/carControllers.js';

const router = express.Router();

router.post('/addcar', addcar);
router.get('/', getcar);


export default router;