import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/pages/Layout.vue'
import Tea from '@/pages/Tea.vue'
import May from '@/pages/May.vue'
import Regist from '@/pages/regist.vue'
import Login from '@/pages/login.vue'
import Products from '@/pages/Products.vue'
import dfin from '@/demo/defineProperty.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path: '/',name: 'layout',component: Layout},
    {path:'/tea',name:'tea',component:Tea},
    {path:'/may',name:"may",component:May},
    {path:'/regist',name:'regist',component:Regist},
    {path:'/login',name:'login',component:Login},
    {path:'/products',name:'products',component:Products},
    {path:'/dfin',component:dfin}
  ]
})
