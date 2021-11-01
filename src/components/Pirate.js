import React from "react";
import "../assets/css/Pirate.css";

function Pirate(props) {
  return (
    <section>
      <h3>{props.pirate.name}</h3>
      <p>Favorite saying: {props.tagline}</p>
    </section>
  );
}

export default Pirate;
