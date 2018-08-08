import axios from "axios";

export const doJsApi = () => {
  axios
    .post("http://liwu.kiis.cn/wx/jsapi", { signurl: window.location.href })
    .then(data => {
      window.wx.config({
        // debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: data.data.appId, // 必填，公众号的唯一标识
        timestamp: data.data.timestamp, // 必填，生成签名的时间戳
        nonceStr: data.data.nonceStr, // 必填，生成签名的随机串
        signature: data.data.signature, // 必填，签名，见附录1
        jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage"]
      });
    });
};

export const checkIsWatch = () => {
  return axios.post("http://liwu.kiis.cn/wx/checkIsWatch", {
    openId: document.getElementById("openid").value
  });
};
