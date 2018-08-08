import React from "react";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import BaseComponent from "../../../../utils/BaseComponent";
import Edit from "../../editComponent";

import "./page.css";
class Page1 extends BaseComponent {
  state = {
    pageType: "page1"
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
      <div className="swiper-slide page_container template3_page1_theme">
        <div className="page">
          <img src={this.inimg("4.png")} alt="" className="bg" />
          <img src={this.inimg("12.png")} alt="" className="pic obj1" />
          <img
            src={this.inimg("13.png")}
            alt=""
            className="pic obj2 ani"
            swiper-animate-effect="toSmall"
            swiper-animate-duration=".5s"
            swiper-animate-delay="0s"
          />
          <img
            src={this.inimg("20.png")}
            alt=""
            className="pic obj3 ani"
            swiper-animate-effect="fadeIn"
            swiper-animate-duration=".8s"
            swiper-animate-delay=".8s"
          />
          <img
            src={this.inimg("1.png")}
            alt=""
            className="pic obj4 ani"
            swiper-animate-effect="toBig"
            swiper-animate-duration=".5s"
            swiper-animate-delay="1s"
          />
          {/* <!-- # --> */}
          {/* <div className="pic obj5 ani" swiper-animate-effect="toSmall" 
        swiper-animate-duration=".8s" swiper-animate-delay="1.4s">范晓冻&韩晓雪</div> */}

          <Edit
            type={this.props.page[0].type}
            pos="0"
            pageId={this.props.order}
            pageType={this.state.pageType}
            value={this.props.page[0].value}
            className="pic obj5 ani"
            swiperAnimateEffect="toSmall"
            swiperAnimateDuration=".8s"
            swiperAnimateDelay="1.4s"
          />
          {/* <div
            className="pic obj6 ani"
            swiper-animate-effect="toBig"
            swiper-animate-duration=".8s"
            swiper-animate-delay="1.6s"
          >
            where someone walk out your life,let then,theyare just ma-ki-ng more
            room for someone else better to walk in
          </div> */}

          <Edit
            type={this.props.page[2].type}
            pos="2"
            pageId={this.props.order}
            pageType={this.state.pageType}
            value={this.props.page[2].value}
            className="pic obj6 ani"
            swiperAnimateEffect="toBig"
            swiperAnimateDuration=".8s"
            swiperAnimateDelay="1.6s"
          />

          <img
            src={this.inimg("23.png")}
            alt=""
            className="pic obj7 ani"
            swiper-animate-effect="roatInRight"
            swiper-animate-duration="1.2s"
            swiper-animate-delay="1.5s"
          />
          <img
            src={this.inimg("31.png")}
            alt=""
            className="pic obj8 ani"
            swiper-animate-effect="roatInLeft"
            swiper-animate-duration="1.2s"
            swiper-animate-delay="1.5s"
          />
          <img
            src={this.inimg("30.png")}
            alt=""
            className="pic obj9 ani"
            swiper-animate-effect="roatInRight"
            swiper-animate-duration="1.2s"
            swiper-animate-delay="1.5s"
          />
          <img
            src={this.inimg("9.png")}
            alt=""
            className="pic obj10 ani"
            swiper-animate-effect="roatInLeft"
            swiper-animate-duration="1.2s"
            swiper-animate-delay="1.5s"
          />
          <img
            src={this.inimg("38.png")}
            alt=""
            className="pic obj11 ani"
            swiper-animate-effect="toSmall"
            swiper-animate-duration=".5s"
            swiper-animate-delay="0s"
          />
          <img
            src={this.inimg("11.png")}
            alt=""
            className="pic obj12 ani"
            swiper-animate-effect="toSmall"
            swiper-animate-duration=".5s"
            swiper-animate-delay="0s"
          />
          <img
            src={this.inimg("34.png")}
            alt=""
            className="pic obj13 ani"
            swiper-animate-effect="toBig"
            swiper-animate-duration=".5s"
            swiper-animate-delay="0s"
          />
          <img
            src={this.inimg("18.png")}
            alt=""
            className="pic obj14 ani"
            swiper-animate-effect="rollIn"
            swiper-animate-duration=".5s"
            swiper-animate-delay="0s"
          />
          <img
            src={this.inimg("33.png")}
            alt=""
            className="pic obj15 ani"
            swiper-animate-effect="toSmall"
            swiper-animate-duration=".5s"
            swiper-animate-delay="0s"
          />
          <img
            src={this.inimg("22.png")}
            alt=""
            className="pic obj16 ani"
            swiper-animate-effect="toDownRoat"
            swiper-animate-duration=".8s"
            swiper-animate-delay="0s"
          />
          <img
            src={this.inimg("22.png")}
            alt=""
            className="pic obj17 ani"
            swiper-animate-effect="toDownRoat"
            swiper-animate-duration=".8s"
            swiper-animate-delay=".2s"
          />
          <img
            src={this.inimg("17.png")}
            alt=""
            className="pic obj18 ani"
            swiper-animate-effect="toDownRoat"
            swiper-animate-duration=".8s"
            swiper-animate-delay=".4s"
          />
          <img
            src={this.inimg("14.png")}
            alt=""
            className="pic obj19 ani"
            swiper-animate-effect="toDownRoat"
            swiper-animate-duration=".8s"
            swiper-animate-delay=".6s"
          />
          <img
            src={this.inimg("27.png")}
            alt=""
            className="pic obj20 ani"
            swiper-animate-effect="toDownRoat"
            swiper-animate-duration=".8s"
            swiper-animate-delay=".8s"
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Page1));
