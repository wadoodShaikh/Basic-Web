import "./App.css";
import "./Dashboard.css";
import "./Document.css";
import "./Gallery.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import Navbar from "./Components/Navbar";
import Gallery from "./Pages/Gallery";
import Document from "./Pages/Document";
import Notfound from "./Pages/Notfound";
import Dashboard from "./Components/Dashboard";
import { IoSearchSharp } from "react-icons/io5";

function App() {
  const [showNav, setShowNav] = useState(true);

  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <GiHamburgerMenu
            className="svgIcon-mid"
            onClick={() => setShowNav(!showNav)}
          />
          <div className="searchBar">
            <input type="text" className="inputSearch" placeholder="Search" />
            <IoSearchSharp className="svgIcon-small" />
          </div>
        </header>
        <div className={showNav ? "main active" : "main"}>
          <Navbar show={showNav} />
          <div className="content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/document" element={<Document />} />
              <Route path="/*" element={<Notfound />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
