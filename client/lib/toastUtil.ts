import toast, { ToastOptions } from "react-hot-toast";

// Default toast styles
const defaultSuccessToastOptions: ToastOptions = {
    position: "top-center",
    duration: 3000,
    iconTheme: {
        primary: "#2ed889",
        secondary: "black",
    },
    // removeDelay is not a built-in prop, but you can handle close manually if needed
};

// Default toast styles
const defaultErrorToastOptions: ToastOptions = {
    // removeDelay: 1000,
    position: 'top-center',
    duration: 3000,
    iconTheme: {
        primary: '#bb0404ff',
        secondary: '#fff',
    },
    // removeDelay is not a built-in prop, but you can handle close manually if needed
};

// Success toast
export const showSuccess = (message: string, options?: ToastOptions) => {
    toast.success(message, {
        ...defaultSuccessToastOptions, style: {
            background: "#00bd74ff",
            color: "white",
        }, ...options
    });
};

// Error toast
export const showError = (message: string, options?: ToastOptions) => {
    toast.error(message, {
        ...defaultErrorToastOptions, style: {
            background: "#d32f2f",
            color: "white",
        }, ...options
    });
};

// // Info toast
// export const showInfo = (message: string, options?: ToastOptions) => {
//     toast(message, { ...defaultToastOptions, ...options });
// };
