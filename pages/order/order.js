// pages/order/or.js
Page({

  data: {
    userInfo: {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    // 获取共享数据：App实例中
    // 1. 获取 app 实例对象  getApp()
    const app = getApp()
    // 2. 从 app 实例对象获取实例
    const token = app.globalData.token;
    const userInfo = app.globalData.userInfo;
    console.log(token, userInfo);
    // 3.带token 发网络请求
    wx.request({
      url: 'url',
    })
    // 4.请求到的数据放到页面的data中
    // this.data.userInfo = userInfo;//又被改但是不会渲染到界面
    this.setData({
      // 对象增强写法，wxs不能使用增强写法
      userInfo
    })



  },
}) 