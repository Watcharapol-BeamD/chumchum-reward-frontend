import { useEffect, useState } from "react";

import "./App.css";
import ChumChumIcon from "../src/assets/ChumChumLogo-1.png";
import liff from "@line/liff";
import { liffApiInstance } from "./services/liffApi";
import { Route, Router, Routes } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import RewardPage from "./pages/RewardPage";
import ProtectRouteOnRegister from "./components/ProtectRouteOnRegister";

import RewardDetailPage from "./pages/RewardDetailPage";
import EditProfilePage from "./pages/EditProfilePage";
import AlertPage from "./pages/AlertPage";
import AppVersion from "./components/AppVersion";

function App() {
  return (
    <div className="font-prompt min-h-screen flex flex-col">
      <div className="flex flex-col flex-1">
        <Routes>
          <Route path="/" element={<AlertPage />} />
          <Route path="client/" element={<RegisterPage />} />
          <Route path="client/register" element={<RegisterPage />} />
          <Route path="client/alert_page" element={<AlertPage />} />
          <Route element={<ProtectRouteOnRegister />}>
            <Route path="client/reward" element={<RewardPage />} />
            <Route
              path="client/reward/details/:id"
              element={<RewardDetailPage />}
            />
            <Route path="client/edit_profile" element={<EditProfilePage />} />
          </Route>
        </Routes>
      </div>

      <AppVersion />
    </div>
  );
}

export default App;
