
import "../styles/Movies.scss"

const Movies = ({ ...movie }) => {
  const API_IMG = "https://image.tmdb.org/t/p/w500/";
  //const [border , setBorder]=useState("green")
  return (
    <div className="card" style={{height:'390px'}}>
      <img
        className="img_card"
        src={API_IMG + movie.poster_path}
        alt={movie.original_title}
      />

      <h3 className="card_title">{movie.original_title}</h3>
      <div className="genres">
        {Math.floor(movie.vote_average) >= 7 ? <div className="vote" style={{border:`7px solid red`}}>{(movie.vote_average)}</div>:Math.floor(movie.vote_average) > 5 ? <div className="vote" style={{border:`7px solid green`}}>{(movie.vote_average)}</div>:<div className="vote" style={{border:`7px solid yellow`}}>{(movie.vote_average)}</div>} 
        
        {/* <div className="vote" style={{border:`2px solid ${border}`}}>{(movie.vote_average)}</div> */}
      </div>
      <div className="card_release_date"> {movie.release_date.split("-").reverse().join(".")} </div>
    </div>
  );
};

export default Movies;
