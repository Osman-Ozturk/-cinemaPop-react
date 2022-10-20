import genres from "./genres.json";

const Movies = ({ movies }) => {
  const API_IMG = "https://image.tmdb.org/t/p/w500/";
  return (
    <div className="cards">
      {movies ? (
        movies.map((movie) => (
          <div className="card" key={movie.id}>
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
              {movie.vote_average.toFixed(1)}
            </div>
            <div className="card_release_date"> {movie.release_date} </div>
          </div>
        ))
      ) : (
        <p>we haven't found your movie</p>
      )}
    </div>
  );
};

export default Movies;
