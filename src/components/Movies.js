import genres from "./genres.json";

const Movies = ({ ...movie }) => {
  const API_IMG = "https://image.tmdb.org/t/p/w500/";
  return (
    <div className="card">
      <img
        className="img_card"
        src={API_IMG + movie.poster_path}
        alt={movie.original_title}
      />

      <h3 className="card_title">{movie.original_title}</h3>
      <div className="genres">
        {movie.genre_ids.map((m) =>
          genres.map((g) => g.id === m && <p>{g.name}</p>)
        )}
      </div>
      <div className="card_release_date"> {movie.release_date} </div>
    </div>
  );
};

export default Movies;
