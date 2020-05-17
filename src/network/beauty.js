import {request} from './request.js'
import Qs from 'querystring'

export function getbeautydata() {
  return request({
    url: '/json/data.json'
    // url: '/assets/json/data.json'
  })
}
export function beautyMethods(method,url,data) {
  return request({
    method: method,
    url: `http://112.74.103.14:8080/Upload_file/${url}`,
    data: data? Qs.stringify(data): ""
  })
}