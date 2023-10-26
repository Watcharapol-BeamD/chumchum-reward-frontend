import React, { useState } from "react";
import ChumChumBg from "../assets/chumchum-top-bg.jpg";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";

const EditProfilePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useSelector((state) => state.user);
  const [address, setAddress] = useState("");
  const [province, setProvince] = useState("");
  const [district, setDistrict] = useState("");
  const [subDistrict, setSubDistrict] = useState("");
  const [post, setPost] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleAddress = (e) => {};

  const handleProvince = (e) => {};

  const handleDistrict = (e) => {};

  const handleSubDistrict = (e) => {};

  const handlePostCode = (e) => {};

  const renderEditForm = () => {
    return (
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div id="phone-number" className=" ">
          {/* แก้เบอร์ไม่ได้ แสดงอย่างเดียว */}
          <p>เบอร์โทร : </p>
          <input
            readOnly
            type="tel"
            className="h-12 w-full  p-1 px-2 outline-none bg-gray-300 cursor-default  rounded-lg"
            value={user.phone_number}
          />
        </div>
        <div id="address" className="">
          <p>ที่อยู่ : </p>
          <textarea
            className="h-40 w-full  p-1 px-2 outline-none    border border-gray-300 rounded-lg"
            onChange={handleAddress}
          />
        </div>
        <div id="province">
          <p>จังหวัด : </p>
          <input
            type="text"
            className="h-12 w-full  p-1 px-2 outline-none  border border-gray-300 rounded-lg"
            onChange={handleProvince}
          />
        </div>
        <div id="district" className="">
          <p>เขต/อำเภอ : </p>
          <input
            type="text"
            className="h-12 w-full  p-1 px-2 outline-none   border border-gray-300 rounded-lg"
            onChange={handleDistrict}
          />
        </div>
        <div id="sub-district" className="">
          <p>แขวง/ตำบล : </p>
          <input
            type="text"
            className="h-12 w-full  p-1 px-2 outline-none   border border-gray-300 rounded-lg"
            onChange={handleSubDistrict}
          />
        </div>
        <div id="post-code" className="">
          <p>รหัสไปรษณีย์ : </p>
          <input
            type="number"
            className="h-12 w-full p-1 px-2 outline-none  border border-gray-300 rounded-lg"
            onChange={handlePostCode}
          />
        </div>
        <div className="flex justify-center gap-3">
          <button className="text-red-400 border border-red-400 p-2 px-8 rounded-full" type="submit">
            ยกเลิก
          </button>
          <button className="bg-green-400 p-2  px-8 rounded-full" type="submit">
            บันทึก
          </button>
        </div>
      </form>
    );
  };

  const renderProfile = () => {
    return (
      <div className="p-2   ">
        <p className="text-center text-xl  bg-purple-200 rounded-full p-1 my-2 ">
          แก้ไขข้อมูล
        </p>
        {/* <div className="flex justify-end  gap-2 m-2">
          <Button variant="contained" color="error">
            ยกเลิก
          </Button>
          <Button variant="contained" color="primary">
            บันทึก
          </Button>
        </div> */}

        {renderEditForm()}
      </div>
    );
  };

  return (
    <div className="h-full w-full">
      <div
        className=" h-screen "
        style={{
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${ChumChumBg}) `,
          backgroundPosition: "0 -10px",
        }}
      >
        {isLoading ? <OnLoadingScreen /> : renderProfile()}
      </div>
    </div>
  );
};

export default EditProfilePage;
