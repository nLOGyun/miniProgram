// order.js
const request = require('../request')

module.exports = {
  // data可以传入 url, data, ignoreToken, form, cToken
  login (data) {
    let url = '/user/login'
    return request.post({ url, data })
  }
}