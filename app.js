// app.js
App({
  // 全局数据
  // 这些数据都不是响应式的，都是一些固定的数据，弊端
  globalData: {
    token: "",
    userInfo: {},
  },


  // 生命周期函数1
  onLaunch(options) {
    // console.log(options);

    // 0.从本地获取token，userIfo
    const token = wx.getStorageSync('token')
    const userInfo = wx.getStorageSync('userInfo')

    //1. 登录，获取token，userInfo
    if (!token || !userInfo) {
      console.log("发送登录请求进行登录");
      wx.login({
        success: res => {
          // 发送 res.code 到后台换取 openId, sessionKey, unionId
        }
      })
      // 2.1 将登陆成功返回的数据保存到storage中,区别于pc，可以保存出string类类型以外的数据
      wx.setStorageSync('token', "12345")
      wx.setStorageSync('userInfo', { name: "夏明朗", age: 29, height: 1.88 })
    }
    // 2.2 将请求到的数据存储到globalData全局数据中
    this.globalData.token = token
    this.globalData.userInfo = userInfo


  },
  // 生命周期函数2
  onShow(options) {
    // console.log("onShow", options);
  },
  // 生命周期函数3
  onHide() {
    // console.log("onHide");
  },



})
