import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import ShareComponent from "../../cardMake/shareComponent";
import * as editAction from "../../../actions/edit";
import { bindActionCreators } from "redux";
import cs from 'classnames'
import moment from 'moment'
import {doJsApi} from '../../../utils/common'
class MyComponent extends React.Component {
  state = {
    current: {}
  };
  // 组件更新后的钩子方法
  componentDidUpdate() {}
  // 组件第一次加载的方法
  componentDidMount() {
    doJsApi()
    this.props.actions.fetchMyCart({
      openId: document.getElementById("openid").value,
      selType: 0
    });
  }
  seeMyCard = param => {
    this.props.history.push({
      pathname: `/msg/${param.get("id")}`,
      search: `?isA=2&sendOpenId=${param.get("openid")}&detailId=${param.get(
        "detailId"
      )}`
    });
  };
  onConfigShare = () => {
    // todo 微信的分享
  };
  showShare = v => {
    this.props.history.push({
      pathname: `/msg/${v.get("id")}/name`,
      search:`?templateId=${v.get("templetId")}`
    });
  };

  render() {

    return (
      <div className="my_com_root">
        {this.props.showShare && (
          <ShareComponent
            current={this.state.current}
            onConfigShare={this.onConfigShare}
          />
        )}

{this.props.cardlist&&this.props.cardlist.isEmpty()&&<div flex='main:center cross:center' style={{height:"5rem"}}>您的贺卡列表为空</div>}
        {/* {!!this.props.cardlist && <div style={{textAlign:'center',marginTop:'3rem'}}>暂无制作的贺卡</div>} */}
        {this.props.cardlist.map((v, k) => {
          return (
            <div className={cs("item animated",{
              "slideInLeft":k%2==0,
              "slideInRight":k%2!=0,
            })} key={k}>
              <div
                className="con2"
                flex="main:left cross:center box:first"
                onClick={e => {
                  this.seeMyCard(v);
                }}
              >
                <div className="img">
                  <img src={v.get("imgUrl")} alt="暂无贺卡封面" />
                </div>
                <div className="desc">
                  <h4>{v.get("cardName")?v.get("cardName"):'暂无贺卡名称'}</h4>
                  <p>浏览{parseInt(v.get("views"),10)}次</p>
                  <p>分享{v.get("shares")}次</p>
                  <p>{moment(v.getIn(["updateTime",'time'])).format('YYYY-MM-DD HH:mm:ss')}</p>
                </div>
              </div>

              <div className="bottom" flex="cross:center box:mean">
                <div
                  className="btn"
                  flex="cross:center  main:left"
                  onClick={e => {
                    this.props.deleteCard(v);
                  }}
                >
                  <img src={require("../assets/delete.png")} alt="a" />
                  <span>刪除</span>
                </div>
                <div
                  className="btn"
                  flex=" cross:center main:center"
                  onClick={e => {
                    this.props.doEdit(v);
                  }}
                >
                  <img src={require("../assets/edit.png")} alt="a" />
                  <span>编辑</span>
                </div>
                <div
                  className="btn"
                  flex="cross:center  main:right"
                  onClick={e => {
                    this.showShare(v);
                  }}
                >
                  <img src={require("../assets/share.png")} alt="a" />
                  <span>分享</span>
                </div>
              </div>
            </div>
          );
        })}
        {!this.props.cardlist && <div>暂无贺卡</div>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cardlist: state.getIn(["edit", "cardlist"]),
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
  connect(mapStateToProps, mapDispatchToProps)(MyComponent)
);
