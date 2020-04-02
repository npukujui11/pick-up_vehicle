//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        env: 'vehicleborrow-l5fln',
        traceUser: true,
      })
    }

    this.globalData = {}
  }
})
