// components/cpn-lifetime/cpn-lifetime.js
Component({
  lifetimes: {
    // 组件被创建，初始化完毕
    created() {
      console.log("created组件被创建，初始化完毕");
    }
    // 组件连接到页面dom树上
    , attached() {
      console.log("attached组件连接到dom树上");
    }
    // 组件被从组件树移除
    , detached() {
      console.log("detached组件被从组件树移除");
    }
  }
})
