import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Collectorlogin from "./Components/Collectorlogin";
import Userlogin from "./Components/Userlogin";
import BinDetail from "./Components/BinDetail";
import Usersignup from "./Components/Usersignup";
import Maps from "./Components/Maps";
import ShortDetails from "./Components/ShortDetails";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/user-login" element={<Userlogin />} />
        <Route path="/user-signup" element={<Usersignup />} />
        <Route path="/collector-login" element={<Collectorlogin />} />
        <Route path="/bin/:binId" element={<BinDetail />} />
        <Route exact path="/maps" element={<Maps />} />
        <Route exact path="/location/:binId" element={<ShortDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
