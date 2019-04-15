const simple = require('simple-mock');
const CrudMovies = require('../controllers/crud-movies.ctrl');
const { expect } = require('../../helpers/test-dependencies.helper');
const moviesModel = require('../models/movies.model');

const Joi = null;
let dependencies = null;

describe('Crud movies', () => {
  afterEach(() => {
    simple.restore();
  });
  beforeEach(() => {
    simple.mock(moviesModel, 'create');
    dependencies = { moviesModel, Joi };
  });

  describe('Base Test', () => {
    it('Does not crash when called', async () => {
      moviesModel.create.resolveWith(true);
      const data = {};
      const crudMoviesCtrl = new CrudMovies(dependencies);
      await crudMoviesCtrl.createMovie(data);
      expect(moviesModel.create.callCount).to.equal(1);
    });

    it('Returns correct value', async () => {
      moviesModel.create.resolveWith(true);
      const data = {};
      const crudMoviesCtrl = new CrudMovies(dependencies);
      const result = await crudMoviesCtrl.createMovie(data);
      expect(result).to.equal(true);
    });
  });
});
