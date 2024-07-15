import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "../Display/LandingPage";
import PlayMusicComponent from "../Components/PlayMusicComponent";

export default function MusicPlayerRoutes() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/PlayMusic" element={<PlayMusicComponent />} />
        </Routes>
      </Router>
    </div>
  );
}
