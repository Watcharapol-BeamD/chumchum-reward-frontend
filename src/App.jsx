import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ChumChumIcon from "../src/assets/ChumChumLogo-1.png";
import liff from "@line/liff";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    liftInit();
  }, []);

  const liftInit = async () => {
    await liff
      .init({
        liffId: "2001035033-w8g1yvBj",
      })
      .then(async (res) => {
        const userData = await liff.getProfile();
        setName(userData.displayName)
        setImage(userData.pictureUrl)
        console.log(res);
        // setMessage("LIFF init succeeded.");
      })
      .catch((e) => {
        // setMessage("LIFF init failed.");
        // setError(`${e}`);
      });
  };
  return (
    <>
      <div className="w-full">
        <div className="sm:container mx-auto p-4">
          <div className="flex justify-center items-center bg-purple-600 p-2 rounded-lg gap-1">
            <div className="flex justify-center rounded-md h-10 w-10 bg-green-300">
              <img src={ChumChumIcon} />
            </div>
            <p className="text-white ">Chum Chum Reward</p>
          </div>

          <form className="space-y-2">
            <div>
              <p className="font-bold text-lg text-center mt-2">ลงทะเบียน</p>
            </div>
            <div className=" ">
              <label htmlFor="telephone">เบอร์โทรศัพท์ :</label>
              <br />
              <input
                id="telephone"
                type="tel"
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
        <img src={image} className="rounded-full h-24"></img>
        {name}
      </div>
    </>
  );
}

export default App;