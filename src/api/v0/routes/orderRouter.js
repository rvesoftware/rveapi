import { Router } from 'express';
import * as orderCtrl from '../controllers/orderController.js';
const router = Router();

router.post('/', orderCtrl.createOrder);

router.get('/', orderCtrl.findAllOrders);

router.get('/:id', orderCtrl.findOneOrder);

router.delete('/:id', orderCtrl.deleteOrder);

export default router;
