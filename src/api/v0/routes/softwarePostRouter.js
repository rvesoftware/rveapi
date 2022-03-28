import {Router} from 'express';
import * as softwarePostCtrl from '../controllers/softwarePostController.js'
const router = Router();

router.post('/', softwarePostCtrl.createPost);
router.get('/', softwarePostCtrl.getAllPosts);
router.get('/:id', softwarePostCtrl.getOnePost);
router.put('/:id', softwarePostCtrl.updatePost);
router.delete('/:id', softwarePostCtrl.deletePost);

export default router;