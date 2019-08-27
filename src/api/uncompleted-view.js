import http from '@/utils/http';
import qs from 'qs';

/**
 * 获取所有未完成任务
 */
export function getUncompletedTasks() {
  return http({
    url: '/api/tasks',
    method: 'get'
  });
}

/**
 * 接收/取消接收未完成任务
 */
export function pickTask(id, option) {
  return http({
    url: `/api/tasks/${id}/status`,
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    },
    data: qs.stringify({ option })
  });
}

/**
 * 获取流程支持的操作
 */
export function getTaskOpList(id) {
  return http({
    url: `/api/tasks/${id}/op-list`,
    method: 'get'
  });
}
