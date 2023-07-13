import axios from 'axios';

export const getAllProduct = () => {
    return axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/get-all-product`);
};

export const getProductInCategory = (categoryId) => {
    return axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/get-product-in-category?=${categoryId}`);
};

export const createNewProductService = (data) => {
    return axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/create-new-product`, data, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
};

export const deleteProductService = (inputId) => {
    return axios.delete(`${process.env.REACT_APP_BACKEND_URL}/api/delete-product`, {
        data: {
            id: inputId,
        },
    });
};

export const editProductService = (data) => {
    return axios.put(`${process.env.REACT_APP_BACKEND_URL}/api/edit-product`, data, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
};
