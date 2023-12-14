import { Router } from 'express';
import ProductManager from '../../dao/ProductManager';

const router = Router();

router.get('/products', async (req, res) => {
    let products = await ProductManager.get();
    res.render('products', { products: products.map(p => p.toJSON()) });
});


export default router;