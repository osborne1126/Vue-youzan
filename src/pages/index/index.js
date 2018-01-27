import "css/common.css"
import "./index.css"

import Vue from 'vue'
import axios from 'axios'
import url from '../../modules/js/api.js'

import { InfiniteScroll } from 'mint-ui'
Vue.use(InfiniteScroll);

let app = new Vue({
    el: '#app',
    data: {
        lists: null,
        pageNum: 1,
        pageSize: 6,
        loading: false,     //false 可以继续加载
        allLoaded: false
    },
    created() { 
        this.getLists()
    },
    methods: {
        getLists() {
            if (this.allLoaded) return
            this.loading = true
            axios.post(url.hotLists, {
                pageNum: this.pageNum,
                pageSize: this.pageSize
            }).then(res => {
               // console.log(res.data.lists)
               let curLists = res.data.lists
               //判断所以数据是否加载完毕
               if(curLists.length < this.pageSize) {
                   this.allLoaded = true
               }
               if(this.lists) {
                   this.lists = this.lists.concat(curLists)
               } else {
                   //第一次请求数据
                   this.lists = curLists
               }
               this.loading = false
               this.pageNum++
            })
        }
    }
})

// app.$mount()