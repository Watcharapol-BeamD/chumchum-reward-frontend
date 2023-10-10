import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import liff from "@line/liff";
import { liffApiInstance } from "../services/liffApi";

const ProtectRouteOnRegister = ({ redirectPath = "/reward", children }) => {
  const navigate = useNavigate(); // Get the navigation function from react-router-dom

  useEffect(() => {
    liftInit2();
  }, []);

  const liftInit2 = async () => {
    await liff.init({
      liffId: "2001035033-w8g1yvBj",
    });

    liff.ready
      .then(() => {
        getUser();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getUser = async () => {
      const userData = await liff.getProfile();
    await checkIsRegister(userData.userId);
  };

  const checkIsRegister = async (userId) => {
    const userData = {
      user_id: userId,
    };

    await liffApiInstance
      .post("/is_register", userData)
      .then((res) => {
        console.log(res);
        if (res.data.isRegister) {
          console.log(res.data.isRegister);
          navigate("/reward"); // Use navigate to redirect to the "/reward" page
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return children || <Outlet />;
};

export default ProtectRouteOnRegister;
