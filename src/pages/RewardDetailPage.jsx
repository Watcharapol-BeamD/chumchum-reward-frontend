import React from "react";
import productImage from "../assets/waterpurifier.webp";
import chumchumBg from "../assets/chumchum-top-bg.jpg";

const RewardDetailPage = () => {
  const giftCard = "https://cdn-icons-png.flaticon.com/512/612/612886.png";

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
          </p>{" "}
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
          <button className="bg-purple-600 h-12 w-56 rounded-lg text-white fixed bottom-6">
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
