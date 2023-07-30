import { toast } from 'react-toastify';

export const showNotification = (type, message, title, duration) => {
    toast[type](message, { position: 'top-right', autoClose: duration, closeOnClick: true });
};