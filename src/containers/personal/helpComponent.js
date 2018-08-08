import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {doJsApi} from '../../utils/common'
class helpComponent extends React.Component {
  // 组件更新后的钩子方法
  componentDidUpdate() {}
  // 组件第一次加载的方法
  componentDidMount() {
    doJsApi()
  }

  render() {
    return (
      <div style={{ padding: ".4rem",textIndent:'2em' }}>
        这里是属于斗气的世界，没有花俏艳丽的魔法，有的，仅仅是繁衍到巅峰
        斗破苍穹全套书籍 斗破苍穹全套书籍(2张) 的斗气！
        萧炎，主人公，萧家历史上空前绝后的斗气修炼天才。4岁就开始修炼斗之气，10岁拥有了九段斗之气，11岁突破十段斗之气，一跃成为家族百年来最年轻的斗者。然而在12岁那年，他却“丧失”了修炼能力，只拥有三段斗之气。整整三年时间，家族冷落，旁人轻视，被未婚妻退婚……种种打击接踵而至。
        就在他即将绝望的时候，一缕灵魂从他手上的戒指里浮现，一扇全新的大门在面前开启！萧炎重新成为家族年轻一辈中的佼佼者，受到众人的仰慕，他却不满足于此。为了一雪退婚带来的耻辱，萧炎来到了魔兽山脉，在药老的帮助下，为了进一步提升自己的修为，在魔兽山脉，他结识了小医仙，云芝（云岚宗宗主云韵）等人，他发现自己面向的世界更加宽广了。
        三十年河东，三十年河西，莫欺少年穷！
        年仅15岁的萧家废物，于此地，立下了誓言，从今以后便一步步走向斗气大陆巅峰！
        经历了一系列的磨练，收异火，寻宝物，炼丹药，斗魂族。
        最终成为斗帝，前往大千世界....
      </div>
    );
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
  connect(mapStateToProps, mapDispatchToProps)(helpComponent)
);
