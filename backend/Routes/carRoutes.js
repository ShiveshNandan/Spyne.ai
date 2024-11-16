import express from 'express';
import { addcar, deletecar, getcar, getUsercar, updatecar } from '../controllers/carControllers.js';

const router = express.Router();

router.post('/addcar', addcar);
router.put('/:id', updatecar);
router.delete('/:id', deletecar);
router.get('/', getcar);
router.post('/', getUsercar);


export default router;