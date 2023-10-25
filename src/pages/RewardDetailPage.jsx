import React, { useEffect } from "react";
import productImage from "../assets/waterpurifier.webp";
import chumchumBg from "../assets/chumchum-top-bg.jpg";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./../storage/slices/userSlice";
import { getRedeem } from "./../storage/slices/rewardSlice";
import liff from "@line/liff";
import { getRewardById } from "../storage/slices/rewardSlice";
import { Link, useParams } from "react-router-dom";
const imageUrl = "https://api-test.chumchumreward.com/images/";

const RewardDetailPage = () => {
  const { user } = useSelector((state) => state.user);
  const { reward } = useSelector((state) => state.reward);
  const giftCard = "https://cdn-icons-png.flaticon.com/512/612/612886.png";
  const dispatch = useDispatch();
  const { id } = useParams();
  // function getFormattedTimestamp() {
  //   const now = new Date();
  //   const year = now.getFullYear();
  //   const month = String(now.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  //   const day = String(now.getDate()).padStart(2, "0");
  //   const hours = String(now.getHours()).padStart(2, "0");
  //   const minutes = String(now.getMinutes()).padStart(2, "0");
  //   const seconds = String(now.getSeconds()).padStart(2, "0");
  //   const formattedTimestamp = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  //   return formattedTimestamp;
  // }

  // const timestamp = getFormattedTimestamp();

  useEffect(() => {
    dispatch(getRewardById(id));
  }, []);

  const handleRedeemReward = () => {
    const userData = {
      customer_id: user.userId, //มาจาก line UID
      reward_id: reward.reward_id,
      quantity: 1, // 1 อันตายตัว
      points_used: reward.require_point,
      reward_name: reward.name,
    };
    dispatch(getRedeem(userData));
  };

  const renderRewardDetails = () => {
    return (
      <div className="p-2 w-screen">
        <div className="bg-white w-full h-92 rounded-2xl overflow-hidden shadow-lg ">
          <div className="flex justify-center items-center    h-full">
            <div className="h-84">
              <img className="h-84" src={imageUrl + reward.reward_image}></img>
            </div>
          </div>
        </div>
        <div id="details" className="mt-1 space-y-1 px-2">
          <p className=" py-2 text-xl text-purple-600 font-bold text-center"></p>
          <p className="font-bold">&#127775; {reward.require_point} ดวง</p>
          <p className="p-1 ">{reward.description}</p>
        </div>
        <div className="flex justify-center py-10 relative">
          <button
            className="bg-purple-600 h-12 w-56 rounded-lg text-white fixed bottom-6"
            onClick={handleRedeemReward}
          >
            แลกของรางวัล
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="  w-full min-h-screen">
      <div
        className=" h-screen "
        style={{
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${chumchumBg}) `,
          backgroundPosition: "0 -10px",
        }}
      >
        {renderRewardDetails()}
      </div>
    </div>
  );
};

export default RewardDetailPage;
