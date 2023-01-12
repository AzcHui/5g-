// import VueRouter from 'vue-router'
import * as VueRouter from 'vue-router'

// 1. 定义路由组件
import Layout from '@/layout/index.vue'

// 2. 定义一些路由
const routes = [
  {
    name: 'Index',
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        name: 'Home',
        path: '/home',
        meta: {
          title: '首页'
        },
        component: () => import('../views/Home.vue'),
      },
      {
        name: '5GConcept',
        path: '/5g-concept',
        meta: {
          title: '5G概念'
        },
        component: () => import('../views/Concept.vue'),
      },
      {
        name: '5GExchange',
        path: '/5g-exchange',
        meta: {
          title: '5G通信'
        },
        component: '',
      }
    ],
  },
]

// 3. 创建路由实例并传递 `routes` 配置
const router = VueRouter.createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: VueRouter.createWebHashHistory(),
  routes, // `routes: routes` 的缩写
})

export default router