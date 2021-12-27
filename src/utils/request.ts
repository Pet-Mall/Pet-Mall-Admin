import axios from "axios";
import { ElMessage } from "element-plus";
import { getToken } from '@/utils/auth'

const service = axios.create({
  // process.env.NODE_ENV === 'development' 来判断是否开发环境
  // easy-mock服务挂了，暂时不使用了
  // baseURL: 'https://www.easy-mock.com/mock/592501a391470c0ac1fab128',
  baseURL: "/",
  timeout: 4000
});

service.interceptors.request.use(
  (config) => {
    if (getToken()) {
      config.headers['Authorization'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    config.headers['Content-Type'] = 'application/json'
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject();
  }
);

service.interceptors.response.use(
  (response) => {
    if (response.data.statusCode === 200) {
      return response.data;
    } else {
      ElMessage.warning(response.data.message)
      Promise.reject();
    }
  },
  (error) => {
    return Promise.reject();
  }
);

export default service;
