<template>
  <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swp-page swiper-slide" v-for="list in lists">
              <a class="js-no-follow" v-bind:href="list.clickUrl">
                <img class="goods-main-photo fadeIn" :src="list.image">
              </a>
            </div>
          </div>
        <div class="swiper-pagination"></div>  <!-- 分页器 -->
  </div> 
</template>

<style>
.swiper-slide img {
    height: 100%;
    width: 100%;
}
</style>

<script>
// swiper 对dom节点进行操作的，dom节点什么时候生成？mounted
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'

export default {
    name: 'swipe',
    //props: ['lists'],
    props: {
        lists: {
            type: Array,
            required: true
        },
        name: {}
    },
    created() {
        //console.log(this.lists)
        //console.log('created: ',document.querySelectorAll('.swiper-slide'))
    },
    mounted() {
        //console.log('mounted: ',document.querySelectorAll('.swiper-slide'))
        new Swiper('.swiper-container',{ 
            loop: true,
            //pagination: '.swiper-pagination' 
            pagination: {
               el: '.swiper-pagination',
            },
        })
    },
    //watch: {
    //    lists(val,oldVal) {
    //        console.log(val,oldVal)
    //        console.log('before nextTick: ',document.querySelectorAll('.swiper-slide'))
    //        this.$nextTick(() => {
    //            console.log('after nextTick: ',document.querySelectorAll('.swiper-slide'))
    //        })
    //    }
    //}
}
</script>

