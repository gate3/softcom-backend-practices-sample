const { expect } = require('./helpers/test-dependencies.helper');
const DI = require('./awilix');

describe('Dependency injection', () => {
  it('should contain dependencies', () => {
    const { cradle } = DI.container;
    expect(cradle).to.have.ownProperty('moviesModel');
    expect(cradle).to.have.ownProperty('crudMoviesCtrl');
    expect(cradle).to.have.ownProperty('mostWatchedMoviesCtrl');
    expect(cradle).to.have.ownProperty('Joi');
  });
});
