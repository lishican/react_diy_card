import React, { Component } from "react";
import { ConnectedRouter } from "react-router-redux";
import { createBrowserHistory } from "history";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as editAction from "../actions/edit";
import ScrollToTop from "./common/scrollComponent";
import { Route, Switch, Redirect } from "react-router-dom";
import asyncComponent from "./common/asynComponent";
import TipComponent from "./tip/tipComponent";
import { wxShare } from "../utils/wxshare";
import "./App.css";
import "swiper/dist/css/swiper.min.css";

//路由类型
const history = createBrowserHistory({
  basename: process.env.NODE_ENV === "development" ? "" : "/h5/card/",
  forceRefresh:true
});
// 404 界面
// const NoMatch = () => {
//   return <div>404 not font</div>;
// };

wxShare(
  {
    link: "http://liwu.kiis.cn/h5/card/main",
    title: " 光彩年华电子贺卡",
    desc: "动态音乐电子贺卡",
    imgurl: "http://qn.kiis.cn/heca/icon/0101.jpg"
  },
  function() {}
);



// 获取微信用户信息
const userinfo = {
  openId: document.getElementById("openid").value,
  img: document.getElementById("headimg").value,
  name: document.getElementById("nickname").value
};

//应用进口
class App extends Component {
  async componentWillMount() {
    await this.props.actions.updateUserInfo({ ...userinfo });
  }
  hideTip = () => {
    this.props.actions.hideError();
  };
  render() {
    return (
      <div className="appContainer">
        <ConnectedRouter history={history}>
          <ScrollToTop>
            {this.props.showError.get("show") && (
              <TipComponent
                msg={this.props.showError.get("msg")}
                hideTip={this.hideTip}
              />
            )}
            {/* process.env.PUBLIC_URL */}
            <Switch>
              <Route
                path="/main"
                component={asyncComponent(() => import("./main/mainContainer"))}
              />
              <Route
                path="/help"
                exact
                component={asyncComponent(() =>
                  import("./personal/helpComponent")
                )}
              />
              <Route
                path="/msg/:id"
                exact
                component={asyncComponent(() =>
                  import("./cardMake/messageContainer")
                )}
              />
              <Route
                path="/msg/:id/name"
                exact
                component={asyncComponent(() =>
                  import("./cardMake/recordeMsgComponent")
                )}
              />
              <Route
                path="/custom"
                exact
                component={asyncComponent(() =>
                  import("./personal/customComponen")
                )}
              />
              <Route
                path="/enter"
                exact
                component={asyncComponent(() =>
                  import("./qrcode/enterComponent")
                )}
              />
              <Route
                path="/cardmake"
                exact
                component={asyncComponent(() =>
                  import("./cardMake/cardMakeContainer")
                )}
              />
              <Redirect to="/main" />
            </Switch>
          </ScrollToTop>
        </ConnectedRouter>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userinfo: state.getIn(["edit", "userinfo"]),
    showError: state.getIn(["edit", "showError"])
  };
};

//将action的所有方法绑定到props上
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators({ ...editAction }, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
