import {Router} from 'express';
import * as categoryCtrl from '../controllers/categoryController.js'
const router = Router();

router.post('/', categoryCtrl.createCategory);

router.get('/', categoryCtrl.findAllCategories);

router.delete('/:id', categoryCtrl.deleteCategory);

export default router;