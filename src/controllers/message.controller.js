import MessageService from '../services/MessageService.js';

export default class MessageController {
  static async create(data) {
    console.log('Creating a new message 📩');
    const newMessage = await MessageService.create(data);
    console.log('Message created successfully 📩');
    return newMessage;
  }

  static async get(query = {}) {
    const messages = await MessageService.findAll(query);
    return messages;
  }

  static async getById(messageId) {
    const message = await MessageService.findById(messageId);
    if (!message) {
      throw new Error(`Message ID not found: ${messageId} 😨`);
    }
    return message;
  }

  static async updateById(messageId, data) {
    await MessageController.getById(messageId);
    console.log('Updating the message 📩');
    await MessageService.updateById(messageId, data);
    console.log('Message updated successfully 📩');
  }

  static async deleteById(messageId) {
    await MessageController.getById(messageId);
    console.log('Deleting the message 📩');
    await MessageService.deleteById(messageId);
    console.log('Message deleted successfully 📩');
  }
}
