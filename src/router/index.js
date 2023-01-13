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
      },
      {
        name: 'RadioConcept',
        path: '/radio-concept',
        meta: {
          title: '无线电概念'
        },
        component: '',
      },
      {
        name: 'CustomerService',
        path: '',
        meta: {
          title: '在线客服',
          href: 'https://go.crisp.chat/chat/embed/?website_id=7a8894aa-f90a-474f-acae-e147ff493cc8'
        },
      },
      {
        name: 'About5G',
        path: '/about-5g',
        meta: {
          title: '关于5G发展'
        },
        component: '',
        children: [
          {
            name: '5GDevelop',
            path: '/5g-develop',
            meta: {
              title: '5G发展'
            }
          },
          {
            name: 'AntennaMaterial',
            path: '/antenna-material',
            meta: {
              title: '天线材料概况'
            }
          },
          {
            name: 'HotMaterial',
            path: '/hot-material',
            meta: {
              title: '热导材料研究'
            }
          },
          {
            name: 'ElectricityMaterial',
            path: '/electricity-material',
            meta: {
              title: '电磁材料研究'
            }
          },
          {
            name: 'Microwave',
            path: '/microwave',
            meta: {
              title: '微波介质'
            }
          },
          {
            name: 'Industry',
            path: '/industry',
            meta: {
              title: '先进封装行业'
            }
          }
        ]
      },
      {
        name: 'APP',
        path: '',
        meta: {
          title: '手机APP',
          href: 'https://h1f7v.p969w2s.com/5yxg1'
        },
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