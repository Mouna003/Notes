import { Router } from 'express';
import { 
  getAllNotes, 
  getOneNote, 
  createNote, 
  updateNote, 
  deleteNote 
} from '../controllers/note.controller.js';

const router = Router();

router.get('/', getAllNotes);
router.get('/:id', getOneNote);
router.post('/', createNote);
router.put('/:id', updateNote);
router.delete('/:id', deleteNote);

export default router;