import React from "react";
import chumchumIcon from "../assets/ChumChumLogo-1.png";

const OnLoadingScreen = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-white  ">
      <div>
        <div className="flex justify-center   ">
          <img className="h-20 w-20 animate-bounce" src={chumchumIcon} />
        </div>
        <p className="text-black text-3xl font-medium animate-pulse">Loading...</p>
      </div>
    </div>
  );
};

export default OnLoadingScreen;
