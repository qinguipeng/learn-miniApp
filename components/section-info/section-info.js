// components/section-info/section-info.js
Component({
  properties: {
    title: {
      type: String,
      value: "默认标题"
    }
    , content: {
      type: String,
      value: '默认内容'
    }
  }
  , externalClasses: ['info']

  // 
  , methods: {
    onTitleTap() {
      console.log("某个组件的Title被点击了");
      // 组件内 向 页面 发射 事件，类似Vue的$emit
      // console.log(this);
      this.triggerEvent('titleclick', "aaa")
    }
  }
})
