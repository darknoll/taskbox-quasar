import axios from 'axios';
import router from '../router';
import { getToken } from './auth';
import { Notify } from 'quasar';

// 创建一个axios实例对象
const service = axios.create({
  baseURL: 'http://192.168.0.226:8000',
  timeout: 10000,
  withCredentials: true
});

// 请求拦截
service.interceptors.request.use(
  config => {
    config.headers['X-Auth-Token'] = getToken();
    return config;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    let res = error.response;
    if (res.status === 401) {
      if (router.currentRoute.name !== 'login') {
        Notify.create({
          icon: 'warning',
          color: 'warning',
          message: 'Token无效或者过期，请重新登录！',
          timeout: 500
        });
        router.push({ name: 'login' });
      }
    }
    return Promise.reject(error);
  }
);

export default service;
