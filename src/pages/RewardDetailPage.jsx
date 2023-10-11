import React from "react";

const RewardDetailPage = () => {
  const giftCard = "https://cdn-icons-png.flaticon.com/512/612/612886.png";

  const renderRewardDetails = () => {
    return (
      <div className="p-2">
        <div className="bg-white w-full h-52 rounded-xl px-2 ">
          <p className="text-center text-lg pt-2">
            บัตรเซ็นทรัล 500 บาท ใช้ 2000 คะแนน
          </p>
          <div className="flex justify-around">
            <div className="w-40">
              <img src={giftCard} />
            </div>
            <div className="flex  mt-24 ">
              <button className="bg-gray-200 h-10 px-1 rounded-lg">
                แลกของรางวัล
              </button>
            </div>
          </div>
        </div>
        <div id="details" className="mt-1 space-y-1">
          <div className=" ">
            <p className="px-2  font-bold text-base">เงื่อนไขการใช้งาน</p>
            <p className="p-1 px-4">
              บัตรกำนัลใช้ชำระค่าสินค้าที่
              ดีพาร์ทเม้นท์สโตร์และซูเปอร์มาร์เก็ตในเครือเดอะมอลล์ กรุ๊ป ทุกสาขา
              ยกเว้น บัตรกำนัล, บัตรของขวัญ, บัตรเติมเงินทุกประเภทและร้านค้าเช่า
              บัตรนี้สามารถใช้คู่กับบัตรสมาชิกของห้างฯ ที่ได้รับส่วนลดสูงสุด 10%
              เมื่อซื้อสินค้าราคาปกติ ที่ดีพาร์ทเม้นท์โตร์ และส่วนลด 5%
              สำหรับสินค้าราคาปกติที่ซูเปอร์มาร์เก็ต
              บัตรกำนัลไม่สามารถแลกเปลี่ยนหรือทอนเป็นเงินสดได้
              กรณีบัตรหายหรือชำรุด ห้างฯ จะไม่รับผิดชอบ
              หรือชดเชยความเสียหายดังกล่าว ห้างฯ
              ขอสงวนสิทธิ์การรับคืนบัตรกำนัลที่ซื้อแล้ว การยกเลิกบัตร
              หรือการเปลี่ยนแปลงเงื่อนไข โดยไม่แจ้งให้ทราบล่วงหน้า
              สอบถามรายละเอียดเพิ่มเติม
              สามารถติดต่อได้ที่แผนกลูกค้าสัมพันธ์ในเครือเดอะมอลล์ กรุ๊ป ทุกสาขา
            </p>
          </div>
          <div className=" ">
            <p className="px-2 font-bold text-base">โปรโมชั่นพิเศษ</p>
            <p className="p-1 px-4">
              รับเพิ่ม 3% เมื่อซื้อบัตรกำนัล ตั้งแต่ 200,000 บาทขึ้นไป/ใบเสร็จ
              ได้รับบัตรกำนัลแบบมีเงื่อนไขทั้งจำนวน (ส่วนซื้อและส่วนแถม)
              <p className=" text-base text-red-600">
                หมายเหตุ: เฉพาะชำระด้วยเงินสดเท่านั้น
              </p>
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-purple-200 w-full min-h-screen">
      {renderRewardDetails()}{" "}
    </div>
  );
};

export default RewardDetailPage;
