import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: 'http://localhost:8880/euser/list',
    method: 'get',
    params: query
  })
}
