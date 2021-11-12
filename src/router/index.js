import { createApp } from 'vue'

import Router from 'vue-router'

// 启动全局组件路由，vue-router才开始执行
createApp().use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: 子菜单只在路由子菜单时出现。长度> = 1
 *
 * hidden: true                   如果设置为true，条目将不会显示在侧栏中(默认为false)
 * alwaysShow: true               如果设置为true，将始终显示根菜单
 *                                如果没有设置alwaysShow，当item有多个子路由时，
 *                                它将变成嵌套模式，否则不会显示根菜单
 * redirect: noRedirect           如果设置noRedirect将不会在面包屑中重定向
 * name:'router-name'             这个名字被<keep-alive>使用(必须设置!!)
 * meta : {
    roles: ['admin','editor']    控制页面角色(可以设置多个角色)
    title: 'title'               名称显示在侧边栏和breadcrumb(推荐设置)
    icon: 'svg-name'/'el-icon-x' 图标显示在侧边栏
    noCache: true                如果设置为true，页面将不会被缓存(默认为false)
    affix: true                  如果设置为true，标记将被添加到tags-view中
    breadcrumb: false            如果设置为false，则该项将隐藏在breadcrumb中(默认为true)
    activeMenu: '/example/list'  如果设置路径，侧边栏将突出显示您设置的路径
    requiresAuth: true           如果设置为true，则需要身份验证
  }
 */

/**
 * constantRoutes：常量路由
 * 没有权限要求的基本页面
 * 所有角色均可访问
 */
export const constantRoutes = [
  // 重定向
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(*)', // 动态路径参数，以冒号开头 *匹配所有路径
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  // 登录
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  // 身份验证-重定向
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  // 404页面
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  // 401页面
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  // 指示板
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard', // 给路由命名,设置的name要唯一!
        // 路由元信息，判断是否需要验证
        meta: { title: 'Dashboard', icon: 'dashboard', affix: true } // affix：固定
      }
    ]
  },
  // 文档
  {
    path: '/documentation',
    component: 'Layout',
    children: [
      {
        path: 'index',
        component: () => import('@/views/documentation/index'),
        name: 'Documentation',
        meta: { title: 'Documentation', icon: 'documentation', affix: true }
      }
    ]
  },
  // 指南
  {
    path: '/guide',
    component: Layout,
    redirect: '/guide/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/guide/index'),
        name: 'Guide',
        meta: { title: 'Guide', icon: 'guide', affix: true }
      }
    ]
  },
  // 配置文件
  {
    path: '/profile',
    component: Layout,
    redirect: '/profile/index',
    hidden: true,
    children: [
      {
        path: 'index',
        component: () => import('@/views/profile/index'),
        name: 'Profile',
        meta: { title: 'Profile', icon: 'profile', affix: true }
      }
    ]
  }
]

/**
 * asyncRoutes：异步路由
 * 需要根据用户角色动态加载的路由
 */
export const asyncRoutes = [

  // 404页面必须放在最后!!
  { path: '*', redirect: '/404', hidden: true }
]

/**
 * 创建路由实例
 */
const createRouter = () => new Router({
  // mode:'history', //路由模式：默认为hash(根路径带#),如果改为 history(根路径不带#)，则需要后端进行配合
  scrollBehavior: () => ({ y: 0 }), // 页面滚动方法
  routes: constantRoutes
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
