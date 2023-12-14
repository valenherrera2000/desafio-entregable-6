import MessageManager from '../dao/MessageManager.js';

export default class MessageService {
  static findAll(filter = {}) {
    return MessageManager.get(filter);
  }

  static async create(payload) {
    console.log('Creating a new message 📩');
    const message = await MessageManager.create(payload);
    console.log(`Message created successfully (${message._id}) 📩`);
    return message;
  }

  static findById(messageId) {
    return MessageManager.getById(messageId);
  }

  static updateById(messageId, payload) {
    return MessageManager.updateById(messageId, payload);
  }

  static deleteById(messageId) {
    return MessageManager.deleteById(messageId);
  }
}
