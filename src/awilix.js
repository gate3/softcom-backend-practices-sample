const awilix = require('awilix');

const container = awilix.createContainer();

container.loadModules([
  [
    './**/*.model.js',
    {
      register: awilix.asValue,
      lifetime: awilix.Lifetime.SINGLETON,
    },
  ],
  [
    './**/*.helper.js',
    {
      // register: awilix.asClass,
      lifetime: awilix.Lifetime.SINGLETON,
    },
  ],
  [
    './**/*.ctrl.js',
    {
      // register: awilix.asClass,
      lifetime: awilix.Lifetime.SINGLETON,
    },
  ],
],
{
  cwd: __dirname,
  formatName: 'camelCase',
});

const joi = require('joi');

container.register({
  Joi: awilix.asValue(joi),
});

module.exports = {
  container,
};
