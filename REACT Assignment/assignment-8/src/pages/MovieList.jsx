import { useNavigate } from "react-router-dom";
import movies from "../data/movies";

function MovieList() {

  const navigate = useNavigate();

  return (

    <div className="main">

      <div className="container">

        <h2>Movies</h2>

        <div className="grid">

          {movies.map(movie => (

            <div
              className="movieCard"
              key={movie.id}
              onClick={() => navigate(`/movie/${movie.id}`)}
            >

              <img
                src={`/src/assets/${movie.img}`}
                alt={movie.name}
              />

              <p>{movie.name}</p>

            </div>

          ))}

        </div>

      </div>

    </div>

  );
}

export default MovieList;
