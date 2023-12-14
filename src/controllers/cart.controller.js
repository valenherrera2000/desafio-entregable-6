import CartService from '../services/CartService.js';

export default class CartController {
  static async create(data) {
    console.log('Creating a new cart 🛒');
    const newCart = await CartService.create(data);
    console.log('Cart created successfully 🛒');
    return newCart;
  }

  static async get(query = {}) {
    const carts = await CartService.findAll(query);
    return carts;
  }

  static async getById(sid) {
    const cart = await CartService.findById(sid);
    if (!cart) {
      throw new Error(`Cart ID not found: ${sid} 😨`);
    }
    return cart;
  }

  static async updateById(sid, data) {
    await CartController.getById(sid);
    console.log('Updating the cart 🛒');
    await CartService.updateById(sid, data);
    console.log('Cart updated successfully 🛒');
  }

  static async deleteById(sid) {
    await CartController.getById(sid);
    console.log('Deleting the cart 🛒');
    await CartService.deleteById(sid);
    console.log('Cart deleted successfully 🛒');
  }
}
