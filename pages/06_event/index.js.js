// pages/06_event/index.js.js
Page({
  data: {


    // --------------------------------tab-control 相关
    title: ["手机", "电脑", "平板", "相机"],
    currentIndex: 0
  }
  // tab-control
  , itemTap(e) {
    // console.log(e.currentTarget.dataset.index);
    this.setData({
      currentIndex: e.currentTarget.dataset.index
    })
  }
  // --------------------------------tab-control 相关







  // 事件
  , onBtnTap(e) {
    console.log("onBtnTape", e);
  }

  //事件对象内部属性的区别
  , onOuterTap(e) {
    // 1)、target 和 currentTarget 区别
    // 1.target，触发事件
    // 2.currentTarget，处理事件
    console.log('onOuterTap', e);
    console.log("target", e.target);
    console.log("currentTarget", e.currentTarget);
    console.log(e.target === e.currentTarget);//false
    //3. 获取当前组件的自定义属性
    var name = e.currentTarget.dataset.name
    console.log(name);
  }
  //2)、 changedTouches 和 touches 区别
  // 1. 多指触摸 有 区别
  // 2. 事件不同，长按、点击时监听的事件不同时有区别，主要表现在手指离开会有区别
  // changedTouches保存变化触摸点信息的集合
  // touches是当前触摸点信息的集合
  , onTouchTap(e) {
    console.log("onTouchTap", e);
  },
  onLongPress(e) {
    console.log("onLongPress", e);
  }
  , onTouchend(e) {
    console.log("onTouchend", e);
  }

  // 3) 监听事件 传参
  , onArgumentsTap(e) {
    console.log("onArgumentsTap", e);
    const dataset = e.currentTarget.dataset
    const { name, age, height } = dataset
    console.log(name, age, height);
  }


  // 6.事件捕获与冒泡
  // 捕获
  , v1CaptureTap() {
    console.log("v1CaptureTap");
  }
  , v2CaptureTap() {
    console.log("v2CaptureTap");
  }
  , v3CaptureTap() {
    console.log("v3CaptureTap");
  }
  // 冒泡
  , v1Tap() {
    console.log("冒泡至v1Tap");
  }
  , v2Tap() {
    console.log("冒泡至v2Tap");
  }
  , v3Tap() {
    console.log("冒泡至v3Tap");
  }


  // 7.mark数据传递
  , onMarkTap(e) {
    console.log("onMarkTap", e);
    // console.log(e.mark);
    // 通过data-*
    const data1 = e.currentTarget.dataset
    console.log(data1);
    // 通过mark
    const data2 = e.mark
    console.log(data2);
  }
})