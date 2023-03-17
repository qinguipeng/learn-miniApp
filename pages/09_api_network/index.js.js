// pages/09_api/index.js.js
import { gpRequest, GPrequestCity, GPrequestHouse } from "../../service/index"

Page({
  data: {
    allCities: {},
    houseList: [],
    currentPage: 1
  },

  onLoad(options) {
    //1.  网络请求基本使用
    // 请求城市列表**********************
    // wx.request({
    //   url: "http://codercba.com:1888/api/city/all",
    //   success: (res) => {
    //     this.setData({
    //       allCities: res.data.data
    //     })
    //   },
    //   fail: (err) => {
    //     console.log(err);
    //   }
    // })

    //2.  promise二次封装
    // gpRequest({
    //   url: "http://codercba.com:1888/api/city/all",
    // }).then(res => {
    //   this.setData({
    //     allCities: res.data
    //   })
    // })

    // 3. Promise语法糖 async... await   缺点：性能不高
    // const cityRes = await gpRequest({
    //   url: "http://codercba.com:1888/api/city/all",
    // })
    // this.setData({
    //   allCities: cityRes.data
    // })



    // 请求房间列表**********************
    // wx.request({
    //   url: 'http://codercba.com:1888/api/home/houselist',
    //   data: {
    //     page: 1
    //   },
    //   success: (res) => {
    //     this.setData({
    //       houseList: res.data.data
    //     })
    //   },
    //   fail: (err) => { throw err }
    // })

    //2.  promise二次封装
    // gpRequest({
    //   url: 'http://codercba.com:1888/api/home/houselist',
    //   data: {
    //     page: 1
    //   },
    // }).then(res => {
    //   this.setData({
    //     houseList: res.data
    //   })
    // })

    // 3. Promise语法糖 async... await    缺点：性能不高，需要完成第一个await才能执行下一行，解决方法：将请求方法放到生命周期外面，在生命周期内调用
    // const houseRes = await gpRequest({
    //   url: "http://codercba.com:1888/api/home/houselist",
    //   data: { page: 1 }
    // })
    // this.setData({
    //   houseList: houseRes.data
    // })

    // 4. 将请求方法放到生命周期外，在生命周期内调用
    this.getCityData()
    this.getHouseData()

    // 5. 使用封装的类
    GPrequestCity.get({
      url: "/city/all"
    }).then((res) => {
      console.log(res);
    }).catch((err) => {
      throw err
    })

    GPrequestHouse.get({
      url: "/home/houselist",
      data: { page: 1 }
    }).then(res => {
      console.log(res);
    }).catch((err) => {
      throw err
    })
  },

  // 请求城市信息
  async getCityData() {
    const cityRes = await gpRequest({
      url: "http://codercba.com:1888/api/city/all",
    })
    this.setData({
      allCities: cityRes.data
    })
  },

  // 请求房间信息
  async getHouseData() {
    const houseRes = await gpRequest({
      url: "http://codercba.com:1888/api/home/houselist",
      data: { page: this.data.currentPage },
    })
    this.setData({
      houseList: [...this.data.houseList, ...houseRes.data]
    })
    this.data.currentPage++  //不需要将page展示，所以不需要setData()
  }
  // 监听达到底部
  , onReachBottom() {
    this.getHouseData()
    console.log(this.data.currentPage);
  }
})