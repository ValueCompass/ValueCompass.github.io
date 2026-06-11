import { createRouter, RouteRecordRaw, createWebHashHistory } from 'vue-router'
import {
  hasCulturalValueAnnotationAnnotatorLogin,
  hasCulturalValueAnnotationAdminLogin,
  hasStudiedCulturalValueAnnotationGuidance,
} from '../utils/culturalValueAnnotationAuth'

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
    path: '/benchmarks',
    name: 'benchmarks',
    component: () => import('../views/LeaderboardHome.vue'),
    redirect: '/benchmarks/benchmarks', // 配置重定向
    meta: {
      keepAlive: true, //此页面需要缓存
      requiresFrontEndAuth: true
    },
    children: [
      {
        path: 'benchmarks',
        name: 'Alignment Leaderboard',
        component: () => import('../views/LeaderboardNew.vue'),
        meta: {
          keepAlive: true, //此页面需要缓存
          requiresFrontEndAuth: true
        },
      },
      {
        path: 'valueAnalysis',
        name: 'Value Analysis',
        component: () => import('../views/Analysis.vue'),
        meta: {
          keepAlive: true, //此页面需要缓存
          requiresFrontEndAuth: true
        },
      },
      {
        path: 'valueComparison',
        name: 'Value Comparison',
        component: () => import('../views/Comparison.vue'),
        meta: {
          keepAlive: true, //此页面需要缓存
          requiresFrontEndAuth: true
        },
      },
      {
        path: 'keyFindings',
        name: 'KeyFindings',
        component: () => import('../views/KeyFindings.vue'),
        meta: {
          keepAlive: true, //此页面需要缓存
          requiresFrontEndAuth: true
        },
      },
    ]
  },

  {
    path: '/TestValues',
    name: 'Test Your Values',
    component: () => import('../views/TestValuesChatNew.vue'),
    meta: {
      keepAlive: true, //此页面需要缓存
      requiresFrontEndAuth: true
    },
  },
  {
    path: '/page1',
    name: 'page1',
    component: () => import('@/components/TestValuesChat/splineViewer.vue'),
    meta: {
      keepAlive: true, //此页面需要缓存
      requiresFrontEndAuth: true
    },
  },
  {
    path: '/TestValues2',
    name: 'Test Your Values2',
    component: () => import('../views/TestValuesNew2.vue'),
    meta: {
      keepAlive: true, //此页面需要缓存
      requiresFrontEndAuth: true
    },
  },

  {
    path: '/CulturalAlignment',
    name: 'CulturalAlignment',
    component: () => import('../views/CulturalAlignment/Index.vue'),
    // redirect: '/CulturalAlignment/home', // 配置重定向
    meta: {
      keepAlive: true, //此页面需要缓存
      requiresFrontEndAuth: true
    },
    children: [
      {
        path: '',
        name: 'CulturalAlignmentHome',
        component: () => import('../views/CulturalAlignment/Home.vue'),
        meta: {
          keepAlive: true, //此页面需要缓存
          requiresFrontEndAuth: true
        },
      },
      // {
      //   path: 'comparison',
      //   name: 'CulturalAlignmentComparison',
      //   component: () => import('../views/CulturalAlignment/ComparisonViewPush.vue'),
      //   meta: {
      //     keepAlive: true, //此页面需要缓存
      //     requiresFrontEndAuth: true,
      //     index: 0,
      //     animate: true
      //   },
      // },

      // {
      //   path: 'arena',
      //   name: 'CulturalAlignmentArena',
      //   component: () => import('../views/CulturalAlignment/Arena.vue'),
      //   meta: {
      //     keepAlive: true, //此页面需要缓存
      //     requiresFrontEndAuth: true,
      //     index: 1,
      //     animate:true
      //   },
      // },
      {
        path: 'TopicSelection',
        name: 'CulturalAlignmentTopicSelection',
        component: () => import('../views/CulturalAlignment/TopicSelection.vue'),
        meta: {
          keepAlive: true, //此页面需要缓存
          requiresFrontEndAuth: true
        },

      },

      {
        path: 'Comparison&Arena',
        name: 'CulturalAlignmentComparison&Arena',
        component: () => import('@/views/CulturalAlignment/Comparison&Arena.vue'),
        meta: {
          keepAlive: true, //此页面需要缓存
          requiresFrontEndAuth: true
        },
      },

    ]
  },

  {
    path: '/Login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    meta: {
      keepAlive: false, //此页面需要缓存
      requiresFrontEndAuth: false,
      hideAppChrome: true
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
  },
  
  {
    path: '/CulturalValueAnnotation',
    name: 'CulturalValueAnnotation',
    // component: () => import('../views/CulturalValueAnnotation/Index.vue'),
    meta: {
      requiresCulturalValueAnnotationAuth: false
    },
    children: [
      {
        path: '',
        component: () => import('../views/CulturalValueAnnotation/Index.vue'),
         redirect: '/CulturalValueAnnotation/home',
        meta: {
          requiresCulturalValueAnnotationAuth: false
        },
        children: [
          {
            path: 'home',
            name: 'CulturalValueAnnotationHome',
            component: () => import('../views/CulturalValueAnnotation/Home.vue'),
            meta: {
              requiresCulturalValueAnnotationAuth: true
            }
          },
          {
            path: 'TaskHistory',
            name: 'TaskHistory',
            component: () => import('../views/CulturalValueAnnotation/TaskHistory.vue'),
            meta: {
              requiresCulturalValueAnnotationAuth: true
            }
          },
          {
            path: 'edit/:id',
            name: 'CulturalValueAnnotationDetail',
            component: () => import('../views/CulturalValueAnnotation/Home.vue'),
            meta: {
              requiresCulturalValueAnnotationAuth: true
            }
          },
          {
            path: 'onboarding',
            name: 'CulturalValueAnnotationOnboarding',
            component: () => import('../views/CulturalValueAnnotation/Onboarding.vue'),
            meta: {
              requiresCulturalValueAnnotationAuth: true
            }
          },
          {
            path: 'admin-export',
            redirect: '/CulturalValueAnnotation/admin/UserList',
            meta: {
              requiresCulturalValueAnnotationAdminAuth: true
            }
          },
          {
            path: 'admin/UserList',
            name: 'CulturalValueAnnotationAdminExport',
            component: () => import('../views/CulturalValueAnnotation/AdminExport.vue'),
            meta: {
              requiresCulturalValueAnnotationAdminAuth: true
            }
          },
          {
            path: 'admin/TaskHistory',
            name: 'CulturalValueAnnotationAdminTaskHistory',
            component: () => import('../views/CulturalValueAnnotation/TaskHistory.vue'),
            meta: {
              requiresCulturalValueAnnotationAdminAuth: true
            }
          },
          {
            path: 'admin/read/:id',
            name: 'CulturalValueAnnotationAdminRead',
            component: () => import('../views/CulturalValueAnnotation/Home.vue'),
            meta: {
              requiresCulturalValueAnnotationAdminAuth: true
            }
          },
        ]
      },
      {
        path: 'Login',
        name: 'CulturalValueAnnotationLogin',
        component: () => import('../views/CulturalValueAnnotation/Login.vue'),
        meta: {
          requiresCulturalValueAnnotationAuth: false
        }
      },
      
    ]
  },
  
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
  if (!sessionStorage.getItem("token") && to.name == 'Test Your Values') { // 判断当前的token是否存在
    next({
      name: 'Login',
      query: { redirect: to.fullPath }
    })
  }

  const isCulturalValueAnnotationRoute = to.path.startsWith('/CulturalValueAnnotation')

  if (isCulturalValueAnnotationRoute && to.name === 'CulturalValueAnnotationLogin') {
    if (hasCulturalValueAnnotationAdminLogin()) {
      next({
        path: '/CulturalValueAnnotation/admin/UserList'
      })
      return
    }

    if (hasCulturalValueAnnotationAnnotatorLogin()) {
      next({
        path: hasStudiedCulturalValueAnnotationGuidance()
          ? '/CulturalValueAnnotation/home'
          : '/CulturalValueAnnotation/onboarding'
      })
      return
    }

    next()
    return
  }

  if (isCulturalValueAnnotationRoute && to.matched.some((record) => record.meta.requiresCulturalValueAnnotationAuth)) {
    const isTaskHistoryRoute = to.name === 'TaskHistory'
    const hasAdminAccessToTaskHistory = isTaskHistoryRoute && hasCulturalValueAnnotationAdminLogin()

    if (!hasCulturalValueAnnotationAnnotatorLogin() && !hasAdminAccessToTaskHistory) {
      next({
        path: '/CulturalValueAnnotation/Login'
      })
      return
    }

    if (!hasAdminAccessToTaskHistory && to.name !== 'CulturalValueAnnotationOnboarding' && !hasStudiedCulturalValueAnnotationGuidance()) {
      next({
        path: '/CulturalValueAnnotation/onboarding'
      })
      return
    }
  }

  if (isCulturalValueAnnotationRoute && to.matched.some((record) => record.meta.requiresCulturalValueAnnotationAdminAuth)) {
    if (!hasCulturalValueAnnotationAdminLogin()) {
      next({
        path: '/CulturalValueAnnotation/Login'
      })
      return
    }
  }

  next();
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