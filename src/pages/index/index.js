import "css/common.css"
import "./index.css"

import Vue from 'vue'
import axios from 'axios'
import url from '../../modules/js/api.js'
//let url = ' http://rapapi.org/mockjs/23334/index/hotLists?'

///console.log(axios)
//console.log(url)

let app = new Vue({
    el: '#app',
    data: {
        lists: null
    },
    created() {
        axios.post(url.hotLists, {
            pageNum: 1,
            pageSize: 6
        }).then(res => {
           // console.log(res.data.lists)
            this.lists = res.data.lists
        })
    }
})

// app.$mount()