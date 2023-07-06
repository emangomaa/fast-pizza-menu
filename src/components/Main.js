import React from "react";
import Pizza from "./Pizza";
function Main({ pizzas }) {
  return (
    <main className="main">
      <h2>our menu</h2>
      {pizzas.length > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're working on our menu. please visit us on last time :)</p>
      )}
    </main>
  );
}

export default Main;
