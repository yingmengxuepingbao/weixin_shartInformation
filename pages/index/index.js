//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    text: "信息发布列表"
  },
  onReachBottom: function () {
    this.data.pageNum++;
    //this.requestData();
    console.log("刷新")
  },
  onPullDownRefresh: function () {
    this.data.pageNum = 1;
    //this.requestData();
    console.log("上啦")
  },
  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    color: "#D0021B",
    imgUrls: ['../../image/lunbo/1.jpg',
     '../../image/lunbo/2.jpg',
     '../../image/lunbo/3.jpg'],
    link: '/pages/informationPublishList/informationPublishList',
    pageNum: 0,
    listData: [],
    imageUrl: [],
  },
  //点击轮播图
  swiperTap: function (even) {
    wx.navigateTo({
      url: '../informationPublishList/informationPublishList'
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
   /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
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

//获取活动列表页
  getList:function () {
    wx.navigateTo({
      url: '../informationPublishList/informationPublishList'
    })
  },

  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
});

