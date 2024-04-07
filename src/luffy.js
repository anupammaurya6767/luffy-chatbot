const axios = require('axios');

class Luffy {
  constructor() {
    this.endpoint = 'https://luffy-chatbot-backend-1.onrender.com';
  }

  async reply(message) {
    try {
      const response = await axios.get(`${this.endpoint}/reply?message=${encodeURIComponent(message)}`);
      return response.data.reply;
    } catch (error) {
      throw new Error('Failed to get reply from Fluffy chat bot');
    }
  }
}

module.exports = Luffy;
