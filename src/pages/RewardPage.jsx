import liff from "@line/liff";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserData, setUser } from "../storage/slices/userSlice";
import ChumChumBg from "../assets/chumchum-top-bg.jpg";
import product1 from "../assets/m150.jpg";
import { getReward } from "../storage/slices/rewardSlice";
import RewardCard from "../components/RewardCard";
import { initializeLIFF, getUser } from "../services/lineUtils";
import OnLoadingScreen from "./../components/OnLoadingScreen";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
import Greeting from "../components/Greeting";

const RewardPage = () => {
  const { user } = useSelector((state) => state.user);
  const { rewardList } = useSelector((state) => state.reward);

  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(true);
  const greeting = Greeting();

  // create copy of rewardList because it read only , can't sort.
  const rewardListSortByPoint =
    rewardList.length !== 0
      ? [...rewardList].sort((a, b) => a.require_point - b.require_point)
      : [];

  useEffect(() => {
    console.log(liff.getOS());
    setUpData();
  }, []);

  const setUpData = async () => {
    await initializeLIFF();
    await getUserinfo();
    await dispatch(getReward(user.group_id));
  };

  const getUserinfo = async () => {
    const userData = await getUser();
    const data = { customer_id: userData.userId };
    dispatch(getUserData(data))
      .unwrap()
      .then(() => {
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const renderItemCardSection = () => {
    return rewardListSortByPoint.map((item) => (
      <RewardCard key={item.reward_id} item={item} />
    ));
  };

  const renderReward = () => {
    return (
      <div className="h-full p-2">
        {/* {console.log(user)} */}
        <div
          id="Profile"
          className="relative bg-white w-full h-40 p-2 rounded-xl "
        >
          <p className="text-center  ">{greeting}</p>
          <Link to="/client/edit_profile" className="absolute right-4 top-1">
            <EditIcon />
          </Link>

          <div className="pt-3">
            <p>รหัสร้านค้า : {user.bplus_code}</p>
            {/* <p>ที่อยู่ : xxxxxxxx</p> */}
            <p>ชื่อร้านค้า : {user.retailer_name}</p>
            <p>เบอร์โทร : {user.phone_number}</p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center bg-purple-600 w-full h-24  p-3 rounded-xl my-2 ">
          <p className="text-center text-white text-lg">ดาวชำชำปัจจุบัน</p>

          <p className="text-center text-green-400 text-lg">
            &#127775; {user.points === null ? 0 : user.points} ดวง
          </p>
        </div>

        <div className="space-y-2 pb-4">{renderItemCardSection()}</div>
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
        {isLoading ? <OnLoadingScreen /> : renderReward()}
      </div>
    </div>
  );
};

export default RewardPage;
