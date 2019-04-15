/**
 * we need to use a closure for normal functions bcos the first arguement to a Di
 * resolved function are dependencies the inner function can now take the regular arguemnts
 * Check the route to see how it was used.
 * */
const mostWatchedMovies = ({ moviesModel }) => (limit, skip) => {
  // limit and skip argurments are to paginate or load data gradually
};

module.exports = mostWatchedMovies;
