import "./App.css";
import Navbar from "./component/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import News from "./Pages/News";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Table from "./Pages/Table";
import Blog from "./Pages/blog";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/players" element={<News />}></Route>
          <Route path="/table" element={<Table />}></Route>
          <Route path="/Register" element={<Register />}></Route>
          <Route path="/Blog" element={<Blog />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
