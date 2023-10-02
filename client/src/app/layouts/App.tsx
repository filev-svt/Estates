import { useEffect, useState } from "react";
import { House } from "../models/House";

function App() {
  const [houses, setHouses] = useState<House[]>([]);

  useEffect(() => {
    fetch("http://localhost:5155/api/houses")
      .then((res) => res.json())
      .then((data: House[]) => setHouses(data));
  }, []);

  return (
    <div>
      <h1>Estates</h1>
      <ul>
        {houses.map((house) => (
          <li>{"Dům " + house.roomsCount + "-pokojový, " + house.city}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
