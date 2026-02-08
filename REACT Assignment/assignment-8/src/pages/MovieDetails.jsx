import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import movies from "../data/movies";

function MovieDetails() {

  const { id } = useParams();
  const navigate = useNavigate();

  const movie = movies.find(m => m.id === Number(id));

  // NEW STATE
  const [tickets, setTickets] = useState(1);

  return (

    <div className="main">

      <div className="container">

        <h2>{movie?.name}</h2>

        <img
          className="movieImage"
          src={`/src/assets/${movie?.img}`}
        />

        <br/>

        {/* NEW INPUT FIELD */}
        <div style={{marginTop:"15px"}}>
          <label>Number of Tickets:</label>
          <br/>

          <input
            type="number"
            min="1"
            value={tickets}
            onChange={(e)=>setTickets(e.target.value)}
          />
        </div>

        <br/>

        <button
          className="btn"
          onClick={() =>
            navigate("/book", {
              state: {
                ...movie,
                tickets
              }
            })
          }
        >
          Book Seat
        </button>

      </div>

    </div>
  );
}

export default MovieDetails;
