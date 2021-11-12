<!--
 * @description: 页面重定向
 * @version: 
 * @Author: changjia
 * @Date: 2021-11-10 21:39:35
 * @LastEditors: changjia
 * @LastEditTime: 2021-11-11 19:09:15
-->
<template>

</template>

<script>
export default {
  name:'redirect',
  created() {
    const { params, query} = this.$route
    const { path } = params
    this.$router.replace({path:'/' + path, query})
  },
  render: function(h){
    return h() //避免警告信息
  },
}
</script>

<style lang='less' scoped>

</style>
