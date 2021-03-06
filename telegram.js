require('dotenv/config');

const token = process.env.TELEGRAM_TOKEN;

module.exports = {
    token,
    apiUrl: 'https://api.telegram.org/bot${token}',
    apiFileUrl: 'https://api.telegram.org/file/bot${token}'
}