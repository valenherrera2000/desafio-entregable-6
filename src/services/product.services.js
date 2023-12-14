import ProductManager from '../dao/ProductManager.js';

export default class ProductService {
    static findAll(filter = {}) {
        return ProductManager.get(filter);
    }

    static async create(payload) {
        console.log('Creating a new product 🛍️');
        const product = await ProductManager.create(payload);
        console.log(`Product created successfully (${product._id}) 🛍️`);
        return product;
    }

    static findById(productId) {
        return ProductManager.getById(productId);
    }

    static updateById(productId, payload) {
        return ProductManager.updateById(productId, payload);
    }

    static deleteById(productId) {
        return ProductManager.deleteById(productId);
    }
}
