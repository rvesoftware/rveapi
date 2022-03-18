import {Router} from 'express';
import * as productCtrl from '../controllers/productController.js'
const router = Router();

router.get('/', productCtrl.getAllProducts);
router.post('/', productCtrl.createProduct);
// router.put('/:id', productCtrl.updateNote);
router.delete('/:id', productCtrl.deleteProduct);

export default router;