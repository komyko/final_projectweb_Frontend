import Swal from "sweetalert2";

export default function errorAuth() {
  Swal.fire({
    icon: "error",
    title: "กรุณากรอกข้อมูล",
    showConfirmButton: false,
    timer: 3000,
  });
}
