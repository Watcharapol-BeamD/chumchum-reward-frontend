import React from "react";
import ChumChumLogo from "../assets/chumchum-logo.png";
import { liffApiInstance } from "../services/liffApi";
import liff from "@line/liff";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../storage/slices/userSlice";
import { checkUserRegister, registerUser } from "../storage/slices/authSlice";
import OnLoadingScreen from "../components/OnLoadingScreen";
import ChumChumBg from "../assets/chumchum-top-bg.jpg";
import CallIcon from "@mui/icons-material/Call";
import PersonIcon from "@mui/icons-material/Person";
import StorefrontIcon from "@mui/icons-material/Storefront";

const RegisterPage = () => {
  const { user } = useSelector((state) => state.user);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [userId, setUserId] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [retailerName, setRetailerName] = useState("");
  const [bplusCode, setBplusCode] = useState("");
  const liftId = "2001035033-w8g1yvBj";
  const [isRegister, setIsRegister] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [formMsg, setFormMsg] = useState("");
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

    dispatch(checkUserRegister({ customer_id: userData.userId }))
      .unwrap()
      .then((res) => {
        if (res.isRegister) {
          handleRedirectIfRegister();
        } else {
          setIsLoading(false);
        }
      });
  };

  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
    setFormMsg("");
  };

  const handleRetailerName = (e) => {
    setRetailerName(e.target.value);
    setFormMsg("");
  };

  const handleBplusCode = (e) => {
    setBplusCode(e.target.value);
    setFormMsg("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!phoneNumber || !retailerName || !bplusCode) {
      setFormMsg("Please fill in all required fields.");
    } else {
      const userData = {
        customer_id: userId,
        retailer_name: retailerName,
        phone_number: phoneNumber,
        bplus_code: bplusCode,
      };
      dispatch(registerUser(userData))
        .unwrap()
        .then(() => {
          handleRedirectIfRegister();
        });
    }
  };

  const renderRegister = () => {
    return (
      <div className="w-full h-full">
        <div className="  mx-auto p-4">
          <div className="flex justify-center items-center">
            <div className="flex justify-center items-center mt-10 ">
              <img src={ChumChumLogo} className="h-28" />
            </div>
          </div>
          <div className="py-2">
            <p
              className="font-bold text-2xl text-center mt-2 text-white"
              style={{ textShadow: "1px 2px black" }}
            >
              ลงทะเบียนชำชำรีวอร์ด
            </p>
          </div>
          <form className="space-y-3 mt-3" onSubmit={(e) => handleSubmit(e)}>
            <div className="flex items-center overflow-hidden rounded-full bg-gray-100  p-1  ">
              <div className="p-1">
                <CallIcon fontSize="medium" />
              </div>

              <input
                placeholder="กรอกเบอร์โทรศัพท์ 10 หลัก"
                id="telephone"
                type="tel"
                className="h-12 w-full  p-1 outline-none bg-gray-100"
                onChange={handlePhoneNumber}
                value={phoneNumber}
              />
            </div>
            <div className="flex items-center overflow-hidden rounded-full bg-gray-100  p-1">
              <div className="p-1">
                <PersonIcon fontSize="medium" />
              </div>

              <input
                placeholder="กรอกชื่อร้านค้า"
                id="retailerName"
                className="h-12   w-full  p-1 outline-none bg-gray-100"
                onChange={handleRetailerName}
                value={retailerName}
              />
            </div>
            <div className="flex items-center overflow-hidden rounded-full bg-gray-100  p-1">
              <div className="p-1">
                <StorefrontIcon fontSize="medium" />
              </div>
              <input
                placeholder="กรอกรหัสร้านค้า"
                id="bplusCode"
                className="h-12 w-full  p-1 outline-none bg-gray-100"
                onChange={handleBplusCode}
                value={bplusCode}
              />
            </div>
            <p className="text-red-500 text-center"> {formMsg && formMsg}</p>

            <div className="flex justify-center pt-4">
              <button
                className="bg-purple-600 h-12 w-56 rounded-full text-white   "
                type="submit"
              >
                ลงทะเบียน
              </button>
            </div>
          </form>
          <div className="text-center mt-8 text-gray-400">
            <p>พบปัญหาในการลงทะเบียน</p>
            <p>กรุณาติดต่อ Line: @ChumChum</p>
          </div>
        </div>

        {/* <img src={user.pictureUrl} className="rounded-full h-24"></img>
        <p>name: {user.displayName}</p>
        <p>userid: {user.userId}</p> */}
      </div>
    );
  };

  return (
    <div className="w-full h-full ">
      <div
        className=" h-screen "
        style={{
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${ChumChumBg}) `,
          backgroundPosition: "0 -50px",
        }}
      >
        {isLoading ? <OnLoadingScreen /> : renderRegister()}
      </div>
    </div>
  );
};

export default RegisterPage;
