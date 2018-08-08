import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import "./scss/navabar.css";
class navbarComponent extends React.Component {
  // 组件更新后的钩子方法
  componentDidUpdate() {}
  // 组件第一次加载的方法
  componentDidMount() {}

  render() {
    return (
      <div className="navbar_com_root">
        <NavLink to="/main/" exact className="item" activeClassName="active">
          {(this.props.location.pathname === "/main/"||this.props.location.pathname === "/main") ? (
            <img src={require("./assets/icon1_active.png")} alt="as" />
          ) : (
            <img src={require("./assets/icon1.png")} alt="as" />
          )}
          <span>立即制作</span>
        </NavLink>
        <NavLink to="/main/mycard" exact className="item" activeClassName="active">
        {this.props.location.pathname === "/main/mycard" ? (
            <img src={require("./assets/icon2_active.png")} alt="as" />
          ) : (
            <img src={require("./assets/icon2.png")} alt="as" />
          )}
          <span>我的贺卡</span>
        </NavLink>
        <a href='https://sale.jd.com/m/act/I7lpM1OuJbKtN6.html'   className="item" >
        {this.props.location.pathname === "/main/person" ? (
            <img src={require("./assets/icon3_active.png")} alt="as" />
          ) : (
            <img src={require("./assets/icon3.png")} alt="as" />
          )}
          <span>礼品商城</span>
        </a>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    // aaaa: state.getIn(["global", "animateCls"])
  };
};

//将action的所有方法绑定到props上
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    // actions: bindActionCreators({ ...editAction }, dispatch)
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(navbarComponent)
);
