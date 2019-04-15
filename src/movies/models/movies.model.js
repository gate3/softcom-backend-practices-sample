const mongoose = require('mongoose');

const MoviessSchema = new mongoose.Schema({
  movie_name: String,
  genre: String,
  rating: Number,
  producer: String,
},
{
  timestamps: true,
});

module.exports = mongoose.model('movies', MoviessSchema);
