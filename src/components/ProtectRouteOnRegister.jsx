import React, { useEffect, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import liff from "@line/liff";
import { liffApiInstance } from "../services/liffApi";

const ProtectRouteOnRegister = ({ redirectPath = "/client/register", children }) => {
  const location = useLocation();
  const user = useSelector((state) => state.user.user.customer_id);
 
  if (!user) {
    return <Navigate to={redirectPath} replace state={{ from: location }} />;
  }

  return children || <Outlet />;
};

export default ProtectRouteOnRegister;
