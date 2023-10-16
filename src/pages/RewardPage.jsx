import liff from "@line/liff";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../storage/slices/userSlice";
import { Link } from "react-router-dom";
import ChumChumBg from "../assets/chumchum-top-bg.jpg";
import product1 from "../assets/m150.jpg";
const RewardPage = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const giftCard = "https://cdn-icons-png.flaticon.com/512/612/612886.png";

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

    dispatch(setUser(userData));
  };

  const renderItemCard = () => {
    return (
      <div className="flex ite   w-full h-36 p-2 rounded-xl shadow-md">
        <div className="w-1/3 flex justify-center ">
          <div className="w-32 h-32  ">
            <img src={product1} className="w-32 h-32 " />
          </div>
        </div>
        <div className="w-2/3 flex flex-col justify-between">
          <div className="line-clamp-2">
            <p>บัตรเซ็นทรัล 500 บาทบัตรเซ็นทรัล 500 บาทบัตรเซ็นทรัล 500 บาท</p>
          </div>
          <div className=" flex   justify-center items-center  space-x-2  ">
            <div className="w-2/5">
              <p className="text-yellow-500">20,000 ดวง</p>
            </div>
            <div className="w-3/5   flex justify-center">
              <button className="bg-gray-200 py-1 px-2 rounded-full ">
                <Link to="/reward/details">แลกของรางวัล</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderReward = () => {
    return (
      <div className="h-full p-2">
        <div id="Profile" className="  bg-white w-full h-40 p-2 rounded-xl ">
          <p className="text-center">สวัสดีตอนบ่าย</p>
          <div className="pt-2">
            <p>รหัสร้านค้า : xxxxxx</p>
            <p>ที่อยู่ : xxxxxxxx</p>
            <p>เบอร์โทร : 0616636349</p>
          </div>

          {/* <div className="">
            <div className="rounded-full overflow-hidden">
              <img src={user.pictureUrl} className="h-20 w-20  "></img>{" "}
            </div>
            <div className=" text-center">
              <p className="">{user.displayName}</p>
            </div>
          </div>

          <div>
            <p className="text-xl text-purple-500">คะแนนของคุณ</p>
            <p className="text-center">54954 คะแนน</p>
          </div> */}
        </div>

        <div className="flex flex-col items-center justify-center bg-purple-600 w-full h-24  p-3 rounded-xl my-2 ">
          <p className="text-center text-white text-lg">ดาวชำชำปัจจุบัน</p>
          <p className="text-center text-green-400 text-lg">&#127775; 0 ดวง</p>
        </div>

        <div className="space-y-2">
          {renderItemCard()}
          {renderItemCard()}
          {renderItemCard()}
          {renderItemCard()}
          {renderItemCard()}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full h-full">
      <div
        className=" h-screen "
        style={{
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${ChumChumBg}) `,
          backgroundPosition: "0 -50px",
        }}
      >
        {renderReward()}
      </div>
    </div>
  );
};

export default RewardPage;
