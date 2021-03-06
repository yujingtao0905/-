/*
* @Author: Marte
* @Date:   2018-03-08 15:07:13
* @Last Modified by:   Marte
* @Last Modified time: 2018-03-08 17:54:13
*/

import testDrive from "../../modules/test-drive";

const  app =getApp();

Page({
    data:{
        entity:null,
    },
    testDrive,
    preview(event){
        const slidesName = event.target.dataset.slides;
        const index = event.target.dataset.index;
        const slides = this.data.entity.meta[slidesName];
        const images = [];
        slides.map((item) => {
            images.push(item.image)
        });
        wx.previewImage({
            urls: images,
            current: images[index]
        })

    },
    onLoad:function(options){
        const id = options.id;
        const entity = app.globalData.vehicles.filter((item) => {
            return item.id == id
        })
        this.setData({
            entity:entity[0]
        })
        wx.setNavigationBarTitle({
            title:this.data.entity.header
        })
    },


})