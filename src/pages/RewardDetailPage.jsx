import React, { useEffect, useState } from "react";
import productImage from "../assets/waterpurifier.webp";
import ChumChumBg from "../assets/chumchum-top-bg.jpg";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./../storage/slices/userSlice";
import { getRedeem } from "./../storage/slices/rewardSlice";
import liff from "@line/liff";
import { getRewardById } from "../storage/slices/rewardSlice";
import { Link, useNavigate, useParams } from "react-router-dom";
import OnLoadingScreen from "../components/OnLoadingScreen";
import ImageNotFound from "./../components/ImageNotFound";
import ConfirmModal from "../components/ConfirmModal";
import Swal from "sweetalert2";
import Alerts from "../services/Alerts";

const RewardDetailPage = () => {
  const { user } = useSelector((state) => state.user);
  const { reward } = useSelector((state) => state.reward);
  const imageUrl = "https://api-test.chumchumreward.com/images/";
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [showSaveModal, setShowSaveModal] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getRewardById(id))
      .unwrap()
      .then(() => {
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleRedeemReward = () => {
    const userData = {
      customer_id: user.customer_id, //มาจาก line UID
      reward_id: reward.reward_id,
      quantity: 1, // 1 อันตายตัว
      points_used: reward.require_point,
      reward_name: reward.name,
      bplus_code: user.bplus_code,
      retailer_name: user.retailer_name,
    };
    dispatch(getRedeem(userData))
      .unwrap()
      .then((res) => {
        if (res.isRedeemSuccess) {
          Alerts.redemptionComplete().then(() => {
            navigate("/reward");
          });
        } else {
          Alerts.redemptionFail();
        }
      });
  };

  //---------ConfirmModal----------------
  const handleRedeemConfirmation = () => {
    setShowSaveModal(true);
  };

  const handleConfirmRedeem = () => {
    if (user.points >= reward.require_point) {
      handleRedeemReward();
      setShowSaveModal(false);
    } else {
      Alerts.pointsNotEnough().then(() => {
        setShowSaveModal(false);
      });
    }
  };

  //-------------------------------------

  const renderRewardDetails = () => {
    return (
      <div className="p-2 w-screen">
        <div className="bg-white w-full h-92 rounded-2xl overflow-hidden shadow-lg ">
          <div className="flex justify-center items-center    h-full">
            <div className="h-84">
              {reward.reward_image === null ? (
                <ImageNotFound />
              ) : (
                <img
                  className="h-84"
                  src={imageUrl + reward.reward_image}
                ></img>
              )}
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
            className="bg-purple-600 h-12 w-56 rounded-full text-white fixed bottom-6"
            onClick={handleRedeemConfirmation}
          >
            แลกของรางวัล
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full h-full">
      <div
        className="h-screen"
        style={{
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${ChumChumBg}) `,
          backgroundPosition: "0 -10px",
        }}
      >
        {isLoading ? <OnLoadingScreen /> : renderRewardDetails()}
      </div>

      <ConfirmModal
        isOpen={showSaveModal}
        confirmMsg="ยืนยัน"
        cancelMsg="ยกเลิก"
        message={`ต้องการแลกรางวัลโดยใช้ดาวชำชำ ${reward.require_point} ดวง ใช่หรือไม่?`}
        cancelBgColor="bg-white"
        confirmBgColor="bg-purple-600"
        cancelTextColor="text-purple-600"
        confirmTextColor="text-white"
        cancelBorderColor="border border-purple-600"
        confirmBorderColor="border-purple-600"
        onConfirm={handleConfirmRedeem}
        onCancel={() => setShowSaveModal(false)}
      />
    </div>
  );
};

export default RewardDetailPage;
