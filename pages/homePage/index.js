// pages/homePage/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text: 'wqaaaaa',
    list: [{
      id: 0,
      text: '敲敲木鱼？'
    }, {
      id: 1,
      text: '试试运气刮刮乐？'
    }, {
      id: 2,
      text: '刷刷头条？'
    }],
    selected: null
  },

  randomFunc() {
    let index = Math.round(Math.random() * 2);
    this.setData({
      selected: index,
      text: this.data.list[index].text
    })
  },

  goPage() {
    let url = '/pages/guaguale/index'
    switch (this.data.selected) {
      case 0:
        url = '/pages/muyu/index'
        break;
      case 1:
        url = '/pages/guaguale/index'
        break;
      case 2:
        url = '/pages/toutiao/index'
        break;
    }
    wx.navigateTo({
      url
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