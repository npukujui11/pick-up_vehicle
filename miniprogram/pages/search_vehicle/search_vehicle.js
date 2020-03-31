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
    default_vehicle_engine: '请选择发动机',
    default_vehicle_transmission: '请选择变速器',
    default_vehicle_phase: '请选择车辆阶段',
    default_vehicle_ecusupplier: '请选择ECU供应商',
    default_vehicle_emission: '请选择排放',
    default_vehicle_configuration: '请选择配置',
    vehicle_engine: ['245T', '280T', '320T', 'B15', 'N15A', 'N15T'],
    vehicle_transmission: ['CTF25A', 'CTF25B', 'CTF25D', 'CTF28E', 'CTF35', 'Hybrid Power'],
    vehicle_phase: ['MULE', 'NS', 'OTS', 'PRO', 'S'],
    vehicle_ecusupplier: ['Conti', 'Delphi', 'UAES'],
    vehicle_emission: ['CN5', 'CN6', 'BS6'],
    vehicle_configuration: ['LV0', 'LV1', 'LV2', 'LV3', 'LV4'],
  },
  bindvehicle_engineChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    let index_vehicle_engine = e.detail.value
    let vehicle_engine = this.data.vehicle_engine
    this.setData({
      index_vehicle_engine,
      default_vehicle_engine: vehicle_engine[index_vehicle_engine]
    })
  },
  bindvehicle_transmissionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    let index_vehicle_transmission = e.detail.value
    let vehicle_transmission = this.data.vehicle_transmission
    this.setData({
      index_vehicle_transmission,
      default_vehicle_transmission: vehicle_transmission[index_vehicle_transmission]
    })
  },
  bindvehicle_phaseChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    let index_vehicle_phase = e.detail.value
    let vehicle_phase = this.data.vehicle_phase
    this.setData({
      index_vehicle_phase,
      default_vehicle_phase: vehicle_phase[index_vehicle_phase]
    })
  },
  bindvehicle_ecusupplierChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    let index_vehicle_ecusupplier = e.detail.value
    let vehicle_ecusupplier = this.data.vehicle_ecusupplier
    this.setData({
      index_vehicle_ecusupplier,
      default_vehicle_ecusupplier: vehicle_ecusupplier[index_vehicle_ecusupplier]
    })
  },
  bindvehicle_emissionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    let index_vehicle_emission = e.detail.value
    let vehicle_emission = this.data.vehicle_emission
    this.setData({
      index_vehicle_emission,
      default_vehicle_emission: vehicle_emission[index_vehicle_emission]
    })
  },
  bindvehicle_configurationChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    let index_vehicle_configuration = e.detail.value
    let vehicle_configuration = this.data.vehicle_configuration
    this.setData({
      index_vehicle_configuration,
      default_vehicle_configuration: vehicle_configuration[index_vehicle_configuration]
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