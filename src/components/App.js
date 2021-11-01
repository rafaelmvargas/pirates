import React from "react";
import Header from "./Header";
import Pirate from "./Pirate";
import piratesFile from "../data/sample-pirates-array";

const pirateCalls = [
  "Aaarg, belay that!",
  "Avast me hearties!",
  "Shiver me timbers!",
];

function randomize() {
  return pirateCalls[Math.floor(Math.random() * pirateCalls.length)];
}

function App() {
  return (
    <div>
      <Header title={randomize()} />
      {/* <Pirate tagline="Ahoy from the Pirate Component" /> */}
      <div className="pirate">
        {piratesFile.map((pirate) => (
          <Pirate tagline={randomize()} pirate={pirate} />
        ))}
      </div>
    </div>
  );
}

export default App;
