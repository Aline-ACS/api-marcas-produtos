import { Router } from 'express';
import cors from 'cors';

import ProductController from './app/controllers/ProductController';
import BrandController from './app/controllers/BrandController';

const routes = Router();
routes.use(cors());

routes.get('/', (req, res) => {
  res.json({ result: 'teste API' });
});

routes.post('/products', ProductController.store);

routes.get('/products', ProductController.index);

routes.post('/brands', BrandController.store);

routes.get('/brands', BrandController.index);

export default routes;
