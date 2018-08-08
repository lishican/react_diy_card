import * as types from "../utils/types";
import { fromJS } from "immutable";

import md5 from "blueimp-md5";
import axios from "axios";

const ACTID = "cardAct";
const IP =
  process.env.NODE_ENV === "development"
    ? "http://39.107.74.73:9019"
    : // ?  "http://192.168.0.140:8080"
      "http://39.107.74.73:9019";

const BASE_URL = `${IP}/MiService/api/card`;

// 时间活动id加密
const doMd5 = () => {
  let timestamp = new Date().valueOf();
  let str = `actId=${ACTID}&timestamp=${timestamp}`;
  let signstr = md5(str).toUpperCase();
  return {
    sig: signstr,
    timestamp: timestamp
  };
};

// 封装的post请求
export const doPost = (url, param) => {
  let sig = doMd5();
  let params = { actId: ACTID, ...sig, ...param };
  return new Promise((resolve, reject) => {
    axios({
      url: BASE_URL + url,
      method: "post",
      data: params,
      transformRequest: [
        function(data) {
          // Do whatever you want to transform the data
          let ret = "";
          for (let it in data) {
            ret +=
              encodeURIComponent(it) + "=" + encodeURIComponent(data[it]) + "&";
          }
          return ret;
        }
      ],
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    })
      .then(data => {
        resolve(data.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const updateOrderId = id => {
  return (dispatch, getState) => {
    dispatch({
      type: types.UPDATE_ORDER_ID,
      text: id
    });
  };
};

export const showError = msg => {
  return (dispatch, getState) => {
    dispatch({
      type: types.SHOW_ERROR,
      text: msg
    });
  };
};
export const hideError = () => {
  return (dispatch, getState) => {
    dispatch({
      type: types.HIDE_ERROR,
      text: ""
    });
  };
};

// 显示音乐选择
export const showMusic = () => {
  return (dispatch, getState) => {
    dispatch({
      type: types.SHOW_MUSIC_CHOSE
    });
  };
};

export const hideMusic = () => {
  return (dispatch, getState) => {
    dispatch({
      type: types.HIDE_MUSIC_CHOSE
    });
  };
};

export const fetchAudioList = param => {
  return async (dispatch, getState) => {
    try {
      let data = await doPost("/getAudioList", param);
      // 更新orderId
      console.log(data);
      if (data.code === 200) {
        dispatch({
          type: types.FETCH_MUSIC_LIST,
          text: fromJS(data.audioList)
        });

        dispatch({
          type: types.CURRENT_MUSIC,
          text: fromJS(data.detailAudio.audioUrl)
        });
        dispatch({
          type: types.SHOW_ERROR,
          text: "获取音乐列表失败"
        });
      } else {
      }
    } catch (error) {
    }
  };
};
// 获取选择的音乐
export const fetchCurrentMusic = param => {
  return async (dispatch, getState) => {
    dispatch({
      type: types.CURRENT_MUSIC,
      text: param
    });
  };
};

// 更新保存信息
export const updateUserInfo = param => {
  return async (dispatch, getState) => {
    try {
      let data = await doPost("/saveUser", param);
      if (data.code === 200) {
        dispatch({
          type: types.UPDATE_USERINFO,
          text: fromJS(data.user)
        });
        dispatch({
          type: types.FETCH_CAT_LIST,
          text: fromJS(data.cardTypeList)
        });
      } else {
      }
    } catch (error) {}
  };
};

export const fetchUserInfo = async param => {
  try {
    let doc = await doPost("/saveUser", param);
    if (doc.code == 200) {
      return doc.user;
    } else {
    }
  } catch (error) {}
};

export const checkCard = async param => {
  try {
    let doc = await doPost("/checkCard", param);
    if (doc.code == 200) {
      return doc.orderList;
    } else {
    }
  } catch (error) {}
};

// 保存上传图片
export const doSaveImg = async param => {
  try {
    let response = await doPost("/saveImg", param);
    if (response.code === 200) {
      return response.imgUrl;
    } else {
    }
  } catch (error) {}
};

// 保存编辑状态
export const doSaveEditToServe = param => {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      doPost("/saveOrder", { ...param }).then(data => {
        // 更新orderId
        if (data.code === 200) {
          resolve(data)
          dispatch({
            type: types.UPDATE_ORDER_ID,
            text: data.orderId
          });
          dispatch({
            type: "UPDATE_ORDER_ID2",
            text: data.orderDetailId
          });
        } else {
          reject('保存编辑信息失败')
        }
      });
    });
  };
};

export const fetchThemeConfigById = param => {
  return async (dispatch, getState) => {
    try {
      let res = await doPost("/getPages", { ...param });
      if (res.code == 200) {
        dispatch({
          type: types.UPDATE_ORDER_ID,
          text: param.orderId
        });
        return res.cardsInfo;
      } else {
      }
    } catch (error) {
    }
  };
};

// 获取我的贺卡
export const fetchMyCart = param => {
  return dispatch => {
    doPost("/getMyCardList", param)
      .then(data => {
        dispatch({
          type: types.FETCH_MY_CARD,
          text: fromJS(data.cardList)
        });
      })
      .catch(err => {
      });
  };
};
// 获取我收到的
export const fetchMyRecive = param => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      doPost("/getMyCardList", param)
        .then(data => {
          dispatch({
            type: types.FETCH_MY_RECIVE,
            text: fromJS(data.cardList.reverse())
          });
          resolve(data);
        })
        .catch(err => {
        });
    });
  };
};

//保存分享信息

export const doSaveCard = param => {
  return async (dispatch, getState) => {
    try {
      let doc = await doPost("/saveCardShare", param);
      if (doc.code == 200) {
        return doc;
      } else {
      }
    } catch (error) {}
    // re
  };
};

export const showEdit = param => {
  return {
    type: types.SHOW_EDIT,
    text: param
  };
};

export const hideEdit = param => {
  return {
    type: types.HIDE_EDIT,
    text: param
  };
};
export const saveEdit = param => {
  return (dispatch, getState) => {
    dispatch({
      type: types.SAVE_EDIT,
      text: fromJS(param)
    });
    // return param;
  };
};

export const saveEdit2 = param => {
  return (dispatch, getState) => {
    dispatch({
      type: types.SAVE_EDIT2,
      text: param
    });
  };
};

// 复制当前页面

export const copyPage = param => {
  return {
    type: types.COPY_PAGE,
    text: param
  };
};

export const deletePage = param => {
  return {
    type: types.DELETE_PAGE,
    text: param
  };
};
export const doCopy = param => {
  return {
    type: types.COPY_PAGE,
    text: param
  };
};
export const doDelete = param => {
  return {
    type: types.DELETE_PAGE,
    text: param
  };
};

export const doEdit = param => {
  return {
    type: types.DO_EDIT,
    text: param
  };
};
// 更新图片参数
export const doUpdateImg = param => {
  return {
    type: types.UPDATE_IMG,
    text: param
  };
};
export const showShare = param => {
  return {
    type: types.SHOW_SHARE,
    text: param
  };
};
export const hideShare = param => {
  return {
    type: types.HIDE_SHARE,
    text: param
  };
};
export const getPage = param => {
  return {
    type: types.GET_PAGE,
    text: param
  };
};
