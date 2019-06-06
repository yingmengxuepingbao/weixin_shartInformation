// pages/informationPublishList/informationPublishList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    openid: ''
  },
  // 获取用户openid
  getOpenid: function () {
    let that = this;
    //获取openid不需要授权
    wx.login({
      success: function (res) {
        //请求自己后台获取用户openid
        wx.request({
          url: 'https://30paotui.com/user/wechat',
          data: {
            appid: 'wxabd856ad2fb9b20d',
            secret: '987a71db7b51f05fe743558a7b7e84c6',
            code: res.code
          },
          success: function (response) {
            console.log(response);
            var openid = response.data.openid;
            console.log('请求获取openid:' + openid);
            //可以把openid存到本地，方便以后调用
            wx.setStorageSync('openid', openid);
            that.setData({
              openid: "获取到的openid：" + openid
            })
          }
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
/**
    wx.request({
      url: 'http://localhost:8080/msgPushActivity/getActAuditList',
      data: {
        userInfo: {},
      },
      method: 'POST',
      header: {
        'content-type': 'application/json' // 默认值     
      },
      success: function (res) {
        console.log(res.data);

      },
      fail: function (res) {
        console.log(".....fail....." + userUrl);
      }
    })
    */
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})