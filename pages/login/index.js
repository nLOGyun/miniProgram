// pages/login/index.js
import {userApi} from '../../api/index'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: '',
    password: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  changeInput(details) {
    let key = details?.target?.dataset?.key || ''
    if (key) {
      this.setData({
        [key]: details.detail.value
      })
    }
  },

  login() {
    console.log(123, this.data.username, this.data.password)
    const {username, password} = this.data
    if (!this.data.username || !this.data.password) {
      wx.showToast({
        title: '请输入用户名密码!',
        icon: 'none'
      })
      return
    }
    userApi.login({
      username,
      password
    })
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