import {request} from "./request"

export function getmusic(path) {
    return request({
      url: path,
      charset : 'UTF-8'
  })
};
export function getmusicfromQQ(name, num) {
  return request( {
    url: `https://c.y.qq.com/soso/fcgi-bin/client_search_cp?aggr=1&cr=1&flag_qc=0&p=1&n=${num}&w=${name}`
  })
}
