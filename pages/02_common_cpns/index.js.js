// pages/02_common_cpns/index.js.js
Page({
  data: {
    //----------------- text组件及属性
    message: 'GP学习小程序',
    //----------------- image组件及属性
    chooseImageUrl: '',
    //----------------- view-scroll组件及属性
    viewColors: ["red", "orange", "yellow", "green", "cyan", "skyblue", "purple"],

  },
  //----------------- button组件及属性
  getUserInfo(event) {
    // console.log(event);
    // getUserInfo通过wx.getUserProfile({})回调
    wx.getUserProfile({
      // 必填
      desc: '用于完善会员资料',
      // 早期小程序基本不支持promise
      // success: (res) => {
      //   console.log(res);
      // }

      // 后期基本你支持Promise风格
    }).then(res => {
      console.log(res);
    })
  },

  getphonenumber(e) {
    // 仅支持企业开发，个人开发者不支
    console.log(e);
  }



  //----------------- view组件及属性

  , onViewClick() {
    console.log("onViewClick");
  }


  //----------------- image组件及属性
  , onChooseImage() {
    wx.chooseMedia({
      mediaType: 'image'
    }).then(res => {
      console.log(res);
      const imagePath = res.tempFiles[0].tempFilePath
      this.setData({
        chooseImageUrl: imagePath
      })
    })
  }
  //----------------- scroll-view组件及属性
  // 滚动到最  顶部 或 左边
  , bindscrolltoupper() {
    console.log("滚动到最  顶部 或 左边");
  }
  // 滚动到最  底部 或 右边
  , bindscrolltolower() {
    console.log("滚动到最  底部 或 右边");
  }
  // 监听整个滚动是否发生
  , bindscroll(e) {
    console.log("监听整个滚动是否发生", e);
  }

})