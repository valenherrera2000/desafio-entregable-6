import { Router } from 'express';
import ProductController from '../../controllers/product.controller.js';

const router = Router();

router.get('/products', async (req, res) => {
    const { query = {} } = req;
    const products = await ProductController.get(query);
    res.status(200).json(products);
});

router.get('/products/:productId', async (req, res) => {
    try {
        const { params: { productId } } = req;
        const product = await ProductController.getById(productId);
        res.status(200).json(product);
    } catch (error) {
        res.status(error.statusCode || 500).json({ message: error.message });
    }
});

router.post('/products', async (req, res) => {
    const { body } = req;
    const newProduct = { ...body };
    const product = await ProductController.create(newProduct);
    res.status(201).json(product);
});

router.put('/products/:productId', async (req, res) => {
    try {
        const { params: { productId }, body } = req;
        await ProductController.updateById(productId, body);
        res.status(204).end();
    } catch (error) {
        res.status(error.statusCode || 500).json({ message: error.message });
    }
});

router.delete('/products/:productId', async (req, res) => {
    try {
        const { params: { productId } } = req;
        await ProductController.deleteById(productId);
        res.status(204).end();
    } catch (error) {
        res.status(error.statusCode || 500).json({ message: error.message });
    }
});

export default router;
