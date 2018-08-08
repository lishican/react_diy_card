import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as editAction from "../../../actions/edit";
import moment from 'moment'
import {doJsApi} from '../../../utils/common'
class OtherComponent extends React.Component {
  state = {
    isShowPone: true,
    phone: "",
    code: ""
  };
  // 组件更新后的钩子方法
  componentDidUpdate() {}
  // 组件第一次加载的方法
  async componentDidMount() {
    doJsApi()
    // const userinfo = {
    //   openId: document.getElementById("openid").value,
    //   img: document.getElementById("headimg").value,
    //   name: document.getElementById("nickname").value
    // };
    // await this.props.actions.updateUserInfo(userinfo);

    // if (this.props.userinfo.get("phone") == "") {
    //   this.props.history.push({
    //     pathname: "/enter"
    //   });
    //   return;
    // } else {
    //   let res = await this.props.actions.fetchMyRecive({
    //     openId: document.getElementById("openid").value,
    //     selType: 1
    //   });

    //   // if (res.code == 99) {
    //   //   alert("没有收到贺卡");
    //   //   this.props.history.push({
    //   //     pathname: `/main/mycard`
    //   //   });
    //   // }
    // }
  }

  seeReciveCard = v => {
    this.props.history.push({
      pathname: `/msg/${v.get("id")}`,
      search: `?isA=2&sendOpenId=${v.get("openid")}&detailId=${v.get('detailId')}`
    });
  };

  render() {

    return (
      <div className="other_com_root">
      {this.props.recivelist&&this.props.recivelist.isEmpty()&&<div flex='main:center cross:center' style={{height:"5rem"}}>您的贺卡列表为空</div>}
        {this.props.recivelist &&
          this.props.recivelist.map((v, k) => {
            return (
              <div
                className="item"
                key={k}
                onClick={this.seeReciveCard.bind(this, v)}
              >
                <div className="top" flex="main:left cross:center">
                  {/* <div className="img">
                  <img src={require("../assets/wei.png")} alt="" />
                </div> */}
                  <div className="title">
                    <div>
                      <span>#{v.get("name")}#</span>给您送来一张{v.get(
                        "cardName"
                      )
                        ? v.get("cardName")
                        : "暂无类型"}
                    </div>
                    <p>{moment(v.getIn(["updateTime",'time'])).format('YYYY-MM-DD HH:mm:ss')}</p>
                  </div>
                </div>
                <div className="con2" flex="main:center cross:center box:first">
                  <div className="img">
                    <img src={v.get("imgUrl")} alt="a" />
                  </div>
                  <div className="text">
                    <div className="title">
                      {v.get("cardName") ? v.get("cardName") : "暂无类型"}
                    </div>
                    <div className="desc">
                      {/* {v.get("blessingText")
                        ? v.get("blessingText")
                        : "暂无祝福语"} */}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    recivelist: state.getIn(["edit", "recivelist"]),
    userinfo: state.getIn(["edit", "userinfo"])
  };
};

//将action的所有方法绑定到props上
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators({ ...editAction }, dispatch)
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(OtherComponent)
);
