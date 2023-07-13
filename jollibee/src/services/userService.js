import axios from 'axios';

export const login = (email, password) => {
    return axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/login`, { email, password });
};

export const getAllUsers = (inputId) => {
    return axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/get-all-users?id=${inputId}`);
};

export const createNewUserService = (data) => {
    return axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/create-new-user`, data);
};

export const deleteUserService = (inputId) => {
    return axios.delete(`${process.env.REACT_APP_BACKEND_URL}/api/delete-user`, {
        data: {
            id: inputId,
        },
    });
};

export const editUserService = (data) => {
    return axios.put(`${process.env.REACT_APP_BACKEND_URL}/api/edit-user`, data);
};


