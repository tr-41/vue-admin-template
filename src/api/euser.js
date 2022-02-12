import request from '@/utils/request'

export function getList(params) {
  return request({
    url: 'http://localhost:8880/euser/list',
    method: 'get',
    params
  })
}
