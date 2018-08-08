import React from "react";
// import { bindActionCreators } from "redux";
import { withRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import BaseComponent from "../../utils/BaseComponent";
import NavBar from "../common/navbarComponent";
import asyncComponent from "../common/asynComponent";
import "./main.css";
import {wxShare} from '../../utils/wxshare'

class mainContainer extends BaseComponent {
  // 组件会更新
  componentWillUpdate() {}
  componentDidMount() {
    wxShare(
      {
        link: "http://liwu.kiis.cn/h5/card/main",
        title: " 光彩年华电子贺卡",
        desc: "动态音乐电子贺卡",
        imgurl: "http://qn.kiis.cn/heca/icon/0101.jpg"
      },
      function() {}
    );
    
  }
  render() {
    return (
      <div className="main_page_root">
          <Switch>
            <Route
              path="/main/"
              exact
              component={asyncComponent(() => import("../home/homeContainer"))}
            />

            <Route
              path="/main/mycard"
              exact
              component={asyncComponent(() =>
                import("../mycard/myCardContainer")
              )}
            />
            <Route
              path="/main/person"
              exact
              component={asyncComponent(() =>
                import("../personal/personalContainer")
              )}
            />
            <Route
              path="/main/list/:id"
              exact
              component={asyncComponent(() =>
                import("../cateList/cateListComponent")
              )}
            />
          </Switch>

        <NavBar />
        {/* <div style={{ height: "2rem" }} /> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};
//将action的所有方法绑定到props上
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    // actions: bindActionCreators({ ...homeAction }, dispatch)
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(mainContainer)
);
