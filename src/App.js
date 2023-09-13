import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Header from "./Header";
import Menu from "./Menu";
import AboutUs from "./AboutUs";
import Login from "./Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
