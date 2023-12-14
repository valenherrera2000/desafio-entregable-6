import CartManager from '../dao/CartManager.js';

export default class CartService {
  static findAll(filter = {}) {
    return CartManager.get(filter);
  }

  static async create(payload) {
    console.log('Creating a new cart 🛒');
    const cart = await CartManager.create(payload);
    console.log(`Cart created successfully (${cart._id}) 🛒`);
    return cart;
  }

  static findById(sid) {
    return CartManager.getById(sid);
  }

  static updateById(sid, payload) {
    return CartManager.updateById(sid, payload);
  }

  static deleteById(sid) {
    return CartManager.deleteById(sid);
  }
}
