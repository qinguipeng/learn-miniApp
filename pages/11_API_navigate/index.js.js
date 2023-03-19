// pages/11_API_navigate/index.js.js
Page({
	data: {
		name: "夏明朗",
		age: 29,
		message: 'LLLLLL',
		person: {}
	}
	, onNavTap() {
		const { name, age } = this.data
		// 1.  wx.navigateTo  query传参
		wx.navigateTo({
			url: `/pages2/detail/detail?name=${name}&age=${age}`,
			//2. 页面间通信接口 events 用于监听被打开页面发送到当前页面的数据
			events: {
				backEvent(data) {
					console.log(data);
				},
				backEvent2(data2) {
					console.log(data2);
				},
				backEvent3(a) {
					console.log(a);
				}
			},
			success: (res) => {
				console.log("成功跳转", res);
			}
		})
	}

})