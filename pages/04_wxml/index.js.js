// pages/04_wxml/index.js.js
Page({
  data: {
    message: "GP学小程序"
    , firstname: "xia"
    , lastname: 'minglang'
    , date: new Date().toLocaleDateString()
    , score: 88
    , isHidden: false
    , books: [
      { id: 111, name: "代码大全", price: 98 },
      { id: 112, name: "你不知道的JS", price: 87 },
      { id: 113, name: "JS高级程序设计", price: 76 },
      { id: 114, name: "小程序入门", price: 65 }]
  },
  onChange() {
    this.setData({
      isHidden: !this.data.isHidden
    })
  }
})