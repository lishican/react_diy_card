import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import "./person.css";
import {doJsApi} from '../../utils/common'
class personalContainer extends React.Component {
  state = {
    name: document.getElementById("nickname").value,
    imgurl: document.getElementById("headimg").value
  };
  // 组件更新后的钩子方法
  componentDidUpdate() {}

  componentWillMount(){
    window.location.href='https://sale.jd.com/m/act/I7lpM1OuJbKtN6.html'

  }
  // 组件第一次加载的方法
  componentDidMount() {
    doJsApi()
  }

  render() {
    return (
      <div className="person_page_root">
        {/* <div className="desc">
          <img src={this.state.imgurl} alt="as" />
          <span>{this.state.name}</span>
        </div>

        <div
          className="item"
          flex="main:left cross:center box:justify"
          onClick={e => {
            window.location.href='https://apple.jd.com/'
          }}
        > 
          <img className="icon" src={require("./assets/kf.png")} alt="as" />
          <span>在线客服</span>
          <img className="aro" src={require("./assets/arrow.png")} alt="as" />
        </div>
        <div
          className="item"
          flex="main:left cross:center box:justify"
          onClick={e => {
            this.props.history.push({
              pathname: "/help"
            });
          }}
        >
          <img className="icon" src={require("./assets/help.png")} alt="as" />
          <span>帮助中心</span>
          <img className="aro" src={require("./assets/arrow.png")} alt="as" />
        </div> */}
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
  connect(mapStateToProps, mapDispatchToProps)(personalContainer)
);
