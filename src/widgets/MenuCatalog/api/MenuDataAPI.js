import axios from "axios";

const API_URL = 'https://food-delivery.kreosoft.ru/api/dish'
export function getMenuData(pageNum){
    return axios.get(API_URL).then((response) => {
            console.log(response);
            return {status: response.status, data: response.data};
        })
        .catch((error) => {
            console.log(error);
            return {status: error.response.status};
        });
}

export const MenuDataAPI = {
    getMenuData: getMenuData
}