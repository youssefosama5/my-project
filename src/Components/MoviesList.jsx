import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./MoviesList.css";
import MovieDetails from "./MovieDetails";

const MoviesList = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=12f95b4d46c36a2f74e0cd6ad0a44cc3&language=en-US&page=1")
            .then((res) => res.json())
            .then((data) => setMovies(data.results.slice(0, 12)))
            .catch((err) => console.error(err));
    }, []);

    return (
        <>
        <h2 id="Films">Our Movies</h2>
        <div className="movies-grid" >
            {movies.map((movie) => (
                <div key={movie.id} className="movie-card">
                    <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                    />
                    <div className="movie-info">
                        <h3>{movie.title}</h3>
                        <p>{movie.release_date}</p>
                        {/* <p>{movie.vote_average}</p> */}
                        <Link to={`/movie/${movie.id}`} className="details-btn">Details</Link>
                    </div>
                </div>
            ))}
        </div>
        </>
    );
};

export default MoviesList;
