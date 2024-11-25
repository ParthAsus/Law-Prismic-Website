import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const showToast = () => {
  toast.success("Form submitted successfully!", {
    position: 'bottom-center',
    autoClose: 5000,
    hideProgressBar: false,
  });
};

const showErrorToast = () => {
  toast.error("Something went wrong. Please try again.", {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
  });
};