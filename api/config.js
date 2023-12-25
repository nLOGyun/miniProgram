const {ENV} = require('./env')
let BASEURL = ''

switch(ENV) {
  case 'production': 
    BASEURL = ''
    break;
  case 'development': 
    BASEURL = 'http://192.168.6.22:8080'
    break;
}

module.exports = {
  BASEURL
}