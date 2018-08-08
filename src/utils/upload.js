import uuid from "uuid";
import axios from "axios";
import EXIF from "exif-js";
export const uploadFile = async (file, q = 0.3, typea) => {
  // 获取上传token
  let tokenres = await axios.post(
    "http://liwu.kiis.cn/h5/getUploadToekn"
  );
  let token = tokenres.data.uptoken;
  let f = new FormData();
  let ramdomName = uuid() + "." + typea;
  // let fileCompressObj = file;
  // let fileBase64 = await photoCompress(file, {
  //   quality: q
  // });
  let flilBlob = convertBase64UrlToBlob(file);

  f.append("file", flilBlob);
  f.append("token", token);
  f.append("key", ramdomName);


  let upres = await axios.post("http://up-z2.qiniu.com/", f, {
    headers: { "Content-Type": "multipart/form-data" }
  });
  let path =
    "http://qn.kiis.cn/" + upres.data.key
  let url = await preloadImage(path);
  return url;
};

export const preloadImage = url => {
  return new Promise((resolve, reject) => {
    let img = new Image();
    img.src = url;
    img.onload = function() {
      resolve(url);
    };
  });
};
export const photoCompress = (file, w) => {
  return new Promise((resolve, reject) => {
    let ready = new FileReader();
    /*开始读取指定的Blob对象或File对象中的内容. 当读取操作完成时,readyState属性的值会成为DONE,如果设置了onloadend事件处理程序,则调用之.同时,result属性中将包含一个data: URL格式的字符串以表示所读取文件的内容.*/
    ready.readAsDataURL(file);
    ready.onload = async function() {
      let re = this.result;
      let base64 = await canvasDataURL(re, w);
      resolve(base64);
    };
  });
};

// 获取旋转方向
export const getOri = file => {
  return new Promise((resolve, reject) => {
    EXIF.getData(file, function() {
      var Orientation = EXIF.getTag(this, "Orientation");
      let rotate = 0;
      switch (Orientation) {
        case 6: // 旋转90度
          rotate = 90;
          break;
        case 3: // 旋转180度
          rotate = 180;
          break;
        case 8: // 旋转-90度
          rotate = 270;
          break;
        default:
      }
      resolve(rotate);
    });
  });
};

// 压缩核心算法
export const canvasDataURL = (path, obj, Orientation) => {
  return new Promise((resolve, reject) => {
    let img = new Image();
    img.src = path;
    img.onload = function() {
      let that = this;
      // 默认按比例压缩
      let w = that.width,
        h = that.height,
        scale = w / h;
      w = obj.width || w;
      h = obj.height || w / scale;
      let quality = 0.7; // 默认图片质量为0.7
      //生成canvas
      let canvas = document.createElement("canvas");
      let ctx = canvas.getContext("2d");
      // 创建属性节点
      let anw = document.createAttribute("width");
      anw.nodeValue = w;
      let anh = document.createAttribute("height");
      anh.nodeValue = h;
      canvas.setAttributeNode(anw);
      canvas.setAttributeNode(anh);

      ctx.drawImage(that, 0, 0, w, h);
      // 图像质量
      if (obj.quality && obj.quality <= 1 && obj.quality > 0) {
        quality = obj.quality;
      }
      // quality值越小，所绘制出的图像越模糊
      let base64 = canvas.toDataURL("image/jpeg", quality);
      // 回调函数返回base64的值
      resolve(base64);
    };
  });
};

export const convertBase64UrlToBlob = urlData => {
  let arr = urlData.split(","),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], { type: mime });
};
