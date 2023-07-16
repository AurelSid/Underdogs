import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import UserDashboard from "./Components/Dashboard/UserDashboard";
import DesktopMenu from "./Components/DesktopMenu";
import Leaderboard from "./Components/Leaderboard/Leaderboard";

import "./App.css";

function App() {
  return (
    <Router>
      <DesktopMenu />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/Leaderboard" element={<Leaderboard />} />
      </Routes>
    </Router>
  );
}

export default App;
