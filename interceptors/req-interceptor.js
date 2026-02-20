import axios from "axios";

const axiosInstance = axios.create();
const baseurl = 'https://bulkbuy-rumt.onrender.com/';

axiosInstance.interceptors.request.use(function (config) {
    config.url = `${baseurl}${config.url}`;
    return config;
}, function (error) {
    return Promise.reject(error);
});


export default axiosInstance;