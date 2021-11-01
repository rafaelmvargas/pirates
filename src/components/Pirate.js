import React from "react";
import "../assets/css/Pirate.css";
import avatar from "../assets/img/avatar.png";

function Pirate({ pirate, tagline }) {
  const { name, year, weapon, vessel, description, image } = pirate;

  return (
    <section>
      <summary>
        <img src={`../assets/img/${image}`} alt="pirate" />
        <h3>{name}</h3>
        <ul>
          <li>Died: {year}</li>
          <li>Weapon: {weapon}</li>
          <li>Vessel: {vessel}</li>
        </ul>
      </summary>
      <article>
        <h2>{tagline}</h2>
        <p>{description}</p>
      </article>
    </section>
  );
}

export default Pirate;
