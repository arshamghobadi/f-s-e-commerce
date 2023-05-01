import { mongooseConnect } from '@/lib/moongose';
import { Product } from '@/models/product';
import { _id } from '@next-auth/mongodb-adapter';

export default async function handler(req, res) {
  const { method } = req;
  await mongooseConnect();
  if (method === 'GET') {
    if (req.query?.id) {
      res.json(await Product.findOne({ _id: req.query.id }));
    } else {
      res.json(await Product.find());
    }
  }
  if (method === 'POST') {
    const { title, description, price } = req.body;
    const productDoc = await Product.create({
      title,
      description,
      price,
    });
    res.json(productDoc);
  }
  if (method === 'PUT') {
    const { title, description, price, idElement } = req.body;
    await Product.updateOne({ _id: idElement }, { title, description, price });
    res.json(true);
  }
}
