import { Request, Response } from 'express';
import wishServices from '../services/wishServices';

const wishController = async (req: Request, res: Response): Promise<void> => {
  const userName = req.body.userName;
  const wish = req.body.wish;
  try {
    const result = await wishServices(userName, wish);
    res.send(result);
  } catch (err) {
    const { message } = err;
    res.status(500).send({ message });
  }
};

export default wishController;
