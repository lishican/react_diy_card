import * as types from "../utils/types";
import { Map, List } from "immutable";
let initEdit = Map({
  // 是否显示编辑框
  showEdit: false,

  // 编辑框的输入值
  value: "",

  // 页面的排序id
  pageId: "",

  // 页面的位置id
  site: "",

  // 页面的类型
  pageType: "",

  // 当前页面排序id
  currentPage: 1,

  // 编辑模板的id
  orderId: "",

  // 是否在编辑状态
  doEdit: false,

  // 音乐
  showMusic: false,
  musicList: List(),
  currentMusic: Map({}),

  // 是否显示分享
  showShare: false,
  showError: Map({
    show: false,
    msg: ""
  }),

  // 编辑的主题文件
  themeConfig: Map({}),

  // 用户信息
  userinfo: Map({}),
  // 我的贺卡
  cardlist: List(),
  recivelist: List(),
  cateList: List()
});

export function edit(state = initEdit, action) {
  switch (action.type) {
    case types.SHOW_EDIT:
      return state
        .set("showEdit", true)
        .set("value", action.text.value)
        .set("site", action.text.site)
        .set("pageId", action.text.pageId)
        .set("pageType", action.text.pageType);
    case types.UPDATE_IMG:
      return state
        .set("showEdit", false)
        .set("value", action.text.value)
        .set("site", action.text.site)
        .set("pageId", action.text.pageId)
        .set("pageType", action.text.pageType);
    case types.HIDE_EDIT:
      return state.set("showEdit", false).set("value", "");
    case types.GET_PAGE:
      return state.set("currentPage", action.text);

    // 音乐部分的
    case types.SHOW_MUSIC_CHOSE:
      return state.set("showMusic", true);
    case types.HIDE_MUSIC_CHOSE:
      return state.set("showMusic", false);
    case types.FETCH_MUSIC_LIST:
      return state.set("musicList", action.text);
    case types.CURRENT_MUSIC:
      return state.set("currentMusic", action.text);

    case types.SHOW_SHARE:
      return state.set("showShare", true);

    // 显示错误部分
    case types.SHOW_ERROR:
      return state.setIn(["showError",'show'], false).setIn(["showError",'msg'], action.text);
    case types.HIDE_ERROR:
      return state.setIn(["showError",'show'], false);

    case types.FETCH_CAT_LIST:
      return state.set("cateList", action.text);
    case types.HIDE_SHARE:
      return state.set("showShare", false);
    case types.UPDATE_USERINFO:
      return state.set("userinfo", action.text);
    case types.SAVE_EDIT:
      return state.set("themeConfig", action.text);
    case types.FETCH_MY_CARD:
      return state.set("cardlist", action.text);
    case types.FETCH_MY_RECIVE:
      return state.set("recivelist", action.text);
    case types.UPDATE_ORDER_ID:
      return state.set("orderId", action.text);
    case types.DO_EDIT:
      return state.set("doEdit", action.text);
    case types.COPY_PAGE:
      let clonePage = state.getIn(["themeConfig", "pages", action.text]);
      let newState = state.updateIn(["themeConfig", "pages"], v => {
        return v.insert(action.text, clonePage);
      });
      return newState;
    case types.DELETE_PAGE:
      let len = state.getIn(["themeConfig", "pages"]).size;

      if (len <= 1) {
        return state;
      } else {
        let newState3 = state.updateIn(["themeConfig", "pages"], v => {
          return v.deleteIn([action.text]);
        });
        return newState3;
      }

    case types.SAVE_EDIT2:


      console.log( action.text)


      let newState2 = state.updateIn(
        [
          "themeConfig",
          "pages",
          action.text.pageId,
          action.text.pageType,
          action.text.site
        ],
        val => {
          return val.set("value", action.text.value);
        }
      );
      return newState2.set("showEdit", false).set("value", "");
    default:
      return state;
  }
}
