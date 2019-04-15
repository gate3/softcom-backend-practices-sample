/* eslint-disable class-methods-use-this */
class CrudMovies {
  constructor({ moviesModel, Joi }) {
    this.moviesModel = moviesModel;
    this.Joi = Joi;
  }

  async createMovie(data) {
    // Do joi validation using this.Joi
    return this.moviesModel.create(data);
  }

  editMovie(movieId) {

  }

  updateMovie(movieId, data) {

  }

  deleteMovie(movieId) {

  }
}

module.exports = CrudMovies;
