

// 1.使用vue-router
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

let routes = [{
    path: '/',
    component: require('./components/member.vue')
}]

// 2.创建router实例
let router = new Router({
    routes
})

// 3.根组件注入
new Vue({
    el: '#app',
    router
})