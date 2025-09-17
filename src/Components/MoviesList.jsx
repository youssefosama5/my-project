import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./MoviesList.css";

const MoviesList = ({ searchTerm }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=12f95b4d46c36a2f74e0cd6ad0a44cc3&language=en-US&page=1")
      .then((res) => res.json())
      .then((data) => setMovies(data.results.slice(0, 20)))
      .catch((err) => console.error(err));
  }, []);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    if (filteredMovies.length > 0) {
      const firstMovie = document.getElementById(`movie-${filteredMovies[0].id}`);
      if (firstMovie) {
        firstMovie.scrollIntoView({ behavior: "smooth"});
      }
    }
  }, [filteredMovies]);

  return (
    <>
      <h2 id="Films">Our Movies</h2>
      <div className="movies-grid">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <div key={movie.id} id={`movie-${movie.id}`} className="movie-card">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date}</p>
                <Link to={`/movie/${movie.id}`} className="details-btn">
                  Details
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="no-results">No movies found</p>
        )}
      </div>
    </>
  );
};
export default MoviesList;
