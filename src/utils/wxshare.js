/**
 *
 * @param {link分享连接 imgurl desc title ,cb} params
 */

const wx = window.wx;
const dataSDK = window.dataSDK;
export const wxShare = (params, cb) => {
  console.log(params.link)
  // cb && cb();
  if (typeof wx !== "undefined" || typeof wx !== "undefined") {
    wx.ready(function() {
      wx.onMenuShareAppMessage({
        title: params.title, // 分享标题
        desc: params.desc, // 分享描述
        link: params.link, // 分享链接
        imgUrl: params.imgurl, // 分享图标
        type: "", // 分享类型,music、video或link，不填默认为link
        dataUrl: "", // 如果type是music或video，则要提供数据链接，默认为空
        success: function() {
          dataSDK.share('timeline');
          cb && cb();
          // dataSDK.share('friend');
          // 用户确认分享后执行的回调函数
        },
        cancel: function() {
          // 用户取消分享后执行的回调函数
        }
      });
      wx.onMenuShareTimeline({
        title: params.title, // 分享标题
        desc: params.desc, // 分享描述
        link: params.link, // 分享链接
        imgUrl: params.imgurl, // 分享图标
        success: function() {
          dataSDK.share('timeline');
          cb && cb();
        },
        cancel: function() {}
      });
    });
  }
};
