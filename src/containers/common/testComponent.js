import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
class NameComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    
    };
  }
  // 组件更新后的钩子方法
  componentDidUpdate() {}
  // 组件第一次加载的方法
  componentDidMount() {}

  render() {
    return <div>
      这是组件
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
  connect(mapStateToProps, mapDispatchToProps)(NameComponent)
);
