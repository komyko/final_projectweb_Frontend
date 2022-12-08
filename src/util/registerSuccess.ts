import Swal from "sweetalert2";

export default function success(text: string) {
  Swal.fire({
    icon: "success",
    title: text,
    showConfirmButton: false,
    timer: 1500,
  });
}