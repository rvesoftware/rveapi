import {Router} from 'express';
import * as noteCtrl from '../controllers/notesController.js'
const router = Router();

router.post('/', noteCtrl.createNote);
router.get('/:type', noteCtrl.getAllNotes);
router.put('/:id', noteCtrl.updateNote);
router.delete('/:id', noteCtrl.deleteNote);

export default router;