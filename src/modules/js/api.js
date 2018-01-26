let url = {
    hotLists: '/index/hotLists'
}
//let url = ' http://rapapi.org/mockjs/23334/index/hotLists?'

//开发环境和真实环境的切换
//let host = ''
let host = 'http://rapapi.org/mockjsdata/23334'  

for (let key in url) {
    if (url.hasOwnProperty(key)) {
        url[key] = host + url[key]
    }
}


export default url