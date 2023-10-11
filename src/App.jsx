import { useEffect, useState } from "react";

import "./App.css";
import ChumChumIcon from "../src/assets/ChumChumLogo-1.png";
import liff from "@line/liff";
import { liffApiInstance } from "./services/liffApi";
import { Route, Router, Routes } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import RewardPage from "./pages/RewardPage";
import ProtectRouteOnRegister from "./components/ProtectRouteOnRegister";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RegisterPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/reward" element={<RewardPage />} />
        {/* 
        <Route element={<ProtectRouteOnRegister />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
        <Route path="/reward" element={<RewardPage />} /> */}
      </Routes>
    </>
  );
}

export default App;
