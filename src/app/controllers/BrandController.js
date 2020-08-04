import Brand from '../models/Brand';

class BrandController {
  async store(req, res) {
    try {
      const brand = await Brand.create(req.body);
      return res.json({ brand });
    } catch (error) {
      return res.json({ error });
    }
  }

  async index(req, res) {
    try {
      const brands = await Brand.findAll();

      return res.json({ brands });
    } catch (error) {
      return res.json({ error });
    }
  }
}

export default new BrandController();
