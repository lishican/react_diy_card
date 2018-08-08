import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import MyComponent from "./components/myComponent";
import OtherComponent from "./components/otherComponent";
import { bindActionCreators } from "redux";
import * as editAction from "../../actions/edit";
import cs from "classnames";
import qs from "query-string";
import "./components/card.css";
class myCardContainer extends React.Component {
  state = {
    isMy: true
  };
  // 组件更新后的钩子方法
  componentDidUpdate() {}

  componentWillMount() {
    let search = qs.parse(this.props.location.search);

    if (search.type == "get") {
      this.setState({
        isMy: false
      });
    } else {
      this.setState({
        isMy: true
      });
    }
    this.props.actions.fetchMyRecive({
      openId:document.getElementById("openid").value,
      selType:1
    })
    // 获取我制作的贺卡
  }

  deleteCard = async v => {
    // todo
    if (!window.confirm("确定删除吗？")) {
      return false;
    }
    let doc = await editAction.doPost("/delCard", {
      openId: v.get("openid"),
      orderId: v.get("id")
    });

    if (doc.code == 200) {
      this.props.actions.fetchMyCart({
        openId: document.getElementById("openid").value,
        selType: 0
      });
    } else {
      alert("删除失败");
    }
  };
  doEdit = async v => {
    this.props.history.push({
      pathname: "/cardmake",
      search: `isOnLine=0&orderId=${v.get("id")}&templateId=${v.get(
        "templetId"
      )}&sendOpenId=${v.get("openid")}&detailId=${v.get("detailId")}`
    });
  };

  // 组件第一次加载的方法
  componentDidMount() {}
  changeTab = type => {
    if (type == 1) {
      this.setState({
        isMy: true
      });
    } else {
      this.setState({
        isMy: false
      });
    }
    // if (type === 1) {
    //   // this.props.history.replace({
    //   //   pathname: "/main/mycard"
    //   // });
    //   this.setState({
    //     isMy: true
    //   });
    // } else {
    //   // this.props.history.replace({
    //   //   pathname: "/main/mycard",
    //   //   search:'?type=get'
    //   // });
    //   this.setState({
    //     isMy: false
    //   });
    // }
  };
  render() {
    return (
      <div className="mycard_page_root">
        <div className="nav_top">
          <div
            className={cs("item", { active: this.state.isMy })}
            onClick={this.changeTab.bind(this, 1)}
          >
            <span>我制作的</span>
          </div>
          <div
            className={cs("item", { active: !this.state.isMy })}
            onClick={this.changeTab.bind(this, 2)}
          >
            <span>我收到的</span>
            {this.props.recivelist &&
              this.props.recivelist.size >= 1 && (
                <i>{this.props.recivelist && this.props.recivelist.size}</i>
              )}
          </div>
        </div>
        <div style={{ height: ".86rem" }} />
        {this.state.isMy ? (
          <MyComponent deleteCard={this.deleteCard} doEdit={this.doEdit} />
        ) : (
          <OtherComponent />
        )}
        <div style={{ height: "2rem" }} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    recivelist: state.getIn(["edit", "recivelist"])
  };
};

//将action的所有方法绑定到props上
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators({ ...editAction }, dispatch)
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(myCardContainer)
);
