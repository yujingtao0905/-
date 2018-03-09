/*
* @Author: Marte
* @Date:   2018-03-08 11:28:35
* @Last Modified by:   Marte
* @Last Modified time: 2018-03-09 09:05:23
*/
const app = getApp();
Page({
    data:{
        entities:null,
        currentVid:null,
        currentVideo:null
    },
    play(event) {
        // console.log(this.data.currentVid);
        if (this.data.currentVid !== null) {
            this.data.currentVideo.pause();
        };
        const currentVideo = wx.createVideoContext(`${event.target.dataset.vid}`);
        currentVideo.play();
        this.setData({
            currentVideo,
            currentVid:event.target.dataset.vid
        })
    },
    onLoad:function(options){
        this.setData({
            entities:app.globalData.stories
        })
    },

})