//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imglist:[],
    list:[1,2,3]
  },
 
  //事件处理函数
  bindViewTap: function() {
    wx.request({
      url: 'http://localhost:3500/imglist',
      method:"GET",
      success:(res)=>{
        console.log(res.data.data)
        var rows =res.data.data;
        console.log(rows)
        this.setData({
          imglist:rows
        })
      }
    })
    console.log(this.data.imglist)
  },
  onLoad: function (options) {
    this.bindViewTap()
    console.log(this.data.list)
  },
  getUserInfo: function() {  
  }
})
