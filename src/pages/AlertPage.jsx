import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import liff from "@line/liff";
import ChumChumIcon from "../assets/ChumChumLogo-1.png";

const AlertPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (liff.getOS() !== "web") {
      navigate("/client/reward");
    }
  }, []);

  const renderAlertPage = () => {
    return (
      <div className="flex justify-center items-center w-full flex-1 bg-white">
        <div>
          <div className="flex justify-center   ">
            <img className="h-20 w-20 animate-bounce" src={ChumChumIcon} />
          </div>
          <p className="text-black text-xl font-medium ">
            กรุณาเข้าใช้งานผ่านทางสมาร์ทโฟน
          </p>
        </div>
      </div>
    );
  };

  return <> {renderAlertPage()}</>;
};

export default AlertPage;
