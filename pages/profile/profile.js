// pages/profile/profile.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatarURL: '',
    listCount: 40

  },







  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    console.log("用户进行下拉刷新");
    // 模拟网络请求:定时器
    setTimeout(() => {
      this.setData({
        listCount: 40
      })
      console.log(this.data.listCount);
      console.log("1秒后");
      // API
      // 停止下拉刷新
      wx.stopPullDownRefresh({
        success: (res) => {
          console.log('成功停止了下拉刷新', res);
        },
        fail: (err) => {
          alert('停止下拉刷新失败', err)
        }
      })
    }, 1000)
  },

  /**
   * 页面上拉触底事件的处理函数，默认开启.可选择配置到某一位置时触发事件
   */
  onReachBottom() {
    // console.log("onReachBottom");
    this.setData({
      listCount: this.data.listCount + 30
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})