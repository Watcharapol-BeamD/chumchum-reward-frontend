import React from "react";
import ChumChumIcon from "../assets/ChumChumLogo-1.png";
import { liffApiInstance } from "../services/liffApi";
import liff from "@line/liff";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../storage/slices/userSlice";
import { checkUserRegister, registerUser } from "../storage/slices/authSlice";
import OnLoadingScreen from "../components/OnLoadingScreen";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [userId, setUserId] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [retailName, setRetailerName] = useState("");
  const [bplusCode, setBplusCode] = useState("");
  const liftId = "2001035033-w8g1yvBj";
  const [isRegister, setIsRegister] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRedirectIfRegister = () => {
    navigate("/reward");
  };

  useEffect(() => {
    liftInit();
  }, []);

  const liftInit = async () => {
    await liff
      .init({
        liffId: "2001035033-w8g1yvBj",
      })
      .then(async () => {
        if (liff.isLoggedIn()) {
          getUser();
        } else {
          liff.login();
        }

        // setMessage("LIFF init succeeded.");
      })
      .catch((e) => {
        // setMessage("LIFF init failed.");
        // setError(`${e}`);
      });
  };

  const getUser = async () => {
    const userData = await liff.getProfile();
    setName(userData.displayName);
    setImage(userData.pictureUrl);
    setUserId(userData.userId);
    dispatch(setUser(userData));
    console.log(userData.userId);

    dispatch(checkUserRegister({ user_id: userData.userId }))
      .unwrap()
      .then((res) => {
        if (res.isRegister) {
          handleRedirectIfRegister();
        } else {
          setIsLoading(false);
        }
      });
  };

  const handleMobileNumber = (e) => {
    setMobileNumber(e.target.value);
  };

  const handleRetailerName = (e) => {
    setRetailerName(e.target.value);
  };

  const handleBplusCode = (e) => {
    setBplusCode(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      user_id: userId,
      retailer_name: retailName,
      mobile_number: mobileNumber,
      bplus_code: bplusCode,
    };
    dispatch(registerUser(userData))
      .unwrap()
      .then(() => {
        handleRedirectIfRegister();
      });
  };

  const sendData = async (userData) => {
    console.log(userData);
    try {
      await liffApiInstance.post("/register", userData).then(() => {
        handleRedirectIfRegister();
      });
    } catch (err) {
      console.log(err);
    }
  };

  // const checkIsRegister = () => {
  //   const userData = {
  //     user_id: userId,
  //   };
  //   return liffApiInstance
  //     .post("/is_register", userData)
  //     .then((res) => {
  //       setIsRegister(res.data.isRegister);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  const renderRegister = () => {
    return (
      <div className="w-full">
        <div className="sm:container mx-auto p-4">
          <div className="flex justify-center items-center bg-purple-600 p-2 rounded-lg gap-1">
            <div className="flex justify-center rounded-md h-10 w-10 bg-green-300">
              <img src={ChumChumIcon} />
            </div>
            <p className="text-white ">Chum Chum Reward</p>
          </div>

          <form className="space-y-2" onSubmit={(e) => handleSubmit(e)}>
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
                onChange={handleMobileNumber}
                value={mobileNumber}
              />
            </div>
            <div className=" ">
              <label htmlFor="retailerName">ชื่อร้านค้า :</label>
              <br />
              <input
                id="retailerName"
                className="border rounded-md h-10 w-full  p-2"
                onChange={handleRetailerName}
                value={retailName}
              />
            </div>
            <div className=" ">
              <label htmlFor="bplusCode">รหัสร้านค้า :</label>
              <br />
              <input
                id="bplusCode"
                className="border rounded-md h-10 w-full  p-2"
                onChange={handleBplusCode}
                value={bplusCode}
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
        <p>name: {name}</p>

        <p>userid: {userId}</p>
        <p> {isRegister}</p>
        {/* <button
          className="bg-red-200 h-10 w-10"
          onClick={checkIsRegister}
        ></button> */}
        {isRegister}
      </div>
    );
  };

  return (
    <div className="w-full h-full ">
      {/* {renderRegister()} */}
      {isLoading ? <OnLoadingScreen/> : renderRegister()}
    </div>
  );
};

export default RegisterPage;
