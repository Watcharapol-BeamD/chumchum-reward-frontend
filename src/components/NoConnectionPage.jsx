import React from "react";
import WifiOffIcon from "@mui/icons-material/WifiOff";

function NoConnectionPage() {
  return (
    <div className="flex-1 flex justify-center items-center ">
      <div className="text-center sha ">
        <p>
          <WifiOffIcon className="text-red-500" /> กรุณาเชื่อมต่ออินเทอร์เน็ต
        </p>
        <p>โปรดตรวจสอบการเชื่อมต่อ</p>
      </div>
    </div>
  );
}

export default NoConnectionPage;
