import { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import Footer from "../component/Footer";
import Card from "../component/Card";
function News() {
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
     
     <iframe id="iframe-score108" width="100%" height="520" frameBorder="0" scrolling="no" src="https://www.score108.com/soccer/standingAPI" ></iframe>
      <Footer />
    </div>
  );
}

export default News;
