import React from "react";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
// import cs from "classnames";
import BaseComponent from "../../utils/BaseComponent";
import * as editAction from "../../actions/edit";

import "./assets/card.css";
import CpuContainer from "./cpuContainer";
import TextComponent from "./textCompontent";
import * as mockData from "../../config/index";
import ChoseTypeComponent from "./components/choseTypeComponnet";
import device from "current-device";
import cs from "classnames";
import { doJsApi } from "../../utils/common";
import PcCom from "./pcComponent";
const queryString = require("query-string");
class CardMakeContainer extends BaseComponent {
  state = {
    isPreview: true,
    current: 0,
    isShare: false,
    swiper: null,
    isOnLine: false,
    size: 0,
    showShare: false
  };

  doPreview = () => {
    this.setState({
      isPreview: true
    });
  };
  hidePreview = () => {
    this.setState({
      isPreview: false
    });
  };
  // 复制当前页

  componentWillUnmount() {
    this.props.actions.saveEdit({});
    this.props.actions.doEdit(false);
  }
  componentDidUpdate() {
    //
  }

  async componentWillMount() {
    doJsApi();
    // 解析链接请求参数
    let search = queryString.parse(this.props.location.search);
    // 初始化这个页面的参数
    // orderId  已经编辑过的id 首次进来为0
    // isOnLine 判断是否是线上的
    // templateId 输入哪种类型的模板

    if (search.isOnLine && search.isOnLine == 0) {
      this.props.actions.fetchAudioList({
        templetId: search.templateId
      });
    }else{
        
    }

    if (search.orderId && search.orderId != 0) {
      let themeconfig = await this.props.actions.fetchThemeConfigById({
        recordOpenId: document.getElementById("openid").value,
        orderId: search.orderId,
        sendOpenId: search.sendOpenId,
        detailId: search.detailId
      });

      if (typeof themeconfig === "undefined") {
        this.props.history.replace({
          pathname: "/main/mycard?type=get"
        });

        return false;
      }
      this.props.actions.saveEdit(JSON.parse(themeconfig.pages));
      // 
      this.props.actions.fetchCurrentMusic(themeconfig.audioUrl);

      // 是否为编辑状态
      if (
        search.isOnLine &&
        search.isOnLine == 0 &&
        document.getElementById("openid").value == search.sendOpenId
      ) {
        this.setState({
          isOnLine: false,
          isPreview: false
        });
      } else {
        this.setState({
          isOnLine: true
        });
      }
    } else {
      // 如果没有就进入默认
      this.props.actions.saveEdit(mockData[`theme${search.templateId}`]);
      this.setState({
        isPreview: false
      });
    }
  }
  componentDidMount() {}
  makeH5 = () => {
    this.props.actions.doEdit(true);
  };
  showShare = () => {
    let search = queryString.parse(this.props.location.search);
    this.props.history.push({
      pathname: `/msg/${this.props.orderId}/name`,
      search: `?templateId=${search.templateId}`
    });
  };
  hideChoseType = () => {
    this.setState({
      showShare: false
    });
  };
  swiperNext = () => {
    this.setState(pre => {
      return {
        current: "100" + Math.random() * 10000
      };
    });
  };
  swiperPrev = () => {
    this.setState(pre => {
      return {
        current: "200" + Math.random() * 10000
      };
    });
  };
  render() {
    let { showEdit } = this.props;
    let isPc = !device.mobile();
    return (
      <div className="card_page_root">
        {this.props.themeConfig && (
          <CpuContainer
            current={this.state.current}
            isOnLine={this.state.isOnLine}
            themeId={this.props.match.params.id}
          />
        )}

        {/* 选择类型 */}
        {this.state.showShare && (
          <ChoseTypeComponent hideChoseType={this.hideChoseType} />
        )}
        {isPc && <PcCom next={this.swiperNext} prev={this.swiperPrev} />}

        {!this.state.isOnLine && (
          <div>
            {showEdit ? <TextComponent /> : ""}
            {/* 编辑状态下左右箭头 */}

            {!this.props.doEdit &&
              !this.state.isPreview && (
                <div className={cs("preview_b", { pc: isPc })}>
                  <div
                    className="back"
                    onTouchEnd={e => {
                      this.props.history.goBack();
                    }}
                  >
                    返回
                  </div>
                  <div className="eidt" onClick={this.makeH5}>
                    {this.props.orderId ? "编辑" : "立即制作"}
                  </div>

                  {this.props.orderId && (
                    <div className="preview" onTouchEnd={this.doPreview}>
                      预览
                    </div>
                  )}

                  {this.props.orderId && (
                    <div
                      className="share"
                      onTouchEnd={e => {
                        if (this.props.orderId) {
                          this.showShare();
                        }
                      }}
                    >
                      {/* <img src={require("./assets/share.png")} alt="12" /> */}
                      <span>分享</span>
                    </div>
                  )}
                </div>
              )}

            {!this.props.doEdit &&
              this.state.isPreview &&
              this.state.isOnLine == 0 && (
                <div className="backmake" onTouchEnd={this.hidePreview}>
                  返回
                </div>
              )}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    themeConfig: state.getIn(["edit", "themeConfig"]),
    showEdit: state.getIn(["edit", "showEdit"]),
    doEdit: state.getIn(["edit", "doEdit"]),
    orderId: state.getIn(["edit", "orderId"]),
    currentPage: state.getIn(["edit", "currentPage"]),
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
  connect(mapStateToProps, mapDispatchToProps)(CardMakeContainer)
);
