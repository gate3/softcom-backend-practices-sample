/* eslint-disable no-console */
const mongoose = require('mongoose');

const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
};

const connect = () => new Promise((resolve, reject) => mongoose.connect(
  process.env.MONGO_URI,
  options,
  (err) => {
    if (err) {
      // console.log(err);
      reject(err);
    }
    console.log('db connected.');
    resolve('db connected.');
  },
));

mongoose.connection
  .on('error', console.log)
  .on('disconnected', () => connect());


module.exports = connect();
