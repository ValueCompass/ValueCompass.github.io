import { createRouter, RouteRecordRaw, createWebHashHistory } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: {
      keepAlive: true, //此页面需要缓存
      requiresFrontEndAuth: true
    },
  },
  {
    path: '/leaderboard/leaderboard',
    name: 'Alignment Leaderboard',
    component: () => import('../views/LeaderboardNew.vue'),
    meta: {
      keepAlive: true, //此页面需要缓存
      requiresFrontEndAuth: true
    },
  },
  {
    path: '/leaderboard/valueAnalysis',
    name: 'Value Analysis',
    component: () => import('../views/Analysis.vue'),
    meta: {
      keepAlive: true, //此页面需要缓存
      requiresFrontEndAuth: true
    },
  },
  {
    path: '/leaderboard/valueComparison',
    name: 'Value Comparison',
    component: () => import('../views/Comparison.vue'),
    meta: {
      keepAlive: true, //此页面需要缓存
      requiresFrontEndAuth: true
    },
  },
  {
    path: '/TestValues',
    name: 'Test Your Values',
    component: () => import('../views/TestValuesNew.vue'),
    meta: {
      keepAlive: true, //此页面需要缓存
      requiresFrontEndAuth: true
    },
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    meta: {
      keepAlive: false, //此页面需要缓存
      requiresFrontEndAuth: false
    },


  },
  {
    path: '/AboutUs',
    name: 'AboutUs',
    component: () => import('../views/AboutUs.vue'),
    meta: {
      keepAlive: false, //此页面需要缓存
      requiresFrontEndAuth: false
    },


  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// 前端添加密码，防止release流程未走完，外部人员访问
router.beforeEach((to, from, next) => {
  console.log(from)
  if (!!to.meta && to.meta.requiresFrontEndAuth === false) {
    //这里判断用户是否登录，验证本地存储是否有token
    next();
    return;
  }
  if (!sessionStorage.getItem("token")) { // 判断当前的token是否存在
    next({
      name: 'Login',
      query: { redirect: to.fullPath }
    })
  } else {
    next();
  }
})

// router.beforeEach((to, from, next) => {
//   const isAuthenticated = sessionStorage.getItem('token');
//   if (to.path === '/protected' && !isAuthenticated) {
//     next('/'); // 重定向到登录页面
//   } else {
//     next();
//   }
// });

export default router