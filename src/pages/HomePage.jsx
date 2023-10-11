import React from "react";
import chumchumIcon from "../assets/ChumChumLogo-1.png";
const HomePage = () => {
  const renderHome = () => {
    return (
      <div className="bg-purple-200 min-h-screen ">
        <div className="flex justify-center pt-4">
          <div className=" h-24 w-24 bg">
            <img className="h-24 w-24" src={chumchumIcon} />
          </div>
        </div>
        <div className="flex justify-center">
         <button className="bg-white p-1 px-2 rounded-2xl">ลงทะเบียน</button>
        </div>
      </div>
    );
  };

  return <div className="h-full w-full">{renderHome()}</div>;
};
export default HomePage;
