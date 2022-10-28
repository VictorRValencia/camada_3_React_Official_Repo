import React, { Children, useState } from "react";
import CaninoInfo from "./CaninoInfo";

const Caninos = [
  {
    id:1,
    nombre: "Firulais",
    edad: 3 + " Años Humanos",
    sexo: "Macho",
    raza: "pastor aleman",
    tamaño: "grande",
  },
  {
    id:2,
    nombre: "Maya",
    edad: 4 + " Años Humanos",
    sexo: "Hembra",
    raza: "pug",
    tamaño: "chico",
  },
  {
    id:3,
    nombre: "Pipo",
    edad: 5 + " Años Humanos",
    sexo: "Macho",
    raza: "pastor",
    tamaño: "mediano",
  },
  {
    id:4,
    nombre: "pacha",
    edad: 4 + " Años Humanos",
    sexo: "Hembra",
    raza: "pastor",
    tamaño: "chico",
  },
  {
    id: 5,
    nombre: "Tara",
    edad: 8 + " Años Humanos",
    sexo: "Hembra",
    raza: "Pitbull",
    tamaño: "grande",
  }
];

const Asincronico = () => {
  const [state, setState] = useState(Caninos);
  return (
    <div>
      <h1>Clientes caninos de Veterinaria</h1>
      <ul>
        {state.map((c) => (
          <li key={c.id}>
            <CaninoInfo canino={c}/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Asincronico;
