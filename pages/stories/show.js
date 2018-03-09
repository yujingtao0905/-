/*
* @Author: Marte
* @Date:   2018-03-09 09:17:55
* @Last Modified by:   Marte
* @Last Modified time: 2018-03-09 09:39:54
*/
const app = getApp();

Page({
    data:{
        entity:null
    },
    onLoad:function(options){
        const id = options.id;
        const entity = app.globalData.stories.filter((item) => {
            return item.id == id
        })
        this.setData({
            entity:entity[0]
        })
        wx.setNavigationBarTitle({
            title:this.data.entity.header
        })
    }
})