import React from "react";
import { Link } from "react-router-dom";
import ImageNotFound from "./ImageNotFound";

const RewardCard = ({ item }) => {
  const imageUrl = "https://api-test.chumchumreward.com/images/";

  return (
    <div className="flex w-full h-36 p-2 rounded-xl shadow-md">
      <div className="w-1/3 flex justify-center ">
        <div className="w-32 h-32  ">
          {item.reward_image === null ? (
            <ImageNotFound />
          ) : (
            <img
              src={imageUrl + item.reward_image}
              className="w-32 h-32 "
              alt={item.reward_image}
            />
          )}
        </div>
      </div>
      <div className="w-2/3 flex flex-col justify-between pl-3">
        <div className="line-clamp-2">
          <p>{item.name}</p>
        </div>
        <div className=" flex   justify-center items-center  space-x-2  ">
          <div className="w-2/5">
            <p className="text-yellow-500">{item.require_point} ดวง</p>
          </div>
          <div className="w-3/5   flex justify-center">
            <button className="bg-gray-200 py-1 px-2 rounded-full ">
              <Link to={`/reward/details/${item.reward_id}`}>แลกของรางวัล</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RewardCard;
