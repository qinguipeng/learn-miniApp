// pages2/detail/detail.js
Page({
	data: {
		name: '',
		age: 0,
		a: "我是a的值"
	}
	// 1. 获取跳转传过来的参数
	, onLoad(options) {
		// console.log(options);
		const { name, age } = options
		this.setData({
			name, age
		})
	}

	// 2. 返回 wx.navigateBack(Object object) /delta 可设置返回多层
	, onNavBack() {
		wx.navigateBack({
			delta: 1
			, success: (res) => {
				// console.log(res);
			}
		})

		// // 2.1 给上一级页面传递数据
		// // 2.1.1 获取pages栈中，上一个页面的实例 getCurrentPages(),全局可调用
		// const pages = getCurrentPages()
		// //2.1.1.1 获取上一个页面的 实例对象
		// const prePage = pages[pages.length - 2]
		// console.log(pages);
		// //2.1.1.2 修改数据
		// prePage.setData({ message: "ZZZZ" })


		// 2.1.2 回调events的函数
		// 2.1.2.1 拿到eventChannel事件通道 对象  ,有点像Vue的$bus
		const eventChannel = this.getOpenerEventChannel()//$bus
		// 2.1.2.2 通过这个eventChannel事件通道 对象发射（emit）事件回调
		eventChannel.emit("backEvent", { name: '陈默', age: 28 })
		eventChannel.emit("backEvent2", { name: '陆臻', age: 25 })
		// console.log(this.data.a);
		eventChannel.emit("backEvent3", this.data.a)
	}
	, onUnload() {//不管点击哪个返回都能传递数据
		// 2.1 给上一级页面传递数据
		// 2.1.1 获取pages栈中，上一个页面的实例 getCurrentPages(),全局可调用
		const pages = getCurrentPages()
		// 2.1.1.1获取上一个页面的实例
		const prePage = pages[pages.length - 2]
		// console.log(pages);
		//2.1.1.2 修改数据
		prePage.setData({ message: "ZZZZ" })
	}



})