import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)

/* Layout */
import Layout from "@/layout"

/**
 * constantRoutes：常量路由
 * 没有权限要求的基本页面
 * 所有角色均可访问
 */
export const constantRoutes = [
  {
    path: '/redirect', // 重定向
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(*)',
        component:()=>import('@/views/redirect/index')
      }
    ],
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden:true
  }
]

/** 
 * asyncRoutes：异步路由
 * 需要根据用户角色动态加载的路由
 */ 
export const asyncRoutes = []

/**
 * 创建路由
 */
const createRouter = () => new Router({
  // mode:'history', //需要服务支持,路由模式 history 和 hash
  scrollBehavior: () => ({ y: 0 }),
  routes:constantRoutes
})

const router = createRouter()

/**
 * 重置路由
 */
export function resetRouter() {
  const newRouter = createRouter()
  // 重置路由
  router.matcher = newRouter.matcher
}

export default router