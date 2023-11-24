require('dotenv').config();

const { NODE_ENV } = process.env;
const { SECRET_SIGNING_KEY } = process.env;
const { PORT = 3001 } = process.env;
const { DB_ADDRESS = 'mongodb://127.0.0.1:27017/appAddUsersDb' } = process.env;

module.exports = {
  NODE_ENV,
  SECRET_SIGNING_KEY,
  PORT,
  DB_ADDRESS,
};