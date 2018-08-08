import React from "react";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import BaseComponent from "../../../../utils/BaseComponent";
import Edit from "../../editComponent";

import "./page.css";
class Page3 extends BaseComponent {
  state = {
    pageType: "page3"
  };
  // 组件会更新
  componentWillUpdate() {}
  componentDidMount() {}
  inimg = name => {
    if (name.length > 16) {
      return name;
    } else {
      return require("./img/" + name);
    }
  };
  render() {
    return (
      <div className="swiper-slide page_container template1_page3_theme">
        <div className="page">
          {/* <!-- 公用背景 --> */}
          <img src={this.inimg("39.png")} alt="" className="bg" />
          <img src={this.inimg("1.png")} alt="" className="pic bg1" />
          <img src={this.inimg("1.png")} alt="" className="pic bg2" />
          <img src={this.inimg("1.png")} alt="" className="pic bg3" />
          <img src={this.inimg("1.png")} alt="" className="pic bg4" />
          <img src={this.inimg("1.png")} alt="" className="pic bg5" />
          <img src={this.inimg("1.png")} alt="" className="pic bg6" />
          <img src={this.inimg("1.png")} alt="" className="pic bg7" />
          <img src={this.inimg("1.png")} alt="" className="pic bg8" />
          <img src={this.inimg("17.png")} alt="" className="pic bg9" />
          <img src={this.inimg("32.png")} alt="" className="pic bg10 animated fadeIn infinite" />
          {/* <!-- 公用头部1 --> */}
          <img
            src={this.inimg("34.png")}
            alt=""
            className="pic top1 ani"
            swiper-animate-effect="fadeInDown"
            swiper-animate-duration="1.8s"
            swiper-animate-delay="0s"
          />
          <img
            src={this.inimg("13.png")}
            alt=""
            className="pic top2 ani"
            swiper-animate-effect="fadeInDown"
            swiper-animate-duration="1.8s"
            swiper-animate-delay=".1s"
          />
          <img
            src={this.inimg("34.png")}
            alt=""
            className="pic top3 ani"
            swiper-animate-effect="fadeInDown"
            swiper-animate-duration="1.8s"
            swiper-animate-delay="0s"
          />
          <img
            src={this.inimg("30.png")}
            alt=""
            className="pic top4 ani"
            swiper-animate-effect="fadeInDown"
            swiper-animate-duration="1.8s"
            swiper-animate-delay=".2s"
          />
          <img
            src={this.inimg("20.png")}
            alt=""
            className="pic top5 ani"
            swiper-animate-effect="fadeInUp"
            swiper-animate-duration="1.8s"
            swiper-animate-delay=".4s"
          />
          <img
            src={this.inimg("34.png")}
            alt=""
            className="pic top6 ani"
            swiper-animate-effect="fadeInDown"
            swiper-animate-duration="1.8s"
            swiper-animate-delay="0s"
          />
          <img
            src={this.inimg("11.png")}
            alt=""
            className="pic top7 ani"
            swiper-animate-effect="fadeInUp"
            swiper-animate-duration="1.8s"
            swiper-animate-delay=".3s"
          />
          {/* <!-- 内容 --> */}
          <img
            src={this.inimg("47.png")}
            alt=""
            className="pic obj1 ani"
            swiper-animate-effect="toSmall"
            swiper-animate-duration="1s"
            swiper-animate-delay=".3s"
          />
          <img
            src={this.inimg("19.png")}
            alt=""
            className="pic obj2 ani"
            swiper-animate-effect="bigASmall"
            swiper-animate-duration="1s"
            swiper-animate-delay=".2s"
          />
          <img
            src={this.inimg("18.png")}
            alt=""
            className="pic obj3 ani"
            swiper-animate-effect="bigASmall"
            swiper-animate-duration="1s"
            swiper-animate-delay=".3s"
          />
          <img
            src={this.inimg("12.png")}
            alt=""
            className="pic obj4 ani"
            swiper-animate-effect="bigASmall"
            swiper-animate-duration="1s"
            swiper-animate-delay=".4s"
          />
          <img
            src={this.inimg("12.png")}
            alt=""
            className="pic obj5 ani"
            swiper-animate-effect="bigASmall"
            swiper-animate-duration="1s"
            swiper-animate-delay=".5s"
          />
          <img
            src={this.inimg("31.png")}
            alt=""
            className="pic obj6 ani"
            swiper-animate-effect="bigASmall"
            swiper-animate-duration="1s"
            swiper-animate-delay=".6s"
          />
          {/* <!-- # --> */}
          {/* <div className="pic obj7 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1s" swiper-animate-delay="1s">亲爱的好闺蜜</div> */}

          {/* <Edit
            type={this.props.page[0].type}
            pos="0"
            pageId={this.props.order}
            pageType={this.state.pageType}
            value={this.props.page[0].value}
            className="pic obj7 ani"
            swiperAnimateEffect="fadeInUp"
            swiperAnimateDuration="1s"
            swiperAnimateDelay="1s"
          /> */}
          {/* <!-- # --> */}
          {/* <div className="pic obj8 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1s" swiper-animate-delay="1.4s">你我相识已有5年多</div> */}

          {/* <Edit
            type={this.props.page[1].type}
            pos="1"
            pageId={this.props.order}
            pageType={this.state.pageType}
            value={this.props.page[1].value}
            className="pic obj8 ani"
            swiperAnimateEffect="fadeInUp"
            swiperAnimateDuration="1s"
            swiperAnimateDelay="1.4s"
          /> */}
          {/* <!-- # --> */}
          {/* <div className="pic obj9 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1s" swiper-animate-delay="1.8s">一起哭，一起笑，一起疯闹</div> */}
          {/* <Edit
            type={this.props.page[4].type}
            pos="4"
            pageId={this.props.order}
            pageType={this.state.pageType}
            value={this.props.page[4].value}
            className="pic obj10 ani"
            swiperAnimateEffect="fadeInUp"
            swiperAnimateDuration="1s"
            swiperAnimateDelay="1.8s"
          />
          <Edit
            type={this.props.page[2].type}
            pos="2"
            pageId={this.props.order}
            pageType={this.state.pageType}
            value={this.props.page[2].value}
            className="pic obj9 ani"
            swiperAnimateEffect="fadeInUp"
            swiperAnimateDuration="1s"
            swiperAnimateDelay="1.8s"
          /> */}
          {/* <!-- # --> */}
          {/* <div className="pic obj10 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1s" swiper-animate-delay="2.2s">感谢成长的路上，有你一直相伴</div> */}

          {/* <!-- # --> */}
          {/* <div className="pic obj11 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1s" swiper-animate-delay="2.6s">记住，我们是永远的好闺蜜</div> */}

          {/* <Edit
            type={this.props.page[3].type}
            pos="3"
            pageId={this.props.order}
            pageType={this.state.pageType}
            value={this.props.page[3].value}
            className="pic obj11 ani"
            swiperAnimateEffect="fadeInUp"
            swiperAnimateDuration="1s"
            swiperAnimateDelay="2.6s"
          /> */}
          <div
            className="pic obj12 ani"
            swiper-animate-effect="fadeInLeft"
            swiper-animate-duration="1s"
            swiper-animate-delay="1s"
          >
            <Edit
              type={this.props.page[0].type}
              pos="0"
              pageId={this.props.order}
              pageType={this.state.pageType}
              value={this.inimg(this.props.page[0].value)}
              className=""
              swiperAnimateEffect="fadeInUp"
              swiperAnimateDuration="1s"
              swiperAnimateDelay=".6s"
            />
          </div>
          {/* <div
            className="pic obj13 ani"
            swiper-animate-effect="toSmall"
            swiper-animate-duration="1s"
            swiper-animate-delay="3.2s"
          >
            <Edit
              type={this.props.page[6].type}
              pos="6"
              pageId={this.props.order}
              pageType={this.state.pageType}
              value={this.inimg(this.props.page[6].value)}
              className=""
              swiperAnimateEffect="fadeInUp"
              swiperAnimateDuration="1s"
              swiperAnimateDelay="2.6s"
            />
          </div> */}
          <img
            src={this.inimg("25.png")}
            alt=""
            className="pic obj14 ani"
            swiper-animate-effect="toSmall"
            swiper-animate-duration="1s"
            swiper-animate-delay="3.6s"
          />
          <img
            src={this.inimg("35.png")}
            alt=""
            className="pic obj15 ani"
            swiper-animate-effect="toSmall"
            swiper-animate-duration="1s"
            swiper-animate-delay="3.8s"
          />
          <img
            src={this.inimg("27.png")}
            alt=""
            className="pic obj16 ani"
            swiper-animate-effect="toSmall"
            swiper-animate-duration="1s"
            swiper-animate-delay="4s"
          />
          <img
            src={this.inimg("5.png")}
            alt=""
            className="pic obj17 ani"
            swiper-animate-effect="toSmall"
            swiper-animate-duration="1s"
            swiper-animate-delay="4.2s"
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    showSidebar: state.getIn(["common", "showSidebar"])
  };
};

//将action的所有方法绑定到props上
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators({}, dispatch)
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Page3));
