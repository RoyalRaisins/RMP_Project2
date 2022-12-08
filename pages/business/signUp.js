// pages/business/signUp.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    IterationEquality : false,
    nickname: '',
    password: '',
    passworddup: '',
    InfoValid: false
  },
  bindPassword: function (e) {
    this.setData({
      password: e.detail.value,
      IterationEquality: e.detail.value== this.data.passworddup
    })
  },
  checkEqual: function (e) {
    console.log("check")
    this.setData({
      passworddup: e.detail.value,
      IterationEquality: e.detail.value== this.data.password
    })
  },
  bindKeyInput: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  bindNickname: function (e) {
    this.setData({
      nickname: e.detail.value
    })
  },
  CheckAndCommit: function (e) {
    this.Update(e)
    if(this.data.InfoValid){
      wx.request({
        method: "POST",
        url: 'http://202.120.40.86:14642/rmp-resource-service/project/6386bd5a1c04bf0015eade90/resource/User',
        data: {
          nickname: this.data.nickname,
          password: this.data.password
        },
        success: function(res){
          console.log(res)
        }
      })
    }
  },
  Update(e) {
    this.setData({
      InfoValid: this.data.IterationEquality
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})