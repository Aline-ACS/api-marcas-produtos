import { Router } from 'express';
import cors from 'cors';

import ProductController from './app/controllers/ProductController';
import BrandController from './app/controllers/BrandController';

const routes = Router();
routes.use(cors());

routes.get('/', (req, res) => {
  res.json({ result: 'teste API' });
});

// Routes Products
routes.post('/products', ProductController.store);
routes.get('/products', ProductController.index);
routes.get('/products/:uid', ProductController.show);
routes.delete('/products/:uid', ProductController.delete);
routes.put('/products/:uid', ProductController.update);

// Routes Brands
routes.post('/brands', BrandController.store);
routes.get('/brands', BrandController.index);
routes.get('/brands/:uid', BrandController.show);
routes.delete('/brands/:uid', BrandController.delete);
routes.put('/brands/:uid', BrandController.update);

export default routes;
