import { notification } from 'antd';
import 'antd/dist/antd.css';

export const notificationComponent = (type, message) => {
    notification[type]({
        message: `Thông báo`,
        description: message,
    });
};

export const getDataAsync = async (string) => {
    let response = await fetch(string);
    let data = await response.json();
    return data;
}