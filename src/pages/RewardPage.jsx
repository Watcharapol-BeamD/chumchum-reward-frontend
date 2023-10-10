import React from "react";

const RewardPage = () => {
  const giftCard = "https://cdn-icons-png.flaticon.com/512/612/612886.png";

  const renderReward = () => {
    return (
      <div className="bg-purple-200 h-screen p-2">
        <div className="bg-white w-full h-40 p-10 rounded-lg"> </div>
        <p className="text-center">สวัสดีตอนเย็น</p>
        <div className="space-y-2">
          <div className="flex bg-white w-full h-40 p-2 rounded-lg shadow-md">
            <div className="w-28">
              <img src={giftCard} className="w-28" />
            </div>
            <div className="pl-2">
              <p>บัตรเซ็นทรัล 500 บาท</p>
              <p>2000 คะแนน</p>
              <div className="flex justify-end">
                <div className="bg-gray-200 p-1 px-2 rounded-lg">
                  <p>แลกของรางวัล</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex bg-white w-full h-40 p-2 rounded-lg shadow-md">
            <div className="w-28">
              <img src={giftCard} className="w-28" />
            </div>
            <div className="pl-2">
              <p>บัตรเซ็นทรัล 500 บาท</p>
              <p>2000 คะแนน</p>
              <div className="flex justify-end">
                <div className="bg-gray-200 p-1 px-2 rounded-lg">
                  <p>แลกของรางวัล</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex bg-white w-full h-40 p-2 rounded-lg shadow-md">
            <div className="w-28">
              <img src={giftCard} className="w-28" />
            </div>
            <div className="pl-2">
              <p>บัตรเซ็นทรัล 500 บาท</p>
              <p>2000 คะแนน</p>
              <div className="flex justify-end">
                <div className="bg-gray-200 p-1 px-2 rounded-lg">
                  <p>แลกของรางวัล</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return <div className="w-full h-full">{renderReward()}</div>;
};

export default RewardPage;
