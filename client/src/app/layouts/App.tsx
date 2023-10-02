import { useEffect, useState } from "react";
import { House } from "../models/House";
import { Catalog } from "../../features/catalog/Catalog";
import { Typography } from "@mui/material";

function App() {
  const [houses, setHouses] = useState<House[]>([]);

  useEffect(() => {
    fetch("http://localhost:5155/api/houses")
      .then((res) => res.json())
      .then((data: House[]) => setHouses(data));
  }, []);

  return (
    <div>
      <Typography variant="h1">Estates</Typography>
      <Catalog houses={houses} />
    </div>
  );
}

export default App;
