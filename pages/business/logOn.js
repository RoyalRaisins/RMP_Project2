// pages/business/logOn.js


Page({

  /**
   * 页面的初始数据
   */
  data: {
    nickname: '',
    password: ''
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
  bindNickname: function (e) {
    this.setData({
      nickname: e.detail.value
    })
  },
  CallBack: function(){
    var that = this;
    this.CheckAndCommit(function(res){
      console.log(that.data.password)
      if (res.data.data.length == 0){
        wx.showModal({
          title: '错误',
          content: '不存在的用户名',
          complete: (res) => {
            if (res.cancel) {
              
            }
        
            if (res.confirm) {
              
            }
          }
        })
      }
      else if(res.data.data[0].password == that.data.password){
        console.log("success")
        return true;
      }
      else {
        console.log(res.data.data[0].password)
        console.log(check)
        wx.showModal({
          title: '错误',
          content: '密码错误',
          complete: (res) => {
            if (res.cancel) {
              
            }
        
            if (res.confirm) {
              
            }
          }
        })

      }
    })
  },
  CheckAndCommit: function (checkPassword) {
      wx.request({
        method: "GET",
        url: 'http://202.120.40.86:14642/rmp-resource-service/project/6386bd5a1c04bf0015eade90/resource/User/?User.nickname='+this.data.nickname,
        success: function(res){
          if(checkPassword(res)){
            wx.navigateTo({
              url: '../business/mainPage'
            })
          }

        }
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