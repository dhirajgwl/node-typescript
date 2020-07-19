import { Request, Response } from 'express';
import wishServices from '../services/wishServices';

const wishController = async (req: Request, res: Response): Promise<void> => {
  const userName = req.body.userName;
  const wish = req.body.wish;
  const result = await wishServices(userName, wish);
  res.send(result);
};

export default wishController;
