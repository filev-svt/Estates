import { Fragment } from "react";
import { House } from "../../app/models/House";

interface Props {
  houses: House[];
}

export const Catalog = ({ houses }: Props) => {
  return (
    <Fragment>
      <h1>Catalog</h1>
      <ul>
        {houses.map((house) => (
          <li>{"Dům " + house.roomsCount + "-pokojový, " + house.city}</li>
        ))}
      </ul>{" "}
    </Fragment>
  );
};
