// pages/mainPage/mainPage.js


Page({


  data: {
    imgUrls: [
      "/pages/images/8.png",
      "/pages/images/9.png",
      "/pages/images/10.png"
    ]
  },

  onLoad: function (options) {
  
  },
  /* 这里实现控制中间凸显图片的样式 */
  handleChange: function(e) {
    this.setData({
      currentIndex: e.detail.current
    })
  },


  battlewithfriend(){
    
    wx.navigateTo({
      url: '/pages/battleOption/battlewithfriend/battlewithfriend',
    })
  }


  
})
 
