import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import "./assets/commmon.css";
import Swiper from "swiper/dist/js/swiper.min";
import { bindActionCreators } from "redux";
import * as editAction from "../../actions/edit";
import qs from "query-string";
import BaseComponent from "../../utils/BaseComponent";
import moment from "moment";
import cs from "classnames";
import ReqModal from '../tip/reqModal'

class MessageContainer extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentType: 0,
      isA: false,
      type: 0,
      templateId: 0,
      isShare: false,
      msgObj: {},
      bgList: [
        {
          title: "情人",
          imgurl: require("./assets/msg1.jpg"),
          text: "世上唯你不可辜负！给我一个机会，让我保护你一辈子，宠你一辈子！"
        },
        {
          title: "告白",
          imgurl: require("./assets/msg2.jpg"),
          text: "跟你在一起的每一天都是情人节！遇见你是我做过最好的事！"
        },
        {
          title: "通用",
          imgurl: require("./assets/msg3.jpg"),
          text: "勇敢的迎接每一天！越努力越幸运！相信不忘初心，方得始终！"
        },
        {
          title: "节日",
          imgurl: require("./assets/msg4.jpg"),
          text:
            "上帝把雪花在人间释放,是让你把烦恼遗忘.寒风把窗户在夜晚关上是让你把温馨荡漾,让天证明地久,让地证明天长.祝你元旦快乐! "
        },
        {
          title: "生日",
          imgurl: require("./assets/msg5.jpg"),
          text:
            "换星移，不会为我们逗留，惟有你我的恋爱永藏在心的深处,祝你生辰快乐！"
        }
      ]
    };
    this.mySwiper = null;
  }

  doNext = () => {
    this.props.history.replace({
      pathname: `${this.props.match.url}/name`,
      search: `?${qs.stringify(this.state)}`
    });
  };

  // 组件更新后的钩子方法
  componentDidUpdate() {}
  // 组件第一次加载的方法
  async componentDidMount() {
    let that = this;

    let search = qs.parse(this.props.location.search);
    console.log(search);

    // 更新订单
    let id = this.props.match.params.id;
    //
    if (search.isA == 2) {
      let doc = await this.props.actions.fetchThemeConfigById({
        recordOpenId: document.getElementById("openid").value,
        orderId: id,
        sendOpenId: search.sendOpenId,
        detailId: search.detailId,
      });

      if(!doc){
        this.props.history.replace({
          pathname: "/main/mycard",
        });
        return false
      }

      console.log(doc)

      if(!doc.sendName){
        this.props.history.replace({
          pathname: "/cardmake",
          search: `?isOnLine=1&sendOpenId=${doc.openid}&orderId=${
            doc.id
          }&templetId=${doc.templetId}&detailId=${qs.parse(this.props.location.search).detailId}`
        });
        return false
      }

      this.setState({
        msgObj: doc
      });

      console.log(doc);

      this.mySwiper = new Swiper(this.refs.msgSwiper, {
        direction: "horizontal",
        initialSlide: doc.msgId,
        effect: "coverflow",
        on: {
          init: function() {}
        }
      });
    } else {
      this.mySwiper = new Swiper(this.refs.msgSwiper, {
        direction: "horizontal",
        loop: true,
        effect: "fade",
        on: {
          slideChange: function() {
            that.setState({
              currentType: this.realIndex
            });
          }
        }
      });
    }
    this.setState({
      isA: search.isA == 0 ? false : true,
      type: search.type,
      templateId: search.templateId,
      orderId: this.props.match.params.id
    });
  }
  doSwipe = type => {
    if (type === 1) {
      this.mySwiper.slidePrev();
    } else {
      this.mySwiper.slideNext();
    }
  };
  onShare = () => {
    this.setState({ isShare: true });
  };

  checkCard = () => {
    this.props.history.replace({
      pathname: "/cardmake",
      search: `?isOnLine=1&sendOpenId=${this.state.msgObj.openid}&orderId=${
        this.state.orderId
      }&templetId=${this.state.msgObj.templetId}&detailId=${qs.parse(this.props.location.search).detailId}`
    });
  };

  render() {
    console.log("准备挂在3");
    console.log(this.state.isA);

    if (qs.parse(this.props.location.search).isA == 2) {
      if (!this.state.msgObj.pages) {
        return (
          <div className="msg_page_root" style={{ paddingTop: "5rem" }}>
        <ReqModal msg='数据加载中' />
          </div>
        );
      }
    }

    return (
      <div className="msg_page_root">

        {this.state.isA && (
          <div className="other">
            {this.state.msgObj.sendName}的祝福留言
          </div>
        )}
        {!this.state.isA && (
          <div className="topTip">收礼的TA可以看到留言模板背景</div>
        )}
        {/* {!this.state.isA && (
          <div className="type">{this.state.bgList[this.state.currentType]['title']}</div>
        )} */}
        <div
          className={cs("bg_chose swiper-container", {
            "swiper-no-swiping": this.state.isA
          })}
          ref="msgSwiper"
        >
          <div className="swiper-wrapper">
            {this.state.bgList.map((v, k) => {
              return (
                <div className="swiper-slide" key={k}>
                  <img className="bg" src={v.imgurl} alt="left arrow" />
                  <div className="info">
                    <h6>
                      {this.state.msgObj.recordName
                        ? "尊敬的" + this.state.msgObj.recordName
                        : "大A"}
                    </h6>
                    <p>
                      {this.state.msgObj.blessingText
                        ? this.state.msgObj.blessingText
                        : v.text}
                    </p>
                    <h6 className="who r">
                      {this.state.msgObj.sendName
                        ? this.state.msgObj.sendName + "赠送"
                        : "小a"}
                    </h6>
                    <div className="r">{new Date().toLocaleDateString()}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {!this.state.isA && (
          <div className="left" onTouchEnd={this.doSwipe.bind(this, 1)}>
            <img src={require("./assets/arrow_left.png")} alt="left arrow" />
          </div>
        )}
        {!this.state.isA && (
          <div className="right" onTouchEnd={this.doSwipe.bind(this, 2)}>
            <img src={require("./assets/arrow_right.png")} alt="left arrow" />
          </div>
        )}

        {this.state.isA && (
          <div
            className="look btn12"
            onTouchEnd={e => {
              this.checkCard();
            }}
          >
            查看贺卡
          </div>
        )}

        {!this.state.isA && (
          <div className="currentTip">
            当前选择<span>
              “{this.state.bgList[this.state.currentType]["title"]}”
            </span>留言板
          </div>
        )}

        {!this.state.isA && (
          <div flex="main:center cross:center">
            <div
              className="preBtn btn12"
              onTouchEnd={e => {
                this.props.history.goBack();
              }}
            >
              上一步
            </div>
            <div
              className="nextBtn btn12"
              onTouchEnd={e => {
                this.doNext();
              }}
            >
              下一步
            </div>
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
  connect(mapStateToProps, mapDispatchToProps)(MessageContainer)
);
