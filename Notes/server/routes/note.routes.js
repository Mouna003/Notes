import { Router } from 'express';
import { getAllNotes, getOneNote, createNote, updateNote, deleteNote } from '../controllers/note.controller.js';

const router = Router();

router.route('/')
  .get(getAllNotes)
  .post(createNote);

router.route('/:id')
  .get(getOneNote)
  .put(updateNote)
  .delete(deleteNote);

export default router;