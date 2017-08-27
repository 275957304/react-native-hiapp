/* global fetch */
const API_PATH = 'https://raw.githubusercontent.com/BelinChung/api-mock/master/HiApp/'

function _param(obj = {}) {
  let _ = encodeURIComponent
  return Object.keys(obj).map(k => `${_(k)}=${_(obj[k])}`).join('&')
}

function _networkDone(res) {
  if (!res['err_code']) {
    return res
  } else {
    return Promise.reject(res)
  }
}
function _networkFail(res) {
  return Promise.reject(res)
}
function _fetch(url, data, method) {
  return fetch(url, {
    body: JSON.stringify(data),
    method,
    credentials: 'same-origin'
  })
}

export function ajax({ url, query, data, method = 'GET' }) {
  url = API_PATH + url + '?' + _param(query)

  let promise = _fetch(url, data, method)
  let success = _networkDone.bind(this)
  let failure = _networkFail.bind(this)

  return promise.then(resp => resp.ok ? resp.json().then(success) : failure(resp))
}
