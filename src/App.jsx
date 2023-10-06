import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ChumChumIcon from "../src/assets/ChumChumLogo-1.png";

function App() {
  const [count, setCount] = useState(0);

  const lineInit = () => {};

  return (
    <>
      <div className="w-full">
        <div className="sm:container mx-auto p-4">
          <div className="flex justify-center items-center bg-purple-600 p-2 rounded-lg gap-1">
            <div className="h-10 w-10 bg-green-300">
              <img src={ChumChumIcon} />
            </div>
            <p className="text-white ">Chum Chum Reward</p>
          </div>

          <form className="space-y-2" onSubmit={""}>
            <div>
              <p className="font-bold text-lg text-center mt-2">ลงทะเบียน</p>
            </div>
            <div className=" ">
              <label htmlFor="Username">ชื่อผู้ใช้ :</label>
              <br />
              <input
                id="Username"
                type="text"
                className="border rounded-md h-10 w-full  p-2"
              />
            </div>
            <div className=" ">
              <label htmlFor="Username">ชื่อร้านค้า :</label>
              <br />
              <input
                id="Username"
                className="border rounded-md h-10 w-full  p-2"
              />
            </div>
            <div className=" ">
              <label htmlFor="Username">รหัสร้านค้า :</label>
              <br />
              <input
                id="Username"
                className="border rounded-md h-10 w-full  p-2"
              />
            </div>
            <div className="flex justify-center">
              <button
                className="p-2 bg-purple-600 rounded-lg text-white "
                type="submit"
              >
                ลงทะเบียน
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
