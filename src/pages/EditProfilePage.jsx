import React, { useEffect, useState } from "react";
import ChumChumBg from "../assets/chumchum-top-bg.jpg";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import { initializeLIFF, getUser } from "../services/lineUtils";
import { getEditCustomerInfo, getUserData } from "../storage/slices/userSlice";
import OnLoadingScreen from "./../components/OnLoadingScreen";
import { useNavigate } from "react-router-dom";
import ConfirmModal from "../components/ConfirmModal";
import Swal from "sweetalert2";
import Alerts from "../services/Alerts.js";
import Validation from "../services/Validation.js";

const EditProfilePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useSelector((state) => state.user);
  const [address, setAddress] = useState("");
  const [province, setProvince] = useState("");
  const [district, setDistrict] = useState("");
  const [subDistrict, setSubDistrict] = useState("");
  const [postCode, setPostCode] = useState("");
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);

  const [addressMsg, setAddressMsg] = useState("");
  const [provinceMsg, setProvinceMsg] = useState("");
  const [districtMsg, setDistrictMsg] = useState("");
  const [subDistrictMsg, setSubDistrictMsg] = useState("");
  const [postCodeMsg, setPostCodeMsg] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setUpData();
  }, [isLoading]);

  const setUpData = async () => {
    await initializeLIFF();
    await getUserinfo();
  };

  const getUserinfo = async () => {
    const userData = await getUser();
    const data = { customer_id: userData.userId };
    dispatch(getUserData(data))
      .unwrap()
      .then(() => {
        setAddress(user.address === null ? "" : user.address);
        setProvince(user.province === null ? "" : user.province);
        setDistrict(user.district === null ? "" : user.district);
        setSubDistrict(user.sub_district === null ? "" : user.sub_district);
        setPostCode(user.post_code === null ? "" : user.post_code);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = () => {
    const userData = {
      customer_id: user.customer_id,
      address: address,
      province: province,
      district: district,
      sub_district: subDistrict,
      post_code: postCode,
    };

    if (
      Validation.getValidatePostCode(postCode) &&
      address &&
      province &&
      district &&
      subDistrict
    ) {
      dispatch(getEditCustomerInfo(userData))
        .unwrap()
        .then((res) => {
          if (res.isFinish) {
            Alerts.saveEditInfoComplete().then(() => {
              navigate("/client/reward");
            });
          } else {
            Alerts.saveEditInfoFail();
          }
        });
    } else {
      setShowSaveModal(false);
      setAddressMsg(address ? "" : "กรุณากรอกข้อมูลที่อยู่");
      setProvinceMsg(province ? "" : "กรุณากรอกข้อมูลจังหวัด");
      setDistrictMsg(district ? "" : "กรุณากรอกข้อมูลเขต/อำเภอ");
      setSubDistrictMsg(subDistrict ? "" : "กรุณากรอกข้อมูลเขต/ตำบล");
      setPostCodeMsg(
        Validation.getValidatePostCode(postCode)
          ? ""
          : "กรุณากรอกรหัสไปรษณีย์ให้ครบถ้วน และต้องมี 5 หลัก"
      );
    }
  };

  const handleAddress = (e) => {
    const value = e.target.value;
    setAddress(value);
    if (value !== "") {
      setAddressMsg("");
    } else {
      setAddressMsg("กรุณากรอกข้อมูลที่อยู่");
    }
  };

  const handleProvince = (e) => {
    const value = e.target.value;
    setProvince(value);
    if (value !== "") {
      setProvinceMsg("");
    } else {
      setProvinceMsg("กรุณากรอกข้อมูลจังหวัด");
    }
  };

  const handleDistrict = (e) => {
    const value = e.target.value;
    setDistrict(value);
    if (value !== "") {
      setDistrictMsg("");
    } else {
      setDistrictMsg("กรุณากรอกข้อมูลเขต/อำเภอ");
    }
  };

  const handleSubDistrict = (e) => {
    const value = e.target.value;
    setSubDistrict(value);
    if (value !== "") {
      setSubDistrictMsg("");
    } else {
      setSubDistrictMsg("กรุณากรอกข้อมูลเขต/ตำบล");
    }
  };

  const handlePostCode = (e) => {
    const value = e.target.value;
    setPostCode(value);
    if (Validation.getValidatePostCode(value)) {
      setPostCodeMsg("");
    } else {
      setPostCodeMsg("กรุณากรอกรหัสไปรษณีย์ให้ครบถ้วน และต้องมี 5 หลัก");
    }
  };

  //---------ConfirmModal----------------
  const handleSaveConfirmation = () => {
    setShowSaveModal(true);
  };

  const handleCancelConfirmation = (e) => {
    e.preventDefault();
    setShowCancelModal(true);
  };

  const handleConfirmSave = () => {
    handleSubmit();
    setShowSaveModal(false);
  };

  const handleConfirmCancel = () => {
    setShowCancelModal(false);
    navigate("/client/reward");
  };
  //-------------------------------------

  const renderEditForm = () => {
    return (
      <form className="space-y-4 relative">
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
            value={address}
          />
          {addressMsg && <p className="text-red-400">{addressMsg}</p>}
        </div>
        <div id="province">
          <p>จังหวัด : </p>
          <input
            type="text"
            className="h-12 w-full  p-1 px-2 outline-none  border border-gray-300 rounded-lg"
            onChange={handleProvince}
            value={province}
          />
          {provinceMsg && <p className="text-red-400">{provinceMsg}</p>}
        </div>
        <div id="district" className="">
          <p>เขต/อำเภอ : </p>
          <input
            type="text"
            className="h-12 w-full  p-1 px-2 outline-none   border border-gray-300 rounded-lg"
            onChange={handleDistrict}
            value={district}
          />
          {districtMsg && <p className="text-red-400">{districtMsg}</p>}
        </div>
        <div id="sub-district" className="">
          <p>แขวง/ตำบล : </p>
          <input
            type="text"
            className="h-12 w-full  p-1 px-2 outline-none   border border-gray-300 rounded-lg"
            onChange={handleSubDistrict}
            value={subDistrict}
          />

          {subDistrictMsg && <p className="text-red-400">{subDistrictMsg}</p>}
        </div>
        <div id="postCode-code" className="">
          <p>รหัสไปรษณีย์ : </p>
          <input
            type="number"
            maxLength={5}
            className="h-12 w-full p-1 px-2 outline-none  border border-gray-300 rounded-lg"
            onChange={handlePostCode}
            value={postCode}
          />
          {postCodeMsg && <p className="text-red-400">{postCodeMsg}</p>}
        </div>
        <div className="flex justify-center gap-3">
          <button
            onClick={handleCancelConfirmation}
            className="text-purple-600 border border-purple-600 p-2 px-8 rounded-full"
          >
            ยกเลิก
          </button>
          <button
            className="bg-purple-600 p-2  px-8 rounded-full text-white"
            type="button"
            onClick={handleSaveConfirmation}
          >
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

      {/* Render confirmation modals */}
      <ConfirmModal
        isOpen={showSaveModal}
        confirmMsg="บันทึก"
        cancelMsg="ยกเลิก"
        message="ต้องการบันทึกใช่หรือไม่?"
        cancelBgColor="bg-white"
        confirmBgColor="bg-purple-600"
        cancelTextColor="text-purple-600"
        confirmTextColor="text-white"
        cancelBorderColor="border border-purple-600"
        confirmBorderColor="border-purple-600"
        onConfirm={handleConfirmSave}
        onCancel={() => setShowSaveModal(false)}
      />
      <ConfirmModal
        isOpen={showCancelModal}
        confirmMsg="ยกเลิกการแก้ไข"
        cancelMsg="แก้ไขต่อ"
        message="ต้องการยกเลิกใช่หรือไม่?"
        cancelBgColor="bg-white"
        confirmBgColor="bg-purple-600"
        cancelTextColor="text-purple-600"
        confirmTextColor="text-white"
        cancelBorderColor="border border-purple-600"
        confirmBorderColor="border-purple-600"
        onConfirm={handleConfirmCancel}
        onCancel={() => setShowCancelModal(false)}
      />
    </div>
  );
};

export default EditProfilePage;
