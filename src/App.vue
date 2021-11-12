<!--
 * @description: 
 * @version: 
 * @Author: changjia
 * @Date: 2021-11-10 16:11:53
 * @LastEditors: changjia
 * @LastEditTime: 2021-11-11 19:23:32
-->
<template>
  <!-- 最顶层的路由入口 -->
  <!-- 路由匹配到的组件将渲染在这里 -->
  <router-view />
  <!-- 
    所有的一级路由都在此显示
    一级路由组件：Login 和 Layout
    <router-view /> 要么显示Login，要么显示Layout
  -->
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
