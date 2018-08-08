import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import asyncComponent from "../common/asynComponent";
import * as editAction from "../../actions/edit";
import Swiper from "swiper/dist/js/swiper.min";
import cs from "classnames";
import DownComponent from "./downComponent";
import ReportComponent from "./ReportComponent";
import MusicComponent from "../common/musicComponent";
import BaseComponent from "../../utils/BaseComponent";
import ReqModal from "../tip/reqModal";
import device from "current-device";
import TipComppnent from "../tip/tipComponent";
import ProgressComponent from "../common/progressComponent";
import MusicChooseComponent from "./musicChooseCompoent";
import Req from "../tip/reqModal";
import { wxShare } from "../../utils/wxshare";
import {checkIsWatch} from '../../utils/common'
import queryString from "query-string";
var swiperAnimateCache = require("swiper-animate-cn").swiperAnimateCache;
var swiperAnimate = require("swiper-animate-cn").swiperAnimate;

class CpuContainer extends BaseComponent {
  static defaultProps = {};
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      isLoading: true,
      isShowReport: false,
      showTip: false,
      tipMsg: "举报成功，后台客服会尽快处理",
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
    this.mySwiper = null;
  }
  // 组件更新后的钩子方法
  componentDidUpdate() {}
  componentWillUnmount() {}
  componentDidMount() {
    let search = queryString.parse(this.props.location.search);

    let idd = search.templateId || search.templetId;
    let shareIcon = this.state.iconList.find(v => v.id == idd);

    console.log(window.location.href);
    let that = this;
    let param = {
      link: window.location.href,
      imgurl: shareIcon.url,
      title: "电子贺卡",
      desc: "您收到了一张电子贺卡"
    };
    wxShare(param, async () => {
      if (search.orderId) {
        await editAction.doPost("/shareCard", {
          openId: document.getElementById("openid").value,
          orderId: search.orderId
        });
        this.setState({
          showTip: true,
          tipMsg: "分享成功"
        });
      }

      // this.setState({
      //   isHavaShare: true,
      //   isShowShare: false,
      //   isPhone: false,
      //   showTip: true,
      //   tipMsg: "分享成功"
      // });
    });

    this.setState({
      currentPage: this.props.current < 1 ? 0 : this.props.current
    });
    this.initSwiper("vertical", 0);
  }
  componentWillReceiveProps(nexprops) {
    console.log(nexprops.current);

    if (nexprops.current) {
      if (nexprops.current.substr(0, 1) == 1) {
        this.doSwiper(1);
      } else {
        this.doSwiper(2);
      }
    }
  }
  makeMySelf = ()=>{


    checkIsWatch().then(data=>{

      console.log(data)
      if(data.data.doc.subscribe==1){
           this.props.history.replace({
          pathname: "/main"
    });
      }else{
          window.location.href = 'http://liwu.kiis.cn/h6/card3/'
        // alert('还没关注')
      }
      console.log(data)
    })



  }


  initSwiper = (type, initialSlide) => {
    let that = this;
    this.mySwiper && this.mySwiper.destroy(false);
    this.mySwiper = new Swiper(this.refs.asSwiper, {
      direction: type,
      loop: false,
      observer: true,
      longSwipesRatio: 0.3,
      touchRatio: 1,
      observerParents: true,
      initialSlide: initialSlide,
      mousewheelControl: true,
      watchSlidesProgress: true,
      speed: 500,
      on: {
        slideChange: function() {
          that.setState({
            currentPage: this.realIndex + 1
          });
          console.log(this.realIndex);
        },
        update: function() {},
        init: function() {
          setTimeout(() => {
            that.setState({
              isLoading: false
            });
          }, 1000);
          this.myIndex = 0;

          if (this.slides.length > 0) {
            swiperAnimateCache(this); //隐藏动画元素
            swiperAnimate(this); //初始化完成开始动画
          }
        },
        progress: function() {
          for (let i = 0; i < this.slides.length; i++) {
            let slide = this.slides.eq(i);
            let progress = this.slides[i].progress;
            let translate = progress * this.height * 0.8;
            let scale = 1 - Math.min(Math.abs(progress * 0.2), 1);
            if (i == this.myIndex) {
              slide.transform(
                "translate3d(0," + translate + "px,0) scale(" + scale + ")"
              );
              slide.css({
                "z-index": 0,
                boxShadow: "0px 0px 10px rgba(0,0,0,.5)"
              });
            }
          }

          if (this.slides.length > 0) {
            if (this.activeIndex == this.slides.length) {
              return false;
            }
            console.log(this.activeIndex);
            swiperAnimate(this);
          }
        },

        setTransition: function(speed) {
          for (var i = 0; i < this.slides.length; i++) {
            var slide = this.slides.eq(i);
            slide.transition(speed + "ms");
          }
          //自定义事件
        },
        slideChangeTransitionEnd: function() {
          this.myIndex = this.activeIndex;
          for (var i = 0; i < this.slides.length; i++) {
            var slide = this.slides.eq(i);
            slide.transform("");
            slide.css("z-index", 1);
          }
          if (this.slides.length > 0) {
            swiperAnimate(this);
          }
        }
      }
    });
  };
  doCopy = () => {
    if (this.props.contentN.size >= 10) {
      this.setState({
        showTip: true,
        tipMsg: "页面不能超过10个"
      });
      return false;
    }
    this.props.actions.doCopy(this.state.currentPage - 1);
    this.mySwiper.slideNext();
  };
  doDelete = () => {
    this.props.actions.doDelete(this.state.currentPage - 1);
  };

  // 保存audioUrl
  saveH5 = () => {

    this.setState({
      isLoading:true
    })
    this.props.actions.doEdit(false);
    let pages = JSON.stringify(this.props.themeConfig.toJS());
    let orderId = this.props.orderId;
    if (orderId == 0) {
      orderId = "";
    }
    let templetId = this.props.themeConfig.get("typeId");
    let userinfo = {
      openId: this.props.userinfo.get("openid"),
      phone: this.props.userinfo.get("phone")
    };

    let search = queryString.parse(this.props.location.search);

    let idd = search.templateId || search.templetId;
    let shareIcon = this.state.iconList.find(v => v.id == idd);
    let that = this
    this.props.actions
      .doSaveEditToServe({
        orderId: orderId,
        pages: pages,
        templetId: templetId,
        audioUrl: this.props.currentMusic,
        ...userinfo
      })
      .then(data => {
        let param2 = {
          openId: document.getElementById("openid").value,
          nickname: document.getElementById("nickname").value,
          headimg: document.getElementById("headimg").value,
          orderId: data.orderId,
          recordPhone: ""
        };

        this.props.actions.doSaveCard(param2).then(data2 => {
          console.log(data2.detailId);

          let param3 = {
            link: `http://liwu.kiis.cn/h5/card/enter?orderId=${
              data.orderId
            }&detailId=${data2.detailId}`,
            imgurl: shareIcon.url,
            title: "电子贺卡",
            desc: "您收到了一张电子贺卡"
          };
          that.setState({
            isLoading:false
          })

          wxShare(param3, () => {
            editAction.doPost("/shareCard", {
              openId: document.getElementById("openid").value,
              orderId: data.orderId
            });
          });
        });

        console.log("data");
        console.log(data);
      });
  };

  doSwiper = type => {
    if (type === 2) {
      this.mySwiper.slideNext();
    } else {
      this.mySwiper.slidePrev();
    }
  };

  //获取音乐数据
  doAudioList = async val => {
    let param = {
      templetId: this.props.themeConfig.get("typeId")
    };
    let hasMusic = await editAction.doPost("/getAudioList", param);
    // if(hasMusic.code==200){

    // }00
    // this.setState({

    // });
  };

  // 保存举报
  doReport = async val => {
    let search = queryString.parse(this.props.location.search);

    let param = {
      phone: this.props.userinfo.phone,
      templetId: this.props.themeConfig.get("typeId"),
      reason: val,
      openId: document.getElementById("openid").value,
      detailId: search.detailId,
      orderId: search.orderId
    };
    await editAction.doPost("/saveReport", param);
    this.setState({
      isShowReport: false,
      showTip: true,
      tipMsg: "举报成功，后台客服会尽快处理"
    });
  };
  showReport = () => {
    this.setState({
      isShowReport: true
    });
  };
  hideReport = val => {
    this.setState({
      isShowReport: false
    });
  };
  hideTip = val => {
    this.setState({
      showTip: false
    });
  };
  showMusic = () => {
    this.props.actions.showMusic();
  };
  // 组件第一次加载的方法
  render() {
    let { content, size } = this.props.contentN;

    let isPc = !device.mobile();

    return (
      <div>
        {/* 轮播 */}

        <div className={cs("main", { active: this.props.doEdit, pc: isPc })}>
          {!this.props.doEdit &&
            this.state.currentPage !== size &&
            size > 1 && <DownComponent />}
          {this.state.isLoading && <div className="  loadPage">加载中</div>}
          {this.state.isShowReport && (
            <ReportComponent
              doReport={this.doReport}
              hideReport={this.hideReport}
            />
          )}
          {this.props.showMusic && <MusicChooseComponent tplId="1" />}

          {this.state.showTip && (
            <TipComppnent msg={this.state.tipMsg} hideTip={this.hideTip} />
          )}
          {this.props.isOnLine &&
            (this.state.currentPage == size || size == 1) && (
              <div className="go_home_tip">
                <div className="jb" onTouchEnd={this.showReport}>
                  举报
                </div>
                <div
                  className="btn"
                  onClick={e => {
                    this.makeMySelf()
                  }}
                >
                  我也要制作
                </div>
              </div>
            )}

          <div className="swiper-container" ref="asSwiper">
            <div className="swiper-wrapper">{content}</div>
          </div>
          {<MusicComponent isplay="true" />}
          {/* 进度条组件 */}
          {size > 1 && (
            <ProgressComponent
              currentPage={this.state.currentPage}
              size={size}
            />
          )}
        </div>

        {this.props.doEdit && (
          <div className="arrow">
            <div className="left" onTouchEnd={this.doSwiper.bind(this, 1)}>
              <img src={require("./assets/arrow_left.png")} alt="12" />
            </div>
            <div className="right" onTouchEnd={this.doSwiper.bind(this, 2)}>
              <img src={require("./assets/arrow_right.png")} alt="12" />
            </div>
          </div>
        )}
        {this.props.doEdit && (
          <div className="mange">
            <p className="pagedo">
              <span onTouchEnd={this.doCopy}>复制页面</span>
              <span>
                {this.state.currentPage > 0 ? this.state.currentPage : 1}/<b>
                  {size}
                </b>
              </span>
              <span onTouchEnd={this.doDelete}>删除页面</span>
            </p>
            <div className="btnaa">
              <div className="save" onTouchEnd={this.saveH5}>
                保存
              </div>
              <div className="save" onTouchEnd={this.showMusic}>
                选择音乐
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
// 按需加载
const getPage = themeConfig => {
  // let { themeConfig } = this.props;
  let content = [];
  let size = 0;
  // 如果能加载主题文件
  if (
    typeof themeConfig !== "undefined" &&
    !themeConfig.isEmpty() &&
    typeof themeConfig.get("pages") !== "undefined"
  ) {
    // 主题的页数
    size = themeConfig.get("pages").size;
    // 里面的values值
    let values = themeConfig.get("pages").values();
    // 页面类型
    let typeId = themeConfig.get("typeId");
    let num = 0;
    // 遍历生产组件
    for (let i of values) {
      let pageData = i.toJS();
      // 按需加载
      let C = asyncComponent(() =>
        import(`./themes/act${typeId}/${Object.keys(pageData)[0]}`)
      );
      let Co = C ? (
        <C key={num} order={num} page={Object.values(pageData)[0]} />
      ) : (
        ""
      );
      content.push(Co);
      num++;
    }
  } else {
    content = (
      <div
        className="swiper-slide"
        flex="main:center cross:center"
        style={{ color: "#fff" }}
      >
        <ReqModal msg="数据加载中" />
      </div>
    );
  }

  return {
    content: content,
    size: size
  };
};
const mapStateToProps = state => {
  let contentN = getPage(state.getIn(["edit", "themeConfig"]));
  return {
    themeConfig: state.getIn(["edit", "themeConfig"]),
    orderId: state.getIn(["edit", "orderId"]),
    userinfo: state.getIn(["edit", "userinfo"]),
    contentN: contentN,
    doEdit: state.getIn(["edit", "doEdit"]),
    showMusic: state.getIn(["edit", "showMusic"]),
    currentMusic: state.getIn(["edit", "currentMusic"])
  };
};

//将action的所有方法绑定到props上
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators({ ...editAction }, dispatch)
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CpuContainer)
);
