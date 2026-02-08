import { useEffect, useState } from "react";
import "./App.css";

function App() {

  const [teams, setTeams] = useState([]);

  useEffect(() => {

    fetch("https://my-json-server.typicode.com/FreSauce/json-ipl/data")
      .then((res) => res.json())
      .then((data) => {

        // Sort ascending by NRR
        const sortedData = data.sort((a,b)=> a.NRR - b.NRR);

        setTeams(sortedData);
      });

  }, []);

  return (

    <div className="main">

      <div className="tableContainer">

        <h2>IPL Season 2022 Points</h2>

        <table>

          <thead>
            <tr>
              <th>No</th>
              <th>Team</th>
              <th>Matches</th>
              <th>Won</th>
              <th>Lost</th>
              <th>Tied</th>
              <th>NRR</th>
              <th>Points</th>
            </tr>
          </thead>

          <tbody>

            {teams.map((team,index)=>(
              <tr key={index}>
                <td>{team.No}</td>
                <td>{team.Team}</td>
                <td>{team.Matches}</td>
                <td>{team.Won}</td>
                <td>{team.Lost}</td>
                <td>{team.Tied}</td>
                <td>{team.NRR}</td>
                <td>{team.Points}</td>
              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default App;
