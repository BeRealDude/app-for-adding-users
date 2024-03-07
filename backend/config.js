require('dotenv').config();

const { NODE_ENV } = process.env;
const { SECRET_SIGNING_KEY } = process.env;
const { PORT = 3001 ||  process.env.PORT } = process.env;
const { DB_ADDRESS = 'mongodb+srv://vercel-admin-user:pHgT6zcAyMxRcTia@cluster0.hfyirm4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority' } = process.env;

module.exports = {
  NODE_ENV,
  SECRET_SIGNING_KEY,
  PORT,
  DB_ADDRESS,
};