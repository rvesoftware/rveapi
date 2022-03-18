import {Router} from 'express';
import * as userCtrl from '../controllers/userController.js'
const router = Router();

router.post('/', userCtrl.createUser);

router.post('/signin', userCtrl.signin);

router.post('/update', userCtrl.updateUser);

router.post('/upload', userCtrl.uploadImage);

router.get('/', userCtrl.findAllUsers);

router.get('/:id', userCtrl.findOneUser);

router.delete('/:id', userCtrl.deleteUser);


export default router;