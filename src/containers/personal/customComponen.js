import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {doJsApi} from '../../utils/common'
class customComponent extends React.Component {
  // 组件更新后的钩子方法
  componentDidUpdate() {}
  // 组件第一次加载的方法
  componentDidMount() {
    doJsApi()
  }

  render() {
    return  <div style={{ padding: ".4rem",textIndent:'2em' }}>
   冰冷与黑暗并存的宇宙深处，九具庞大的龙尸拉着一口青铜古棺，亘古长存。
   这是太空探测器在枯寂的宇宙中捕捉到的一幅极其震撼的画面。
   九龙拉棺，究竟是回到了上古，还是来到了星空的彼岸？
   一个浩大的仙侠世界，光怪陆离，神秘无尽。热血似火山沸腾，激情若瀚海汹涌，欲望如深渊无止境。
   登天路，踏歌行，弹指遮天。
  </div>;
  }
}

const mapStateToProps = state => {
  return {
    aaaa: state.getIn(["global", "animateCls"])
  };
};

//将action的所有方法绑定到props上
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    // actions: bindActionCreators({ ...editAction }, dispatch)
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(customComponent)
);
