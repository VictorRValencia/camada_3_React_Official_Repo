import React from "react";

const CaninoInfo = ({canino}) => {
  return (
    <div>
      <h2>nombre: {canino.nombre}</h2>
      <p>Edad: {canino.edad}</p>
      <p>Sexo: {canino.sexo}</p>
      <p>raza: {canino.raza}</p>
      <p>tamaño: {canino.tamaño}</p>
    </div>
  );
};

export default CaninoInfo;
