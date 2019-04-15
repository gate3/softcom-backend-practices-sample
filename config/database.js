/* eslint-disable no-console */
const mongoose = require('mongoose');

const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
};

const connect = () => mongoose.connect(
  process.env.MONGO_URI,
  options,
  (err) => {
    if (err) {
      // console.log(err);
      throw err;
    }
    console.log('db connected.');
  },
);

mongoose.connection
  .on('error', console.log)
  .on('disconnected', () => connect());


module.exports = connect();
