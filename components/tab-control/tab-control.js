// components/tab-control/tab-control.js
Component({
  //接受外部传入
  properties: {
    titles: {
      type: Array
      , value: []
    }
  },
  // 定义在组件内部的，固有的
  data: {
    currentIndex: 0
  },
  // options,选择特性
  options: {
    // 样式隔离相关 默认隔离：isolated
    styleIsolation: "isolated"
    // 是否开启多个插槽，默认关闭：false
    , multipleSlot: false
  }




  , methods: {
    itemTap(e) {
      // console.log(e.currentTarget.dataset.index);
      const currentIndex = e.currentTarget.dataset.index
      this.setData({
        currentIndex
      })
      // 自定义事件
      this.triggerEvent('indexchange', currentIndex)
    }
    , test() {
      console.log(' tab-control 的test方法执行');
    }
  }
})
