// miniprogram/pages/search_vehicle/search_vehicle.js
const db = wx.cloud.database()
const _ = db.command
const $ = db.command.aggregate
const type = {
  engine: 0,
  transmission: 1,
  phase: 2,
  ecusupplier: 3,
  emission: 4,
  configuration: 5
}

Page({

  data: {

    indexEngine: 0,
    typeEngine: ["任意"],
    indexTransmission: 0,
    typeTransmission: ["任意"],
    indexPhase: 0,
    typePhase: ["任意"],
    indexEcusupplier: 0,
    typeEcusupplier: ["任意"],
    indexEmission: 0,
    typeEmission: ["任意"],
    indexConfiguration: 0,
    typeConfiguration: ["任意"]
  },

  onLoad: function (event) {

    //辅助函数
    function mergeArray(target, add) {
      target.push(...add)
      return target
    }

    db.collection('storage').aggregate().group({
      //去重
      _id: null,
      typeEngine: $.addToSet('$发动机'),
      typeTransmission: $.addToSet('$变速器'),
      typePhase: $.addToSet('$车辆阶段'),
      typeEcusupplier: $.addToSet('$ECU供应商'),
      typeEmission: $.addToSet('$排放'),
      typeConfiguration: $.addToSet('$配置')
    }).end().then(res => {
      //console.log(res)
      //更新数据
      this.setData({
        typeEngine: mergeArray(this.data.typeEngine, res.list[0].typeEngine),
        typeTransmission: mergeArray(this.data.typeTransmission, res.list[0].typeTransmission),
        typePhase: mergeArray(this.data.typePhase, res.list[0].typePhase),
        typeEcusupplier: mergeArray(this.data.typeEcusupplier, res.list[0].typeEcusupplier),
        typeEmission: mergeArray(this.data.typeEmission, res.list[0].typeEmission),
        typeConfiguration: mergeArray(this.data.typeConfiguration, res.list[0].typeConfiguration)
      })
    })
  },

  bindChangeEngine: function (event) {
    this.setData({
      indexEngine: event.detail.value
    })
  },

  bindChangeTransmission: function (event) {
    this.setData({
      indexTransmission: event.detail.value
    })
  },

  bindChangePhase: function (event) {
    this.setData({
      indexPhase: event.detail.value
    })
  },

  bindChangeEcusupplier: function (event) {
    this.setData({
      indexEcusupplier: event.detail.value
    })
  },

  bindChangeEmission: function (event) {
    this.setData({
      indexEmission: event.detail.value
    })
  },

  bindChangeConfiguration: function (event) {
    this.setData({
      indexConfiguration: event.detail.value
    })
  },


  formSubmit: function (event) {
    //判断表单是否有改动
    if (this.data.indexConfiguration + this.data.indexEcusupplier + this.data.indexEmission + this.data.indexEngine + this.data.indexPhase + this.data.indexTransmission == 0) {
      console.log("未选择，报错")
    } else {
      //console.log(event.detail.value)
      //构造查询请求语句
      //动态构造where查询条件
      var whereCondition = {}
      if (this.data.indexConfiguration != 0) {
        whereCondition.配置 = this.data.typeConfiguration[this.data.indexConfiguration]
      }
      if (this.data.indexEcusupplier != 0) {
        whereCondition.ECU供应商 = this.data.typeEcusupplier[this.data.indexEcusupplier]
      }
      if (this.data.indexEmission != 0) {
        whereCondition.排放 = this.data.typeEmission[this.data.indexEmission]
      }
      if (this.data.indexEngine != 0) {
        whereCondition.发动机 = this.data.typeEngine[this.data.indexEngine]
      }
      if (this.data.indexPhase != 0) {
        whereCondition.车辆阶段 = this.data.typePhase[this.data.indexPhase]
      }
      if (this.data.indexTransmission != 0) {
        whereCondition.变速器 = this.data.typeTransmission[this.data.indexTransmission]
      }
      //console.log(whereCondition)
      db.collection('storage').where(whereCondition).get().then(res => {
        console.log('[数据库] [查询记录]:', res)
      }).catch(res => {
        console.log("报错")
        console.log(res)
      })

    }
  },
    //页面跳转

  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  }

})