// miniprogram/pages/search_vehicle/search_vehicle.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index_vehicle_engine: 0,
    index_vehicle_transmission: 0,
    index_vehicle_phase: 0,
    index_vehicle_ecusupplier: 0,
    index_vehicle_emission: 0,
    index_vehicle_configuration: 0,
    vehicle_engine: ['245T', '280T', '320T', 'B15', 'N15A', 'N15T'],
    vehicle_transmission: ['CTF25A', 'CTF25B', 'CTF25D', 'CTF28E', 'CTF35', 'Hybrid Power'],
    vehicle_phase: ['MULE', 'NS', 'OTS', 'PRO', 'S'],
    vehicle_ecusupplier: ['Conti', 'Delphi', 'UAES'],
    vehicle_emission: ['CN5', 'CN6', 'BS6'],
    vehicle_configuration: ['LV0', 'LV1', 'LV2', 'LV3', 'LV4'],
  },
  bindvehicle_engineChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index_vehicle_engine: e.detail.value
    })
  },
  bindvehicle_transmissionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index_vehicle_transmission: e.detail.value
    })
  },
  bindvehicle_phaseChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index_vehicle_phase: e.detail.value
    })
  },
  bindvehicle_ecusupplierChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index_vehicle_ecusupplier: e.detail.value
    })
  },
  bindvehicle_emissionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index_vehicle_emission: e.detail.value
    })
  },
  bindvehicle_configurationChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index_vehicle_configuration: e.detail.value
    })
  },
  bindMultiPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      multiIndex: e.detail.value
    })
  },
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  bindTimeChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      time: e.detail.value
    })
  },
  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  }
})