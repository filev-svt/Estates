import { useEffect, useState } from "react";

function App() {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5155/api/houses")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div>
      <h1>Estates</h1>
      <ul>
        {houses.map((house: any) => (
          <li>{house}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
