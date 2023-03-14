// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    pages: [
      { name: '01_注册页面', path: "/pages/01_register_page/index.js" },
      { name: '02_常见组件', path: "/pages/02_common_cpns/index.js" },
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
