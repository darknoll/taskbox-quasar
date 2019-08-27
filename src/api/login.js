import http from '@/utils/http';
import qs from 'qs';

export function login(data) {
  return http({
    url: '/login',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    },
    data: qs.stringify(data)
  });
}

export function getUserInfo(token) {
  return http({
    url: '/api/user-info',
    method: 'get',
    params: { token }
  });
}

export function logoff() {
  return http({
    url: '/logoff',
    method: 'post'
  });
}
