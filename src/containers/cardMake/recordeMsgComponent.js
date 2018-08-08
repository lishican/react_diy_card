import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as editAction from "../../actions/edit";
import "./assets/commmon.css";
import BaseComponent from "../../utils/BaseComponent";
import { wxShare } from "../../utils/wxshare";
import { doJsApi } from "../../utils/common";
import TipComponent from "../tip/tipComponent";
import shareComponent from "./shareComponent";
import { isDate } from "util";
const qs = require("query-string");

class recordMsgComponnet extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      phone: "",
      isPhone: false,
      isShowShare: false,
      isHavaShare: true,
      showTip: false,
      tipMsg: "请输入正确的手机号码",
      shareIcon: "http://qn.kiis.cn/heca/icon/1.png",
      iconList: [
        {
          id: 1,
          url: "http://qn.kiis.cn/heca/icon/1.png"
        },
        {
          id: 2,
          url: "http://qn.kiis.cn/heca/icon/2.png"
        },
        {
          id: 3,
          url: "http://qn.kiis.cn/heca/icon/3.png"
        },
        {
          id: 4,
          url: "http://qn.kiis.cn/heca/icon/4.png"
        },
        {
          id: 5,
          url: "http://qn.kiis.cn/heca/icon/5.png"
        },
        {
          id: 6,
          url: "http://qn.kiis.cn/heca/icon/6.png"
        },
        {
          id: 7,
          url: "http://qn.kiis.cn/heca/icon/7.png"
        },
        {
          id: 8,
          url: "http://qn.kiis.cn/heca/icon/8.png"
        },
        {
          id: 9,
          url: "http://qn.kiis.cn/heca/icon/9.jpg"
        },
        {
          id: 10,
          url: "http://qn.kiis.cn/heca/icon/10.jpg"
        },
        {
          id: 11,
          url: "http://qn.kiis.cn/heca/icon/8.png"
        },
        {
          id: 12,
          url: "http://qn.kiis.cn/heca/icon/9.png"
        },
        {
          id: 13,
          url: "http://qn.kiis.cn/heca/icon/13.png"
        },
        {
          id: 14,
          url: "http://qn.kiis.cn/cardicon/10.jpg"
        },
        {
          id: 18,
          url: "http://qn.kiis.cn/cardicon/10.jpg"
        }
      ]
    };
  }
  componentWillMount() {
    doJsApi();
  }
  // 组件更新后的钩子方法
  componentDidUpdate() {
    doJsApi();
  }
  // 组件第一次加载的方法
  componentDidMount() {
    let search = qs.parse(this.props.location.search);

    this.saveCard("default", 1231);

    let id = search.templateId;
    let iconObj = this.state.iconList.find(v => v.id == id);

    console.log(iconObj);
    if (iconObj) {
      this.setState({
        shareIcon: iconObj.url
      });
    }

    doJsApi();
  }
  // 设置分享的东东
  doShareSet = id => {
    this.setState({
      current: {
        orderId: this.state.orderId,
        sendOpenId: document.getElementById("openid").value,
        detailId: id
      }
    });
  };

  handleChange = e => {
    let value = e.target.value;
    let res = value.replace(/[^\d]/g, "");

    this.setState({
      [e.target.name]: res
    });
  };

  changeType = () => {
    this.setState(pre => {
      return {
        isPhone: !pre.isPhone
      };
    });
  };
  doCommonshare = (detailId, asd) => {
    let that = this;


    let param = {
      link: `http://liwu.kiis.cn/h5/card/enter?orderId=${
        this.props.match.params.id
      }&detailId=${detailId}`,
      imgurl: this.state.shareIcon,
      title: "电子贺卡",
      desc: "您收到了一张电子贺卡"
    };
    wxShare(param, async () => {
      await editAction.doPost("/shareCard", {
        openId: document.getElementById("openid").value,
        orderId: that.props.match.params.id
      });
      this.setState({
        isHavaShare: true,
        isShowShare: false,
        isPhone: false,
        showTip: true,
        tipMsg: "分享成功"
      });
    });
  };
  hideShare = () => {
    this.setState({
      isShowShare: false
    });
  };

  saveCard = (type, isDate) => {
    let param = {
      openId: document.getElementById("openid").value,
      nickname: document.getElementById("nickname").value,
      headimg: document.getElementById("headimg").value,
      orderId: this.props.match.params.id,
      recordPhone: this.state.phone
    };

    if (type == "phone2") {
      this.setState({
        isPhone: true
      });
      return false;
    }

    if (type == "phoneinit") {
      this.setState({
        isPhone: true
      });
      return false;
    }



    if (isDate) {


      this.setState({
        isShowShare:false
      })


    } else {

      this.setState({
        isShowShare:true
      })
    }



    if (type === "phone") {
      // this.setState({
      //   isPhone: true
      // });
      if (!/^1(3|4|5|7|8|9)\d{9}$/.test(this.state.phone)) {
        this.setState({
          showTip: true,
          tipMsg: "请输入正确的手机号"
        });
        return false;
      }


      
    } else {

      

    }

    if(type=='common'){
      this.setState({
        isShowShare:true
      })
    }

    this.props.actions.doSaveCard(param).then(data => {
      // this.doCommonshare(data.detailId);

      if (type === "phone") {
        this.setState({
          showTip: true,
          tipMsg: "贺卡分享成功"
        });


      } else {
        this.doCommonshare(data.detailId);

        // if (isDate) {
        //   this.doCommonshare(data.detailId, 1223);
        // } else {
          
        // }


      }
    });
  };
  hideTip = () => {
    this.setState({
      showTip: false
    });
  };
  render() {
    return (
      <div className="edit_msg_page_root">
        {this.state.showTip && (
          <TipComponent msg={this.state.tipMsg} hideTip={this.hideTip} />
        )}
        <div className="title">分享内容</div>

        <div className="share" flex="main:left cross:center">
          <div className="img">
            <img src={this.state.shareIcon} alt="" />
          </div>
          <div className="text">
            <div className="t">电子贺卡</div>
            <div>您收到一张贺卡</div>
          </div>
        </div>

        <div className="title">选择分享方式</div>
        <div flex="main:center cross:center box:mean">
          <div className="btn" onClick={this.saveCard.bind(this, "common")}>
            普通分享
          </div>

          {!this.state.isPhone && (
            <div className="btn" onClick={this.saveCard.bind(this, "phone2")}>
              指定手机号分享
            </div>
          )}
          {this.state.isPhone && (
            <div
              className="btn"
              onClick={this.saveCard.bind(this, "phoneinit")}
            >
              指定手机号分享
            </div>
          )}
        </div>
        {this.state.isPhone && (
          <div
            flex="main:center cross:center box:mean"
            style={{ padding: " 0 .2rem" }}
          >
            <input
              value={this.state.phone}
              name="phone"
              onChange={this.handleChange}
              placeholder="请输入贺卡接收人的电话号码"
            />
            <div className="btn" onClick={this.saveCard.bind(this, "phone")}>
              确定
            </div>
          </div>
        )}

        <img
          style={{ display: "block", width: "100%", margin: ".2rem auto" }}
          src={require("./assets/guide.jpg")}
          alt="指引"
        />

        {this.state.isHavaShare && (
          <div
            className="btn"
            onClick={e => {
              this.props.history.replace({
                pathname: "/main/mycard"
              });
            }}
          >
            查看我制作的贺卡
          </div>
        )}

        {this.state.isPhone && (
          <p className="tiptext">
            手机号指定分享，验证过的手机号可以查看自己收到的贺卡
          </p>
        )}
        {this.state.isShowShare && (
          <div className="tip animated fadeIn" onClick={this.hideShare}>
            <img src={require("./assets/share.png")} alt="as" />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    showShare: state.getIn(["edit", "showShare"])
  };
};

//将action的所有方法绑定到props上
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators({ ...editAction }, dispatch)
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(recordMsgComponnet)
);
