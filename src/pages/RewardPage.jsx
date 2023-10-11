import liff from "@line/liff";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../storage/slices/userSlice";
import { Link } from "react-router-dom";

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
      <div className="flex bg-white w-full h-40 p-2 rounded-lg shadow-md">
        <div className="w-1/2 flex">
          <div className="w-28">
            <img src={giftCard} className="w-28" />
          </div>
        </div>
        <div className="w-1/2">
          <div className="pl-2 pt-4">
            <p>บัตรเซ็นทรัล 500 บาท</p>
            <p>2000 คะแนน</p>
            <div className="flex justify-end">
              <div className="bg-gray-200 p-1 px-2 rounded-lg">
                <Link to="/reward/details">แลกของรางวัล</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderReward = () => {
    return (
      <div className="bg-purple-200 h-screen p-2">
        <div
          id="Profile"
          className="flex justify-between bg-white w-full h-40 p-10 rounded-lg "
        >
          <div className="">
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
          </div>
        </div>
        <hr  className="my-2    invisible  "/>

        <div className="space-y-2">
          {renderItemCard()}
          {renderItemCard()}
          {renderItemCard()}
        </div>
      </div>
    );
  };

  return <div className="w-full h-full">{renderReward()}</div>;
};

export default RewardPage;
