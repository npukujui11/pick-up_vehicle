// miniprogram/pages/search_vehicle/search_vehicle.js
const db = wx.cloud.database()
const _ = db.command
const $ = db.command.aggregate

Page({

  data: {

    indexEngine: 0,
    dataEngine: ["任意"]

  },

  onLoad: function (event) {
    //获取发动机种类
    db.collection('storage').aggregate().group({
      _id: null,
      engineType: $.addToSet('$发动机') 
    }).end().then(res => {
      //console.log(res.list[0].engineType)
      var add = res.list[0].engineType
      var target = this.data.dataEngine
      target.push(...add)
      //console.log(target)
      this.setData({
        dataEngine: target
      })
    })
  },

  bindChangeEngine: function (event) {
    //更新picker的index
    this.setData({
      indexEngine: event.detail.value
    })
  },

  onSearchButton: function (event) {
    //构造查询请求语句
    //页面跳转
  }

})