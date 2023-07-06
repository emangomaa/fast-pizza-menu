import React from "react";

function Pizza({ pizzaObj }) {
  const { name, price, ingredients, photoName } = pizzaObj;

  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={photoName} alt={name} />
      <div className="pizza-content">
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : price}</span>
      </div>
    </li>
  );
}

export default Pizza;
