import React from "react";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import BaseComponent from "../../../../utils/BaseComponent";
import Edit from "../../editComponent";

import "./page.css";
class Page4 extends BaseComponent {
  state = {
    pageType: "page4"
  };
  // 组件会更新
  componentWillUpdate() {}
  componentDidMount() {}
  inimg = name => {
    if (name.length > 10) {
      return name;
    } else {
      return require("./img/" + name);
    }
  };
  render() {
    return (
      <div className="swiper-slide page_container template3_page4_theme">
        <div className="page">
          <img src={this.inimg("4.png")} alt="" className="bg" />
          <img
            src={this.inimg("22.png")}
            alt=""
            className="pic obj26 ani"
            swiper-animate-effect="toDownRoat"
            swiper-animate-duration=".8s"
            swiper-animate-delay="0s"
          />
          <img
            src={this.inimg("22.png")}
            alt=""
            className="pic obj27 ani"
            swiper-animate-effect="toDownRoat"
            swiper-animate-duration=".8s"
            swiper-animate-delay=".2s"
          />
          <img
            src={this.inimg("17.png")}
            alt=""
            className="pic obj28 ani"
            swiper-animate-effect="toDownRoat"
            swiper-animate-duration="1.8s"
            swiper-animate-delay=".4s"
          />
          <img
            src={this.inimg("14.png")}
            alt=""
            className="pic obj29 ani"
            swiper-animate-effect="toDownRoat"
            swiper-animate-duration="1.8s"
            swiper-animate-delay=".6s"
          />
          <img
            src={this.inimg("27.png")}
            alt=""
            className="pic obj30 ani"
            swiper-animate-effect="toDownRoat"
            swiper-animate-duration="1.8s"
            swiper-animate-delay=".8s"
          />
          <img
            src={this.inimg("34.png")}
            alt=""
            className="pic obj1 ani"
            swiper-animate-effect="fadeInRight"
            swiper-animate-duration=".6s"
            swiper-animate-delay="1s"
          />
          <img
            src={this.inimg("13.png")}
            alt=""
            className="pic obj2 ani"
            swiper-animate-effect="toSmall"
            swiper-animate-duration=".8s"
            swiper-animate-delay="0s"
          />
          <img
            src={this.inimg("21.png")}
            alt=""
            className="pic obj3 ani"
            swiper-animate-effect="toSmall"
            swiper-animate-duration=".8s"
            swiper-animate-delay="0s"
          />
          <img
            src={this.inimg("10.png")}
            alt=""
            className="pic obj4 ani"
            swiper-animate-effect="toSmall"
            swiper-animate-duration=".8s"
            swiper-animate-delay="0s"
          />
          {/* <!-- # --> */}
          {/* <img
            src={this.inimg("46.png")}
            alt=""
            className="pic obj5 ani"
            swiper-animate-effect="fadeInRight"
            swiper-animate-duration=".6s"
            swiper-animate-delay="1.6s"
          /> */}

          <Edit
            type={this.props.page[0].type}
            pos="0"
            pageId={this.props.order}
            pageType={this.state.pageType}
            value={this.inimg(this.props.page[0].value)}
            className="pic obj5 ani"
            swiperAnimateEffect="fadeInRight"
            swiperAnimateDuration="1s"
            swiperAnimateDelay="1.6s"
          />

          {/* <!-- # --> */}
          {/* <img
            src={this.inimg("43.png")}
            alt=""
            className="pic obj9 ani"
            swiper-animate-effect="fadeInLeft"
            swiper-animate-duration=".6s"
            swiper-animate-delay="1.6s"
          /> */}
          <Edit
            type={this.props.page[1].type}
            pos="1"
            pageId={this.props.order}
            pageType={this.state.pageType}
            value={this.inimg(this.props.page[1].value)}
            className="pic obj9 ani"
            swiperAnimateEffect="fadeInLeft"
            swiperAnimateDuration="1s"
            swiperAnimateDelay="1.6s"
          />

          {/* <!-- # --> */}
          {/* <div
            className="pic obj10 ani"
            swiper-animate-effect="fadeIn"
            swiper-animate-duration="1.5s"
            swiper-animate-delay="2.2s"
          >
            {" "}
            如果可以，真的希望有一天我就是你想要等候的那个人，曾让你憧憬过白头偕老的那个。
          </div> */}

          <Edit
            type={this.props.page[2].type}
            pos="2"
            pageId={this.props.order}
            pageType={this.state.pageType}
            value={this.props.page[2].value}
            className="pic obj10 ani"
            swiperAnimateEffect="fadeIn"
            swiperAnimateDuration="1.5s"
            swiperAnimateDelay="2.2s"
          />

          <img
            src={this.inimg("16.png")}
            alt=""
            className="pic obj11 ani"
            swiper-animate-effect="toSmallInt"
            swiper-animate-duration="2.6s"
            swiper-animate-delay="1.6s"
          />
          <img
            src={this.inimg("29.png")}
            alt=""
            className="pic obj12 ani"
            swiper-animate-effect="toSmallInt"
            swiper-animate-duration="2.6s"
            swiper-animate-delay="1.8s"
          />
          <img
            src={this.inimg("24.png")}
            alt=""
            className="pic obj13 ani"
            swiper-animate-effect="toSmallInt"
            swiper-animate-duration="2.6s"
            swiper-animate-delay="2s"
          />
          <img
            src={this.inimg("28.png")}
            alt=""
            className="pic obj14 ani"
            swiper-animate-effect="toSmallInt"
            swiper-animate-duration="2.6s"
            swiper-animate-delay="2.2s"
          />
          {/* <!-- # --> */}
          {/* <div
            className="pic obj15 ani"
            swiper-animate-effect="fadeInDown"
            swiper-animate-duration=".6s"
            swiper-animate-delay="2.6s"
          >
            感恩·遇见
          </div> */}
          {/* <img
            src={this.inimg("36.png")}
            alt=""
            className="pic obj19 ani"
            swiper-animate-effect="toSmall"
            swiper-animate-duration="2.6s"
            swiper-animate-delay="2s"
          /> */}
          <img
            src={this.inimg("38.png")}
            alt=""
            className="pic obj20 ani"
            swiper-animate-effect="toSmall"
            swiper-animate-duration="2.6s"
            swiper-animate-delay="1s"
          />
          <img
            src={this.inimg("11.png")}
            alt=""
            className="pic obj21 ani"
            swiper-animate-effect="toSmall"
            swiper-animate-duration="2.6s"
            swiper-animate-delay="1s"
          />
          <img
            src={this.inimg("33.png")}
            alt=""
            className="pic obj22 ani"
            swiper-animate-effect="toSmall"
            swiper-animate-duration="2.6s"
            swiper-animate-delay="1s"
          />
          <img
            src={this.inimg("18.png")}
            alt=""
            className="pic obj23 ani"
            swiper-animate-effect="rotateInDownRight"
            swiper-animate-duration=".6s"
            swiper-animate-delay="1s"
          />
          <img
            src={this.inimg("12.png")}
            alt=""
            className="pic obj24 ani"
            swiper-animate-effect="fadeInDown"
            swiper-animate-duration=".6s"
            swiper-animate-delay="1s"
          />
          <img
            src={this.inimg("6.png")}
            alt=""
            className="pic obj25 ani"
            swiper-animate-effect="fadeInUp"
            swiper-animate-duration=".6s"
            swiper-animate-delay="1s"
          />
          {/* <!-- # --> */}
          {/* <img
            src={this.inimg("45.png")}
            alt=""
            className="pic obj31 ani"
            swiper-animate-effect="toSmall"
            swiper-animate-duration=".6s"
            swiper-animate-delay="1.6s"
          /> */}
          {/* <Edit
            type={this.props.page[3].type}
            pos="3"
            pageId={this.props.order}
            pageType={this.state.pageType}
            value={this.inimg(this.props.page[3].value)}
            className="pic obj31 ani"
            swiperAnimateEffect="toSmall"
            swiperAnimateDuration="1s"
            swiperAnimateDelay="1.6s"
          /> */}

          <img
            src={this.inimg("2.png")}
            alt=""
            className="pic obj35 ani"
            swiper-animate-effect="toSmall"
            swiper-animate-duration=".6s"
            swiper-animate-delay="1.6s"
          />
          <img
            src={this.inimg("26.png")}
            alt=""
            className="pic obj36 ani"
            swiper-animate-effect="toSmall"
            swiper-animate-duration=".6s"
            swiper-animate-delay="1.7s"
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Page4));
