import ProductService from '../services/ProductService.js';

export default class ProductController {
    static async create(data) {
        console.log('Creating a new product 🛍️');
        const newProduct = await ProductService.create(data);
        console.log('Product created successfully 🛍️');
        return newProduct;
    }

    static async get(query = {}) {
        const products = await ProductService.findAll(query);
        return products;
    }

    static async getById(productId) {
        const product = await ProductService.findById(productId);
        if (!product) {
            throw new Error(`Product ID not found: ${productId} 😨`);
        }
        return product;
    }

    static async updateById(productId, data) {
        await ProductController.getById(productId);
        console.log('Updating the product 🛍️');
        await ProductService.updateById(productId, data);
        console.log('Product updated successfully 🛍️');
    }

    static async deleteById(productId) {
        await ProductController.getById(productId);
        console.log('Deleting the product 🛍️');
        await ProductService.deleteById(productId);
        console.log('Product deleted successfully 🛍️');
    }
}
