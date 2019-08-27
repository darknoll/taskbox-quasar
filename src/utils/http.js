import axios from 'axios';
import { getToken } from './auth';

// 创建一个axios实例对象
const service = axios.create({
  baseURL: 'http://127.0.0.1:8000',
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
    const res = response.data;
    if (res.code === 200) {
      return response;
    } else if (res.code === 401) {
      this.$q.notify({
        icon: 'done',
        color: 'positive',
        message: 'token无效或过期，请重新登录！'
      });
      this.$router.push({ name: 'login' });
    } else if (res.code === 500) {
      this.$q.notify({
        icon: 'done',
        color: 'positive',
        message: '服务端发生错误！'
      });
    } else {
      this.$q.notify({
        icon: 'done',
        color: 'positive',
        message: res.data
      });
    }
  },
  error => {
    console.log('err' + error);
    this.$q.notify({
      icon: 'done',
      color: 'positive',
      message: error.message
    });
    return Promise.reject(error);
  }
);

export default service;
