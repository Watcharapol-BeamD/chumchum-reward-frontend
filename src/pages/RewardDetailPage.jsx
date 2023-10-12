import React, { useEffect } from "react";
import productImage from "../assets/waterpurifier.webp";
import chumchumBg from "../assets/chumchum-top-bg.jpg";
import { useDispatch, useSelector } from "react-redux";
import { getRedeem, setUser } from "./../storage/slices/userSlice";
import liff from "@line/liff";

const RewardDetailPage = () => {
  const { user } = useSelector((state) => state.user);
  const giftCard = "https://cdn-icons-png.flaticon.com/512/612/612886.png";
  const dispatch = useDispatch();

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

  function getFormattedTimestamp() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
  
    const formattedTimestamp = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    return formattedTimestamp;
  }
  
  const timestamp = getFormattedTimestamp();
  console.log(timestamp);
  


  const handleRedeemReward = () => {
    console.log(user)
    const userData = {
      user_id: user.userId,
      reward_name: "xiaomi air purify",
      quantity: 1,
      timestamp: timestamp,
    };
    dispatch(getRedeem(userData));
  };

  const renderRewardDetails = () => {
    return (
      <div className="p-2   w-screen">
        <div className="bg-white w-full h-92 rounded-2xl overflow-hidden shadow-lg ">
          <div className="flex justify-center items-center    h-full">
            <div className="h-84">
              <img className="h-84" src={productImage}></img>
            </div>
          </div>
        </div>
        <div id="details" className="mt-1 space-y-1">
          <p className="p-2 text-xl text-purple-600 font-bold text-center">
            ESUN Mi Water Purifier 600G - เครื่องกรองน้ำอัจฉริยะ 600G
            (รุ่นตั้งพื้น)
          </p>
          <p className="p-1 px-4 ">
            บัตรกำนัลใช้ชำระค่าสินค้าที่
            ดีพาร์ทเม้นท์สโตร์และซูเปอร์มาร์เก็ตในเครือเดอะมอลล์ กรุ๊ป ทุกสาขา
            ยกเว้น บัตรกำนัล, บัตรของขวัญ, บัตรเติมเงินทุกประเภทและร้านค้าเช่า
            บัตรนี้สามารถใช้คู่กับบัตรสมาชิกของห้างฯ ที่ได้รับส่วนลดสูงสุด 10%
            เมื่อซื้อสินค้าราคาปกติ ที่ดีพาร์ทเม้นท์โตร์ และส่วนลด 5%
            สำหรับสินค้าราคาปกติที่ซูเปอร์มาร์เก็ต
            บัตรกำนัลไม่สามารถแลกเปลี่ยนหรือทอนเป็นเงินสดได้
            กรณีบัตรหายหรือชำรุด ห้างฯ จะไม่รับผิดชอบ
            หรือชดเชยความเสียหายดังกล่าว ห้างฯ หรือการเปลี่ยนแปลงเงื่อนไข
            โดยไม่แจ้งให้ทราบล่วงหน้า สอบถามรายละเอียดเพิ่มเติม
            สามารถติดต่อได้ที่แผนกลูกค้าสัมพันธ์ในเครือเดอะมอลล์ กรุ๊ป ทุกสาขา
          </p>
          <p className="p-1 px-4 ">
            บัตรกำนัลใช้ชำระค่าสินค้าที่
            ดีพาร์ทเม้นท์สโตร์และซูเปอร์มาร์เก็ตในเครือเดอะมอลล์ กรุ๊ป ทุกสาขา
            ยกเว้น บัตรกำนัล, บัตรของขวัญ, บัตรเติมเงินทุกประเภทและร้านค้าเช่า
            บัตรนี้สามารถใช้คู่กับบัตรสมาชิกของห้างฯ ที่ได้รับส่วนลดสูงสุด 10%
            เมื่อซื้อสินค้าราคาปกติ ที่ดีพาร์ทเม้นท์โตร์ และส่วนลด 5%
            สำหรับสินค้าราคาปกติที่ซูเปอร์มาร์เก็ต
            บัตรกำนัลไม่สามารถแลกเปลี่ยนหรือทอนเป็นเงินสดได้
            กรณีบัตรหายหรือชำรุด ห้างฯ จะไม่รับผิดชอบ
            หรือชดเชยความเสียหายดังกล่าว ห้างฯ หรือการเปลี่ยนแปลงเงื่อนไข
            โดยไม่แจ้งให้ทราบล่วงหน้า สอบถามรายละเอียดเพิ่มเติม
            สามารถติดต่อได้ที่แผนกลูกค้าสัมพันธ์ในเครือเดอะมอลล์ กรุ๊ป ทุกสาขา
          </p>
        </div>
        <div className="flex justify-center py-10   relative   ">
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
        className="bg-fixed h-60 "
        style={{
          backgroundImage: `url(${chumchumBg}) `,
        }}
      >
        {renderRewardDetails()}
      </div>
    </div>
  );
};

export default RewardDetailPage;
