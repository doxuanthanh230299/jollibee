import axios from 'axios';

export const getAllCategory = () => {
    return axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/get-all-category`);
};
