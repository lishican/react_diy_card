import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import qs from "query-string";
import TipComponent from "../tip/tipComponent";
import * as editAction from "../../actions/edit";
import cs from "classnames";
import "./assets/main.css";

class EnterComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowPone: false,
      phone: "",
      code: "",
      showTip: false,
      isCode: false,
      time: 30,
      text: "获取认证码",
      tipMsg: "请输入正确的手机号"
    };
  }

  goBack = () => {
    this.setState({
      isShowPone: false
    });
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  doCheck = async () => {
    if (!/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.state.phone)) {
      this.setState({
        showTip: true,
        tipMsg: "请输入正确的手机号"
      });
      return false;
    }

    let res = await editAction.doPost("/checkCard", {
      openId: document.getElementById("openid").value,
      validate: this.state.code,
      recordPhone: this.state.phone
    });

    if (res.code == 200) {
      // 如果只有一个就去贺卡，否则去列表
      if (res.orderList.length == 1) {
        this.props.history.replace({
          pathname: `/msg/${res.orderList[0]["id"]}`,
          search: `?isA=2&sendOpenId=${res.orderList[0]["openid"]}&detailId=${
            res.orderList[0]["detailId"]
          }`
        });
      } else {
        this.props.history.replace({
          pathname: "/main/mycard",
          search: "?type=get"
        });
      }
    } else {
      this.setState({
        showTip: true,
        tipMsg: "网络繁忙"
      });
    }
  };

  // 获取验证码
  getCode = async () => {
    if (!/^1(3|4|5|7|8)\d{9}$/.test(this.state.phone)) {
      this.setState({
        showTip: true,
        tipMsg: "请输入正确的手机号"
      });
      return false;
    }
    this.sendCode();
    let coderes = await editAction.doPost("/sendValidate", {
      openId: document.getElementById("openid").value,
      recordPhone: this.state.phone
    });

    if (coderes.code == 98) {
      this.setState({
        showTip: true,
        tipMsg: "暂没收到贺卡"
      });
    }
    if (coderes.code == 200) {
      this.setState({
        showTip: true,
        tipMsg: "短信已发送，请注意查收"
      });
    }

    console.log(coderes);
  };
  // 组件更新后的钩子方法
  componentDidUpdate() {}
  // 组件第一次加载的方法
  async componentDidMount() {
    let h = window.innerHeight;
    let that = this;
    window.addEventListener("resize", function() {
      // alert(1)
      that.refs.ng.style.height = h + "px";
    });
    let userinfo = {
      openId: document.getElementById("openid").value,
      img: document.getElementById("headimg").value,
      name: document.getElementById("nickname").value
    };
    // 初始化用户信息
    let doc = await editAction.fetchUserInfo({ ...userinfo });
    let param = qs.parse(this.props.location.search);
    // 如果是从分享链接进来的
    if (param.orderId) {
      let pageparams = {
        recordOpenId: document.getElementById("openid").value,
        orderId: param.orderId,
        detailId: param.detailId
      };
      let isPage = await editAction.doPost("/checkPages", pageparams);

      // 查询是否有数据
      if (isPage.code == 200) {
        // 如果已经公开就直接访问h5，还没公开就不能访问
        this.props.history.replace({
          pathname: `/msg/${param.orderId}`,
          search: `?isA=2&sendOpenId=${param.sendOpenId}&detailId=${
            param.detailId
          }`
        });
      } else {
        alert(isPage.msg);
        this.props.history.replace({
          pathname: "/main"
        });
      }
    } else {
      // 是否验证过手机
      if (doc.phone && doc.phone != "") {
        this.props.history.replace({
          pathname: "/main/mycard",
          search: "?type=get"
        });
        console.log("cardList");
      } else {
        this.setState({
          isShowPone: true
        });
      }
    }
  }
  hideTip = () => {
    this.setState({
      showTip: false
    });
  };
  goHome = () => {
    this.props.history.push({
      pathname: "/main"
    });
  };
  // 发送二维码
  sendCode = () => {
    if (this.state.isCode) return false;
    this.setState({
      isCode: true
    });
    this.timer && clearInterval(this.timer);
    this.timer = setInterval(() => {
      if (this.state.time < 1) {
        clearInterval(this.timer);
        this.setState({
          isCode: false,
          text: "重新获取",
          time: 30
        });
      } else {
        this.setState((preState, preProps) => {
          return { time: --preState.time };
        });
      }
    }, 1000);
  };
  render() {
    return (
      <div>
        {this.state.showTip && (
          <TipComponent msg={this.state.tipMsg} hideTip={this.hideTip} />
        )}
        {this.state.isShowPone && (
          <div className="phone_lock_root">
            <div className="bg" ref="ng" onClick={this.props.goBack}>
              <img src={require("./assets/phonebg.jpg")} alt="beijing" />
            </div>

            <div className="modal">
              <p>请验证手机号查看TA给您发送的贺卡</p>
              <div className="phone form_input">
                <input
                  type="text"
                  placeholder="输入手机号"
                  name="phone"
                  value={this.phone}
                  onChange={this.handleChange}
                />
              </div>

              <div className="b">
                <div className="code form_input ">
                  <input
                    type="text"
                    placeholder="输入验证码"
                    name="code"
                    value={this.state.code}
                    onChange={this.handleChange}
                  />
                </div>
                <a
                  className={cs("sure", { active: this.state.isCode })}
                  onClick={e => {
                    this.getCode();
                  }}
                >
                  {this.state.isCode ? this.state.time : this.state.text}
                </a>
              </div>
              <a className="sureBtn" onClick={this.doCheck}>
                验证
              </a>

              <a className="makeCard" onClick={this.goHome}>
                免费制作贺卡
              </a>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    // userInfo: state.getIn(["edit", "userinfo"])
  };
};

//将action的所有方法绑定到props上
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    // actions: bindActionCreators({ ...editAction }, dispatch)
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(EnterComponent)
);
