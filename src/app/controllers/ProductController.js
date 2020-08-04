import Product from '../models/Product';
import Brand from '../models/Brand';

class ProductController {
  async store(req, res) {
    try {
      const product = await Product.create(req.body);
      return res.json({ product });
    } catch (error) {
      return res.json({ error });
    }
  }

  async index(req, res) {
    try {
      const products = await Product.findAll({
        attributes: ['uid', 'name', 'quantity', 'brand_uid'],
        include: [
          {
            model: Brand,
            as: 'brand',
          },
        ],
      });

      return res.json({ products });
    } catch (error) {
      return res.json({ error });
    }
  }
}

export default new ProductController();
