import express from 'express';
import { addcar, deletecar, getcar, updatecar } from '../controllers/carControllers.js';

const router = express.Router();

router.post('/addcar', addcar);
router.put('/:id', updatecar);
router.delete('/:id', deletecar);
router.get('/', getcar);


export default router;