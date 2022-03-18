import {Router} from 'express';
import * as noteCtrl from '../controllers/notesController.js'
const router = Router();

router.get('/', noteCtrl.getAllNotes);
router.post('/', noteCtrl.createNote);
router.put('/:id', noteCtrl.updateNote);
router.delete('/:id', noteCtrl.deleteNote);

export default router;