import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import Footer from "./component/Footer";
import Card from "./component/Card";
import Home from "./Pages/Home";
import News from "./Pages/News";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios
      .get("https://www.balldontlie.io/api/v1/players")
      .then((response) => {
        // handle success
        console.log(response);
      })
      .catch((error) => {
        // handle errors
      });
  });

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/news" element={<News />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
