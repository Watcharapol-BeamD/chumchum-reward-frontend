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
import RewardDetailPage from "./pages/RewardDetailPage";
import EditProfilePage from "./pages/EditProfilePage";
import AlertPage from "./pages/AlertPage";

function App() {
  return (
    <div className="font-prompt">
      <Routes>
      <Route path="/" element={<AlertPage />} />
        <Route path="client/" element={<RegisterPage />} />
        <Route path="client/register" element={<RegisterPage />} />
        <Route path="client/alert_page" element={<AlertPage />} />
        <Route element={<ProtectRouteOnRegister />}>
          <Route path="client/reward" element={<RewardPage />} />
          <Route path="client/reward/details/:id" element={<RewardDetailPage />} />
          <Route path="client/edit_profile" element={<EditProfilePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
