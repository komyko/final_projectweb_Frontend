import { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import Footer from "../component/Footer";
import Card from "../component/Card";
function Home() {
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
      <Card />
      <Card />
      <Card />
      <Footer />
    </div>
  );
}

export default Home;
