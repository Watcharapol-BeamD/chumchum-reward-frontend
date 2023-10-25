import React, { useEffect } from "react";
import productImage from "../assets/waterpurifier.webp";
import chumchumBg from "../assets/chumchum-top-bg.jpg";
import { useDispatch, useSelector } from "react-redux";
import { getRedeem, setUser } from "./../storage/slices/userSlice";
import liff from "@line/liff";
import { getReward } from "../storage/slices/rewardSlice";

const RewardDetailPage = () => {
  const { user } = useSelector((state) => state.user);
  const { rewards } = useSelector((state) => state.reward);
  const giftCard = "https://cdn-icons-png.flaticon.com/512/612/612886.png";
  const dispatch = useDispatch();

  function getFormattedTimestamp() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const day = String(now.getDate()).padStart(2, "0");
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    const formattedTimestamp = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    return formattedTimestamp;
  }

  const timestamp = getFormattedTimestamp();
 
useEffect(()=>{
  dispatch(getReward())
},[])


  const handleRedeemReward = () => {
    const userData = {
      customer_id: user.userId, //มาจาก line UID
      reward_id: 1, //แก้ที่หลัง เอาข้อมูลมาจากหลังบ้านที่เอามาแสดง
      quantity: 1, // 1 อันตายตัว
      points_used:20,//แก้ที่หลัง เอาข้อมูลมาจากหลังบ้านที่เอามาแสดง
      reward_name: "xiaomi air purify",////แก้ที่หลัง เอาข้อมูลมาจากหลังบ้านที่เอามาแสดง
    };
    dispatch(getRedeem(userData));
  };

  const renderRewardDetails = () => {
    return (
      <div className="p-2  w-screen">
        {console.log(rewards)}
        <div className="bg-white w-full h-92 rounded-2xl overflow-hidden shadow-lg ">
          <div className="flex justify-center items-center    h-full">
            <div className="h-84">
              <img className="h-84" src={productImage}></img>
            </div>
          </div>
        </div>
        <div id="details" className="mt-1 space-y-1 px-2">
          <p className=" py-2 text-xl text-purple-600 font-bold text-center">
            ESUN Mi Water Purifier 600G - เครื่องกรองน้ำอัจฉริยะ 600G
            (รุ่นตั้งพื้น)
          </p>
          <p className="font-bold">&#127775; 10 ดวง</p>
          <p className="p-1   ">
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
          <p className="p-1   ">
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
