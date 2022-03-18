import {Router} from 'express';
import * as clientCtrl from '../controllers/clientController.js'
const router = Router();

router.post('/', clientCtrl.createClient);

router.get('/', clientCtrl.findAllClients);

router.get('/:id', clientCtrl.findOneClient);

router.delete('/:id', clientCtrl.deleteClient);

export default router;