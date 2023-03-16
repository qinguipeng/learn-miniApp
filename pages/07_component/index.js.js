// pages/07_component/index.js.js
Page({
  data: {
    digitalTitle: ['phone', 'PC', 'ipad', 'camera']
  },
  onSectionTitleClick(e) {
    console.log("区域title发生了点击", e, e.detail);

  }

  , onTapIndexChange(e) {
    console.log('tab-control索引改变', e.detail);
    const index = e.detail
    console.log('点击了：', this.data.digitalTitle[index]);
  }

  // 页面使用组件内的方法，类似于Vue中的ref
  , onTC() {
    // console.log(111);
    //1. 获取组件实例对象
    const tabControl = this.selectComponent('.tab-control')
    // 2.调用组件实例里面的方法
    tabControl.test()
  }
})