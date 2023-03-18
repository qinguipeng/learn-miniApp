
// 1. 封装成函数,返回一个promise
export function gpRequest(options) {
  return new Promise((resolve, reject) => {
    wx.request({
      ...options,
      success: (res) => {
        resolve(res.data)
      },
      fail: (err) => {
        reject(err)
      }
    })
  })
}



// 封装成一个类 ==>实例
// 有点难
class GPRequest {
  constructor(baseURL) {
    this.baseURL = baseURL
  }
  request(options) {
    const { url } = options
    return new Promise((resolve, reject) => [
      wx.request({
        ...options,
        url: this.baseURL + url,
        success: (res) => { resolve(res.data) },
        fail: reject
      })
    ])
  }
  get(options) {
    return this.request({ ...options, method: 'get' })
  }
  post(options) {
    return this.request({ ...options, method: "post" })
  }
}
export const GPrequestCity = new GPRequest("http://codercba.com:1888/api")
export const GPrequestHouse = new GPRequest("http://codercba.com:1888/api")
export const gpLoginRequset = new GPRequest("http://123.207.32.32:3000")


