import React from "react";
import { name, city } from "../data/data.js";

const divStyle = {
  color: 'firebrick'
};

const string = `${name} is a Web Developer from ${city}`

function Home() {
  // update the JSX being returned!
  return <div id="home">
    <h1 style={divStyle}>{string}</h1>
  </div>;
}

export default Home;
