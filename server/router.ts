import { Router } from 'express';
import controller from './controller';

const router: Router = Router();

router.get('/', controller.santaController);
router.post('/send-wish', controller.wishController);

export default router;
