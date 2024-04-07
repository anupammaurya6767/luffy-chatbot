# Luffy Chatbot 🤖
<img align='right' src="https://github.com/anupammaurya6767/luffy-chatbot/blob/main/assets/luffy_chatbot.png" width="230">

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]


## About The Project

The **Luffy Chatbot** npm package provides an easy-to-use interface for interacting with the Luffy chatbot backend. Whether you want to integrate chatbot functionality into your applications or experiment with conversational AI, Luffy has got you covered! 🌟

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install Luffy Chatbot, simply run the following command:

```bash
npm install luffy-bot
```

## Usage

To use Luffy Chatbot in your Node.js project, follow these steps:

1. Require the Luffy class in your code:

```javascript
const Luffy = require('luffy-bot');
```

2. Initialize a new instance of the Luffy class:

```javascript
const luffy = new Luffy();
```

3. Use the `reply` method to get a response from the chatbot:

```javascript
const message = 'Hello, Luffy!';
luffy.reply(message)
  .then(reply => console.log(reply))
  .catch(error => console.error(error.message));
```

## Contributing

Contributions are welcome! If you find a bug or have an enhancement idea, please open an issue or submit a pull request. 🚀

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

<!-- MARKDOWN LINKS & IMAGES -->
[contributors-shield]: https://img.shields.io/github/contributors/anupammaurya6767/luffy-chatbot.svg?style=for-the-badge
[contributors-url]: https://github.com/anupammaurya6767/luffy-chatbot/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/anupammaurya6767/luffy-chatbot.svg?style=for-the-badge
[forks-url]: https://github.com/anupammaurya6767/luffy-chatbot/network/members
[stars-shield]: https://img.shields.io/github/stars/anupammaurya6767/luffy-chatbot.svg?style=for-the-badge
[stars-url]: https://github.com/anupammaurya6767/luffy-chatbot/stargazers
[issues-shield]: https://img.shields.io/github/issues/anupammaurya6767/luffy-chatbot.svg?style=for-the-badge
[issues-url]: https://github.com/anupammaurya6767/luffy-chatbot/issues
[license-shield]: https://img.shields.io/github/license/anupammaurya6767/luffy-chatbot.svg?style=for-the-badge
[license-url]: https://github.com/anupammaurya6767/luffy-chatbot/blob/main/LICENSE
