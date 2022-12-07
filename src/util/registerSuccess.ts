import Swal from 'sweetalert2'

export default function success() {
    Swal.fire({
        icon: 'success',
        title: 'สมัครสมาชิกสำเร็จ',
        showConfirmButton: false,
        timer: 1500
    })
}