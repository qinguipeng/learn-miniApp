import { getCode } from "../../service/login";
import { gpLoginRequset } from "../../service/index"

// pages/12_login/index.js.js
Page({
  // 登录
  async onLoad(options) {
    // 1. 判断storage是否有loginToken,
    const loginToken = wx.getStorageSync('loginToken') || ""
    // 并且保证loginToken没有过期
    const res = await gpLoginRequset.post({
      url: "/auth",
      header: { loginToken }
    })

    // 2. 判断是否有值，如果有值就可以获取其他数据，没有才携带code，获取loginToken,再获取其他数据
    if (loginToken) {
      console.log('已经有token，可携带获取其他数据');
    } else { this.handleLogin() }

  },
  async handleLogin() {
    // 1.获取code
    const code = await getCode()
    // 2. code换取token
    const res = await gpLoginRequset.post({
      url: "/login",
      data: { code },
    })
    // console.log(res);
    // 3. 保存 token 
    wx.setStorageSync('loginToken', res.token)
  }

  // ********请求 里面 套 请求，形成回调地狱
  // handleLogin() {
  //   // 1. 获取code
  //   wx.login({
  //     success: (res) => {
  //       const code = res.code

  //       // 2. 将携带appid、appsecret(小程序后台获取)+code发请求获取openid,session_key
  //       // 2.1 携带code换取token
  //       wx.request({
  //         url: 'http://123.207.32.32:3000/login',
  //         data: { code },
  //         method: "POST",
  //         success: (res) => {
  //           const token = res.data.token
  //           wx.setStorageSync('loginToken', token)
  //         }
  //       })
  //     },
  //   })
  // }

})