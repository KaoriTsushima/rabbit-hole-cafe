import React from "react";
import "./CoffeeMenu.css";
export default function CoffeeMenu() {
  const coffeeDatas = [
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
    <div classMane="CoffeeMenu">
      <h2>Coffee</h2>
      {coffeeDatas.map(function (coffeeData, index) {
        return (
          <p key={index} className="coffee-contants">
            <span className="item-name">{coffeeData.name}</span> Intensive:{" "}
            {coffeeData.intensive} Amount: {coffeeData.amount} Price:{" "}
            <strong>£{coffeeData.price}</strong>
          </p>
        );
      })}
    </div>
  );
}
