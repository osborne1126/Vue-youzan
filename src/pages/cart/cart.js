import './cart_base.css'
import './cart_trade.css'
import './cart.css'

import Vue from 'vue'
import mixin from 'js/mixin.js'
import axios from 'axios'
import url from 'js/api.js'

new Vue({
    el: '.container',
    data: {
        lists: null
    },
    computed: {

    },
    created() {
        this.getList()
    },
    methods: {
        getList() {
            axios.post(url.cartLists).then(res => {
                let lists = res.data.cartList
                lists.forEach(shop => {
                    shop.checked = true
                    shop.goodsList.forEach(good => {
                        good.checked = true
                    })
                })
                this.lists = lists
            })
        },
        selectGood(good) {
            //console.log(good.checked)
            good.checked = !good.checked
        }
    },
    mixins: [mixin]
})











/*
//通过mock模拟数据写法 （需先安装mockjs）
import Mock from 'mockjs'
let Random = Mock.Random

let data = Mock.mock({
    'cartList|3' :[{
        'goodsList|1-2' :[{
            id: Random.int(10000,100000),
            image: Mock.mock('@img(90x90,@color)')
        }]
    }]
})

console.log(data)
 */