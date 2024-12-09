import Swal from "sweetalert2";

class Alerts {
  redemptionComplete() {
    return Swal.fire({
      position: "center",
      icon: "success",
      text: "แลกรางวัลสำเร็จ",
      showConfirmButton: false,
      timer: 1000,
    });
  }

  redemptionFail(message="เกิดข้อผิดพลาดในแลกรางวัล") {
    return Swal.fire({
      position: "center",
      icon: "error",
      text: message  ,
      showConfirmButton: false,
      timer: 1500,
    });
  }

  pointsNotEnough() {
    return Swal.fire({
      position: "center",
      icon: "error",
      text: "ดาวของคุณไม่เพียงพอ",
      confirmButtonColor: "rgb(147 51 234)",
      showConfirmButton: true,
    });
  }

  addressRequire() {
    return Swal.fire({
      position: "center",
      icon: "info",
      text: "กรุณากรอกข้อมูลการจัดส่งและลองใหม่",
      confirmButtonColor: "rgb(147 51 234)",
      showConfirmButton: true,
    });
  }

  saveEditInfoComplete() {
    return Swal.fire({
      position: "center",
      icon: "success",
      text: "บันทึกสำเร็จ",
      showConfirmButton: false,
      timer: 1000,
    });
  }

  saveEditInfoFail() {
    return Swal.fire({
      position: "center",
      icon: "error",
      text: "เกิดข้อผิดพลาดในการบันทึกข้อมูล",
      showConfirmButton: false,
      timer: 1500,
    });
  }
}

export default new Alerts();
