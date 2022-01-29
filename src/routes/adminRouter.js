import {Router} from 'express';
import * as adminCtrl from '../controllers/adminController.js'
const router = Router();

router.post('/signin', adminCtrl.signin);
router.post('/signup', adminCtrl.signup);


export default router;