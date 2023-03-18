// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    pages: [
      { name: '01_注册页面', path: "/pages/01_register_page/index.js" },
      { name: '02_常见组件', path: "/pages/02_common_cpns/index.js" },
      { name: '03_wxss', path: "/pages/03_wxss/index.js" },
      { name: '04_wxml', path: "/pages/04_wxml/index.js" },
      { name: '05_wxs', path: "/pages/05_wxs/index.js" },
      { name: '06_event', path: "/pages/06_event/index.js" },
      { name: '07_component', path: "/pages/07_component/index.js" },
      { name: '08_component_2', path: "/pages/08_slot/index.js" },
      { name: '09_api_network', path: "/pages/09_api_network/index.js" },
      { name: '10_API_（弹窗交互|转发|获取设备信息|获取位置信息|本地存储）', path: "/pages/10_API/index.js" },
      { name: '11_API_navigate(路由|跳转)', path: "/pages/11_API_navigate/index.js" },
      { name: '12_login(登录流程)', path: "/pages/12_login/index.js" },
    ]
  }
  // 监听 onBtnClick
  , onBtnClick(event) {
    // 1. 获取item
    const item = event.target.dataset.item
    // 2. 跳转路径
    wx.navigateTo({
      url: item.path,
    })
  }
})
