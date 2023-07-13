import axios from "axios";

export const getAllOrder = () => {
    return axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/get-all-order`);
};