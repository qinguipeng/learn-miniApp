// pages/favor/favor.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 1. 数据绑定
    message: "Hello world",
    // 2. 列表数据
    // 3. for循环
    novel: ["《麒麟》", "《军区大院》", "《警卫连》", "《金牌打手》"],

    // 4. 事件绑定
    count: 0

  },
  // 监听事件
  increment() {
    console.log("+1");
    // 修改data中的数据，但是修改不会一起页面刷新（不会自动检测数据重新的渲染，小程序和react中也不会，只有vue会对数据进行劫持重新渲染
    // this.data.count += 1
    // console.log(this.data.count);

    // 修改data，并且页面重新渲染，必须使用this.setData()方法，同时改数据然后同时渲染页面
    this.setData({
      count: this.data.count + 1
    })
    console.log(this.data.count);
  },
  decrement() {
    console.log("-1");
    this.setData({
      count: this.data.count - 1
    })
    console.log(this.data.counts);
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

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})