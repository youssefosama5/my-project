import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./MovieDetails.css";

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=12f95b4d46c36a2f74e0cd6ad0a44cc3&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setMovie(data));

    fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=12f95b4d46c36a2f74e0cd6ad0a44cc3&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setCast(data.cast.slice(0, 5)));
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  // دالة التنقل لصفحة الحجز
  const goToBooking = () => {
    navigate(`/booking/${movie.id}`, { state: { movie } });
  };

  return (
    <div className="movie-details">

      {/* صورة واحدة فقط */}
      <div className="movie-details__image-container">
        <img
          className="movie-details__image"
          src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`}
          alt={movie.title}
        />
      </div>

      {/* معلومات الفيلم */}
      <div className="movie-details__info">
        <h1 className="movie-details__title">{movie.title}</h1>
        <div className="movie-details__meta">
          <span className="movie-details__genre">{movie.genres?.[0]?.name}</span>
          <span className="movie-details__rating">⭐ {movie.vote_average?.toFixed(1)}</span>
          <span className="movie-details__time">⏱ {movie.runtime} min</span>
          <button className="movie-details__book-btn" onClick={goToBooking}>
            Book Now
          </button>
        </div>
      </div>

      {/* Synopsis */}
      <div className="movie-details__synopsis">
        <h2>Synopsis</h2>
        <p>{movie.overview}</p>
      </div>

      {/* Cast */}
      <div className="movie-details__cast">
        <h2>Main Cast</h2>
        <div className="movie-details__cast-grid">
          {cast.map((actor) => (
            <div key={actor.id} className="movie-details__cast-card">
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w300${actor.profile_path}`
                    : "/placeholder.jpg"
                }
                alt={actor.name}
              />
              <h4>{actor.name}</h4>
              <p>{actor.character}</p>
            </div>
          ))}
        </div>
      </div>

      {/* زر الحجز الكبير */}
      <div className="movie-details__book-bottom">
        <button className="movie-details__big-book-btn" onClick={goToBooking}>
          Book Your Ticket Now
        </button>
      </div>
    </div>
  );
};

export default MovieDetails;

