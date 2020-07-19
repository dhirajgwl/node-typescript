import { Request, Response } from 'express';
import path from 'path';

const santaController = (req: Request, res: Response): void => {
  res.sendFile(path.join(__dirname, '../../dist/index.html'));
};

export default santaController;
