import Swal from "sweetalert2";

export default function successLogin() {
  Swal.fire({
    icon: "success",
    title: "เข้าสู่ระบบสำเร็จ",
    showConfirmButton: false,
    timer: 3000,
  });
}
