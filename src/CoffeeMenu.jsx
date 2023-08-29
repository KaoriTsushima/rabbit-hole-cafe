import React from "react";
export default function CoffeeMenu() {
  const coffeeMenu = [
    {
      name: "Espreso",
      intensive: 11,
      amount: "40ml",
      price: 1.5,
    },
    {
      name: "Double Espreso",
      intensive: 11,
      amount: "80ml",
      price: 2.0,
    },
  ];

  return (
    <div className="CoffeeMenu">
      <h3>Coffee</h3>
    </div>
  );
}
