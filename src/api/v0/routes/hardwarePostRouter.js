import {Router} from 'express';
import * as hardwarePostCtrl from '../controllers/hardwarePostController.js'
const router = Router();

router.post('/', hardwarePostCtrl.createPost);
router.get('/', hardwarePostCtrl.getAllPosts);
router.get('/:id', hardwarePostCtrl.getOnePost);
router.put('/:id', hardwarePostCtrl.updatePost);
router.delete('/:id', hardwarePostCtrl.deletePost);

export default router;