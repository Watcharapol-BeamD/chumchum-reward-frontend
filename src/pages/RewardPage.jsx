import liff from "@line/liff";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../storage/slices/userSlice";
import { Link } from "react-router-dom";
import ChumChumBg from "../assets/chumchum-top-bg.jpg";
import product1 from "../assets/m150.jpg";
import { getReward } from "../storage/slices/rewardSlice";
import RewardCard from "../components/RewardCard";

const RewardPage = () => {
  const { user } = useSelector((state) => state.user);
  const { rewardList } = useSelector((state) => state.reward);
  const dispatch = useDispatch();
  const giftCard = "https://cdn-icons-png.flaticon.com/512/612/612886.png";

  useEffect(() => {
    liftInit();
    dispatch(getReward());
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

  const renderItemCardSection = () => {
    return rewardList.map((item) => (
      <RewardCard key={item.reward_id} item={item} />
    ));
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
        </div>

        <div className="flex flex-col items-center justify-center bg-purple-600 w-full h-24  p-3 rounded-xl my-2 ">
          <p className="text-center text-white text-lg">ดาวชำชำปัจจุบัน</p>
          <p className="text-center text-green-400 text-lg">&#127775; 0 ดวง</p>
        </div>

        <div className="space-y-2">
          {renderItemCardSection()}
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
