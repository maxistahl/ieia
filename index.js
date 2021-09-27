import React from "react";
import 'index.css';

function hola(nombre) {
  alert("Hola " + nombre)
}

const Description = ({ name }) => {
  <div>
    <h2>{name}</h2>
    <p>Hola Mundo!</p>
    <button onClick={alert("maxi")}>Deci hola</button>
  </div>
}

export default Description;