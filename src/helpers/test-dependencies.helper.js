/* eslint-disable import/no-extraneous-dependencies */
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

const { expect } = chai;

// const should = chai.should()
const spies = require('chai-spies');

chai.use(spies);
chai.use(chaiAsPromised);
module.exports = {
  chai,
  expect,
};
