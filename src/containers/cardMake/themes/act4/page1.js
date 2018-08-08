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
      <div className="swiper-slide page_container template4_page1_theme">
        <img className="bg" src={this.inimg("2.png")} alt="" />
        <img
          src={this.inimg("7.png")}
          alt=""
          className="img1 ani"
          swiper-animate-effect="slideInDown"
          swiper-animate-duration="1s"
          swiper-animate-delay="0"
        />
        <img
          src={this.inimg("7.png")}
          alt=""
          className="img1 ani"
          swiper-animate-effect="slideInUp"
          swiper-animate-duration="1s"
          swiper-animate-delay="0"
        />
        {/* <img
          src={this.inimg("8.png")}
          alt=""
          className="img2 ani"
          swiper-animate-effect="slideInDown"
          swiper-animate-duration="1s"
          swiper-animate-delay="0"
        /> */}

        <Edit
          type={this.props.page[0].type}
          pos="0"
          pageId={this.props.order}
          pageType={this.state.pageType}
          value={this.props.page[0].value}
          className="img2 ani"
          swiperAnimateEffect="slideInDown"
          swiperAnimateDuration="1s"
          swiperAnimateDelay="0"
        />

        <Edit
          type={this.props.page[1].type}
          pos="1"
          pageId={this.props.order}
          pageType={this.state.pageType}
          value={this.props.page[1].value}
          className="img3 ani"
          swiperAnimateEffect="slideInLeft"
          swiperAnimateDuration="1s"
          swiperAnimateDelay="0"
        />

        <Edit
          type={this.props.page[1].type}
          pos="1"
          pageId={this.props.order}
          pageType={this.state.pageType}
          value={this.props.page[1].value}
          className="img3 ani"
          swiperAnimateEffect="slideInRight"
          swiperAnimateDuration="1s"
          swiperAnimateDelay="0"
        />

        <img
          src={this.inimg("4.png")}
          alt=""
          className="img4 ani"
          swiper-animate-effect="zoomIn"
          swiper-animate-duration="1s"
          swiper-animate-delay="0"
        />
        <img
          src={this.inimg("6.png")}
          alt=""
          className="img5 ani"
          swiper-animate-effect="zoomIn"
          swiper-animate-duration="1s"
          swiper-animate-delay="0"
        />
        <img
          src={this.inimg("3.png")}
          alt=""
          className="img6 ani"
          swiper-animate-effect="zoomIn"
          swiper-animate-duration="1s"
          swiper-animate-delay="0"
        />
        <img
          src={this.inimg("3.png")}
          alt=""
          className="img7 ani"
          swiper-animate-effect="zoomIn"
          swiper-animate-duration="1s"
          swiper-animate-delay="0"
        />
        <img
          src={this.inimg("3.png")}
          alt=""
          className="img8 ani"
          swiper-animate-effect="zoomIn"
          swiper-animate-duration="1s"
          swiper-animate-delay="0"
        />
        <img
          src={this.inimg("3.png")}
          alt=""
          className="img9 ani"
          swiper-animate-effect="zoomIn"
          swiper-animate-duration="1s"
          swiper-animate-delay="0"
        />
        <img
          src={this.inimg("9.png")}
          alt=""
          className="img10 ani"
          swiper-animate-effect="slideInUp"
          swiper-animate-duration="1s"
          swiper-animate-delay="0"
        />
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
