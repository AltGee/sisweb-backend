import { Router, Request, Response } from 'express';
import productRouter from './productRoutes';

const apiRouter: Router = Router();

apiRouter.use('/product', productRouter);

apiRouter.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default apiRouter;