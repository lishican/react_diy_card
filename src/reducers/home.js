import { Map, List } from "immutable";
import * as types from "../utils/types";
// 初始化状态
let initDeivce = Map({
  data: Map({
    apOnLineTotal: 0,
    checkInPeop: 0,
    onLinePeop: 0,
    apTotal: 0
  }),
  today: Map({
    nowOnLinePeop: 0,
    prevOnLinePeop: 0,
    chkInRate: 0,
    statisDate: 0,
    prevNetSucc: 0,
    netSucc: 0,
    prevChkInRate: 0,
    lineDatas: Map({
      yestdayDatas: List(),
      todayDatas: List(),
      days: List()
    })
  }),
  area: Map({}),
  service: Map({}),
  history: Map({})
});

export function home(state = initDeivce, action) {
  switch (action.type) {
    case types.FETCH_DEVICE:
      return state.setIn(["data"], action.text);
    case types.FETCH_TODAY:
      return state.setIn(["today"], action.text);
    case types.FETCH_AREA:
      return state.setIn(["area"], action.text);
    case types.FETCH_SETVICE:
      return state.setIn(["service"], action.text);
    case types.FETCH_HISTORY:
      return state.setIn(["history"], action.text);
    default:
      return state;
  }
}
