/*
 * @description: 
 * @version: 
 * @Author: changjia
 * @Date: 2021-11-10 18:17:52
 * @LastEditors: changjia
 * @LastEditTime: 2021-11-10 19:15:50
 */
module.exports = {
  title: "vue element admin",

  /**
   * @description: 是否显示设置右面板
   * @param {boolean} true | false
   */
  showSetting: true,
  
  /**
   * @description: 是否需要tagsView
   * @param {boolean} true | false
   */
  tagsView: true,

  /**
   * @description: 是否固定头部
   * @param {boolean} true | false 
   */
  fixedHeader: false,

  /**
   * @description: 是否在侧边栏显示logo
   * @param {boolean} true | false
   */
  sidebarLogo: false,

  /**
   * @param {string | array} 'production' | ['production', 'development']
   * @description 需要显示错误日志组件。
   * 默认值只在生产环境中使用
   * 如果你也想在dev中使用它，你可以传递['production'， 'development']
   */
  errorLog: 'production'

}