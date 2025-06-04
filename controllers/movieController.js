const connection = require("../data/db");

const index = (req, res) => {
  const sql = `SELECT * FROM movies`;
  connection.query(sql, (error, moviesResutls) => {
    if (error) {
      res.status(500).json({ message: error.message });
    }
    const movies = moviesResutls.map((movie) => {
      return { ...movie, image: req.imagePath + movie.image };
    });
    res.send(movies);
  });
};

const show = (req, res) => {
  const id = req.params.id;
  const sqlMovie = `SELECT M.*, AVG(R.vote) as avg FROM movies M JOIN reviews R on M.id = R.movie_id WHERE M.id = ?`;
  connection.query(sqlMovie, [id], (error, movieResult) => {
    if (error) {
      res.status(500).json({ message: error.message });
    }
    const movie = movieResult[0];
    const sqlReviews = `SELECT * FROM reviews WHERE movie_id = ?`;
    connection.query(sqlReviews, [id], (error, reviewsResult) => {
      if (error) {
        res.status(500).json({ message: error.message });
      }
      movie.reviews = reviewsResult;
      movie.image = req.imagePath + movie.image;
      res.send(movie);
    });
  });
};

module.exports = { index, show };
