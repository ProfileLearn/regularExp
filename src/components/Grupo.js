import React from 'react';
import { useState, useEffect } from 'react';
import Lista from './Lista';
import Texto from './Texto';;

export default function Grupo() {

  const [texto, settexto] = useState("default");
  const [regex, setregex] = useState("");
  const [verdadero, setverdadero] = useState(null)

  function handleInput(event) {
    settexto(texto + event.target.value);
  }

  //ESTO ES PRUEBA 
  function handleOptionClick(event) {
    setregex(regex + event.target.value);
  }
  useEffect(() => {
    setverdadero(new RegExp(regex).test(texto));
    console.log(verdadero)
  }, [regex, texto, verdadero]);

  return (
    <div className="Grupo">
      <Lista onClick={handleOptionClick} />
      <br />
      <Texto onInput={handleInput} />
      <p>{verdadero ? "True" : "False"}</p>
    </div>
  );
}


