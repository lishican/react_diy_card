import * as types from "../utils/types";
import { Map } from "immutable";
let initCommon = Map({
  showSidebar: false,

});

export function common(state = initCommon, action) {
  switch (action.type) {
    case types.SHOW_SIDEBAR:
      return state.set("showSidebar", true);
    default:
      return state;
  }
}
