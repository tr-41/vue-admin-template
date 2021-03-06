import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: 'http://localhost:8880/euser/list',
    method: 'get',
    params: query
  })
}

export function fetchArticle(id) {
  return request({
    url: '/vue-element-admin/article/detail',
    method: 'get',
    params: { id }
  })
}

export function createArticle(data) {
  return request({
    url: 'http://localhost:8880/euser/create',
    method: 'post',
    data
  })
}

export function updateArticle(data) {
  return request({
    url: 'http://localhost:8880/euser/update',
    method: 'post',
    data
  })
}

export function deleteArticle(data) {
  return request({
    url: 'http://localhost:8880/euser/delete',
    method: 'post',
    data
  })
}
