import axios from "axios";

export const BaseUrl = 'https://sanber-pos-backend.sanbercloud.com/api'

const AxiosInstance = axios.create({
    baseURL: BaseUrl,
    timeout: 1000,
    headers: { 'Content-Type': 'application/json' }
});

// Add a request interceptor
AxiosInstance.interceptors.request.use(function (config) {
    // Do something before request is sent
    console.log('tes')
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});
