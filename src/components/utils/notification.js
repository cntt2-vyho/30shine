import { notification } from 'antd';
import 'antd/dist/antd.css';
import  qs  from 'query-string';

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
export const  back = (location, history) => {

    const newQueryParam = {
        // ...queryParam,
        phone: qs.parse(location.search).phone,
        salonId: qs.parse(location.search).salonId,
        step: parseInt(qs.parse(location.search).step) - parseInt(1)
    };
    history.push({ pathname: '/booking', search: qs.stringify(newQueryParam) });

}