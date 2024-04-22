import axios from "axios";

const base_url = "http://localhost:3000";
// const base_url = "https://api-dev.tomonisolution.com";

const axiosInstance = axios.create({
  baseURL: base_url,
});

const getProduct = (params) => {
  return axiosInstance.get(`${base_url}/api/products`, { params });
};

const getProductDetail = (id) => {
  return axiosInstance.get(`${base_url}/api/products/${id}`);
};

const login = (params) => {
  return axiosInstance.post(`${base_url}/api/login`, params);
};

const register = (params) => {
  return axiosInstance.post(`${base_url}/api/users`, params);
};

const changePassword = (id, params) => {
  return axiosInstance.post(`${base_url}/api/change-password/${id}`, params);
};

const createProduct = (params) => {
  return axiosInstance.post(`${base_url}/api/products`, params);
};

const updateProduct = (id, params) => {
  return axiosInstance.put(`${base_url}/api/products/${id}`, params);
};

const deleteProduct = (id) => {
  return axiosInstance.delete(`${base_url}/api/products/${id}`);
};

const getAllUser = () => {
  return axiosInstance.get(`${base_url}/api/users`);
};

const updateRoleUser = (adminId, customerId) => {
  return axiosInstance.put(`${base_url}/api/update-rule/${adminId}/${customerId}`);
};
const deleteUser = (customerId) => {
  return axiosInstance.delete(`${base_url}/api/users/${customerId}`);
};

export {
  getAllUser,
  updateRoleUser,
  deleteProduct,
  updateProduct,
  createProduct,
  getProduct,
  getProductDetail,
  login,
  register,
  changePassword,
  deleteUser,
};
