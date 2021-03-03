import React from 'react';

export default function Lista(props) {
  return (
    <select onClick={props.onClick} name="contenido" id="contenido">
      <option value="^\w+$">Alfanumerico</option>
      <option value="^\d+$">Numerico</option>
      <option value="^\s+$">Espacio</option>
    </select>

  )
}

