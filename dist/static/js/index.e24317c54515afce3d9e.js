webpackJsonp([5],{108:function(t,e){},11:function(t,e,a){function n(t){a(14)}var s=a(7)(a(12),a(15),n,null,null);t.exports=s.exports},12:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(16),s=a.n(n),i=(a(8),s.a.parse(location.search.substr(1))),r=i.index,o=[{name:"有赞",icon:"icon-home",href:"index.html"},{name:"分类",icon:"icon-category",href:"category.html"},{name:"购物车",icon:"icon-cart",href:"cart.html"},{name:"我",icon:"icon-user",href:"member.html"}];e.default={props:["obj"],data:function(){return{navConfig:o,curIndex:parseInt(r)||0}},methods:{changeNav:function(t,e){location.href=t.href+"?index="+e}}}},134:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(96),s=(a.n(n),a(111)),i=a.n(s),r=a(20),o=(a.n(r),a(108)),c=(a.n(o),a(0)),d=a(6),l=a.n(d),u=a(2),p=a(11),f=a.n(p),h=a(30),g=a.n(h),v=a(8);c.default.use(i.a);new c.default({el:"#app",data:{lists:null,pageNum:1,pageSize:6,loading:!1,allLoaded:!1,bannerLists:null,obj:{age:20}},created:function(){var t=this;this.getLists(),this.getBanner(),v.a.$on("change",function(e){t.obj.age=e})},methods:{getLists:function(){var t=this;this.allLoaded||(this.loading=!0,l.a.post(u.a.hotLists,{pageNum:this.pageNum,pageSize:this.pageSize}).then(function(e){var a=e.data.lists;a.length<t.pageSize&&(t.allLoaded=!0),t.lists?t.lists=t.lists.concat(a):t.lists=a,t.loading=!1,t.pageNum++}))},getBanner:function(){var t=this;l.a.get(u.a.banner).then(function(e){t.bannerLists=e.data.lists})}},components:{Foot:f.a,Swipe:g.a}})},14:function(t,e){},15:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bottom-nav"},[a("ul",t._l(t.navConfig,function(e,n){return a("li",{class:{active:n==t.curIndex},on:{click:function(a){t.changeNav(e,n)}}},[a("a",[a("i",{class:e.icon}),a("div",[t._v(t._s(e.name))])])])}))])},staticRenderFns:[]}},2:function(t,e,a){"use strict";var n={hotLists:"/index/hotLists",banner:"/index/banner",topList:"/category/topList",subList:"/category/subList",rank:"/category/rank",searchList:"/search/list",details:"/goods/details",deal:"/goods/deal",addCart:"/cart/add",cartLists:"/cart/list",cartReduce:"/cart/reduce",cartRemove:"/cart/remove",cartMremove:"/cart/mremove",cartUpdate:"/cart/update",addressLists:"/address/list",addressAdd:"/address/add",addressRemove:"/address/remove",addressUpdate:"/address/update",addressSetDefault:"/address/setDefault"};for(var s in n)n.hasOwnProperty(s)&&(n[s]="http://rapapi.org/mockjsdata/24170"+n[s]);e.a=n},20:function(t,e){},30:function(t,e,a){function n(t){a(59)}var s=a(7)(a(42),a(60),n,null,null);t.exports=s.exports},42:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(68),s=a(58);a.n(s);e.default={name:"swipe",props:{lists:{type:Array,required:!0},name:{}},created:function(){},mounted:function(){new n.a(".swiper-container",{loop:!0,pagination:{el:".swiper-pagination"}})}}},58:function(t,e){},59:function(t,e){},60:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"swiper-container"},[a("div",{staticClass:"swiper-wrapper"},t._l(t.lists,function(t){return a("div",{staticClass:"swp-page swiper-slide"},[a("a",{staticClass:"js-no-follow",attrs:{href:t.clickUrl}},[a("img",{staticClass:"goods-main-photo fadeIn",attrs:{src:t.image}})])])})),t._v(" "),a("div",{staticClass:"swiper-pagination"})])},staticRenderFns:[]}},8:function(t,e,a){"use strict";var n=a(0),s=new n.default;e.a=s},96:function(t,e){}},[134]);