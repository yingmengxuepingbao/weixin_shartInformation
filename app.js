//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        // ------ 获取凭证 ------
        var code = res.code;//返回code
        console.log('获取用户登录凭证：' + code);
        if (code ) {
          var appId = 'wxabd856ad2fb9b20d';
          var secret = '7d58aee4f9345887c336bdff1806cffe';
          wx.request({
            url: 'https://api.weixin.qq.com/sns/jscode2session?appid=' + appId + '&secret=' + secret + '&js_code=' + code + '&grant_type=authorization_code',
            data: {},
            header: {
              'content-type': 'json'
            },
            success: function (res) {
              if (res.statusCode == 200) {
                console.log(res.statusCode);
                 console.log("获取到的openid为：" + res.data)
                var openid = res.data.openid //返回openid
                console.log("openid = " + openid)
                // that.globalData.openid = res.data
                wx.setStorageSync('openid', res.data)
                console.log("调用方法" + JSON.stringify(res.data))
              } else {
                console.log(res.errMsg)
              }
            }
          })
        } else {
          console.log('获取用户登录失败：' + res.errMsg);
        }
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  }
})