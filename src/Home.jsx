import React from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router";

export default function Home() {
  const navigate = useNavigate();

  return (
    <header className="App-header">
      <h3>Welcome to</h3>
      <h1>Rabbit Hole Caf&eacute;</h1>
      <Button className="mt-5 p-3" onClick={() => navigate("menu")}>
        See Our Menu
      </Button>
    </header>
  );
}
