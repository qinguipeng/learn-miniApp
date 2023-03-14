// 注册页面
Page({

  data: {
    list: [],
    // 2. 作用二：初始化本地数据
    counter: 100,

    btns: ["red", "blue", "green", "orange"]
  },
  // 1. 作用一：发送网络请求，生命周期
  onLoad() {
    console.log("onLoad");
    // 发请求
    wx.request({
      url: "http://123.207.32.32:7888/api/hy66/home/data?type=sell&page=1",
      success: (res) => {
        // console.log(res.data.data.list);
        const list = res.data.data.list
        this.setData({
          list,
        })
      }
    })
  },

  // 3.作用三：绑定WXML中产生事件后的回调
  onBtn1Click() {
    console.log("onBtn1Click");
  }
  , onBtnsClick(event) {
    console.log('onBtnsClick', event.target.dataset.color);
  }

  // 4.绑定下拉刷新、页面滚动、上拉加载
  , onPullDownRefresh() { console.log("onPullDownRefresh") }
  , onReachBottom() { console.log("onReachBottom") }
  , onPageScroll(event) { console.log("onPageScroll", event) }

  // 其他生命周期
  , onShow() {
    console.log('onShow');
  }
  , onReady() {
    console.log('onReady');
  }
  , onHide() {
    console.log('onHide');
  }
  , onUnload() {
    console.log("onUnload");
  }

})