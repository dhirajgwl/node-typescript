import express from 'express';
import santaController from './src/controller/santaController'

const router:express.Router = express.Router();

router.get('/', santaController);


export default router;