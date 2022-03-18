import { Router } from 'express';
import * as sellsCtrl from '../controllers/sellsController.js';
const router = Router();

router.post('/', sellsCtrl.createSell);

router.get('/', sellsCtrl.findAllSells);

router.get('/:id', sellsCtrl.findOneQuotation);

router.delete('/:id', sellsCtrl.deleteSell);

router.post('/email', sellsCtrl.sendEmailQuotation);

export default router;
