// pages/08_slot/index.js.js
Page({
  data: {
    isShowLifeTime: true
  }
  , onChangeTap() {
    this.setData({
      isShowLifeTime: !this.data.isShowLifeTime
    })
  }
})