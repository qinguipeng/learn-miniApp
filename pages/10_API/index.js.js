// pages/10_API/index.js.js
Page({
  // -----------------API/界面/互交【1.展示弹窗showToast、showModal、showLoading、showActionSheet】
  //  wx.showToast
  onShowToast() {
    wx.showToast({
      title: 'title',
      icon: "success",//error|loading|none|
      duration: 1500,
      mask: true,
      success: (res) => { console.log(res); },
      fail: (err) => { console.log(err); }
    })
  }
  //  wx.showLoading
  , onShowLoading() {
    wx.showLoading({
      title: 'title',

    })
    setTimeout(() => { wx.hideLoading() }, 3000)
  }
  //  wx.showModal
  , onShowModal() {
    wx.showModal({
      title: 'title',
      content: 'content',

      complete: (res) => {
        if (res.cancel) {
          console.log("已取消");
        }
        if (res.confirm) {
          console.log('已确定');
        }
      }
    })
  }
  //  wx.showActionSheet
  , onShowActionSheet() {
    wx.showActionSheet({
      itemList: ['1', '2', '3'],
      success: (res) => {
        console.log(res);
      },
      fail: (rerr) => { console.log(rerr); }
    })
  }


  // -----------------API》 onShareAppMessage【2.分享小程序信息】
  , onShareAppMessage() {
    return {
      title: "title",
      // path: "/pages/favor/favor",
      // imageUrl: "/assets/nhlt.jpg"
    }
  }
  //    -----------API/基础/系统/wx.getSystemInfo(Object object)【3.获取设备相关信息】
  , getSystemInfo() {
    wx.getSystemInfo({
      success: (res) => {
        console.log(res);
      }
    })
  }


  //   -----------API/位置/wx.getLocation(Object object)【4.获取位置】
  , getLocation() {
    wx.getLocation({
      success: (res) => {
        console.log(res);
      }
    })
  }


  //  -----------API/数据缓存/wx.getLocation(Object object)【5.storage】
  // 同步
  , onLocalStorageSync() {
    // 1. 存键值对
    wx.setStorageSync('name', '杨磊')
    wx.setStorageSync('age', 25)
    wx.setStorageSync('a', '1秒后删除我')

    // 2. 获取
    const name = wx.getStorageSync('name')
    const age = wx.getStorageSync('age')
    console.log(name, age);
    // 3. 移除
    setTimeout(() => {
      wx.removeStorageSync('a')
    }, 1000)
    // 4.  清空
    // setTimeout(() => {
    //   wx.clearStorageSync()
    //   console.log('3秒后清空storage')
    // }, 3000)
  }


  // 异步
  , onLocalStorageAsync() {
    // 1. 对象
    wx.setStorage({
      key: "books",
      data: ["《1》", "《2》", "《3》"],
      encrypt: true,
      success: (res) => {
        console.log(res);
      }
    })
    // 2. 获取
    wx.getStorage({
      key: "books",
      encrypt: true,
      success: (res) => {
        console.log(res);
      }
    })

    // 3. 移除

    // 4.  清空

  }

})
