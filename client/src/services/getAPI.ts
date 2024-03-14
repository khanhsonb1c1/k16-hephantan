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



export { getProduct, getProductDetail };
