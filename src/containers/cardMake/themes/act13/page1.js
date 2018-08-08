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
      <div className="swiper-slide page_container template7_page1_theme">
        <div className="bg">
          <img src={this.inimg("14.jpg")} alt="" />
        </div>
        <div className="bg2">
          <img src={this.inimg("17.gif")} alt="" />
        </div>

        <img
          className="img1 ani"
          swiper-animate-effect="slideInUp"
          swiper-animate-duration="0.5s"
          swiper-animate-delay="0s"
          src={this.inimg("16.png")}
          alt=""
        />

        <img
          className="img2 ani"
          swiper-animate-effect="slideInLeft"
          swiper-animate-duration="0.5s"
          swiper-animate-delay="0s"
          src={this.inimg("6.png")}
          alt=""
        />

        <img
          className="img3 ani "
          swiper-animate-effect="slideInRight"
          swiper-animate-duration="0.5s"
          swiper-animate-delay="0s"
          src={this.inimg("6.png")}
          alt=""
        />

        <img
          className="img4 ani"
          swiper-animate-effect="zoomIn"
          swiper-animate-duration="0.5s"
          swiper-animate-delay="0s"
          src={this.inimg("4.png")}
          alt=""
        />
        <img
          className="img5 ani"
          swiper-animate-effect="rotateIn"
          swiper-animate-duration="0.5s"
          swiper-animate-delay="0s"
          src={this.inimg("17.png")}
          alt=""
        />

        <Edit
          type={this.props.page[0].type}
          pos="0"
          pageId={this.props.order}
          pageType={this.state.pageType}
          value={this.props.page[0].value}
          className="img8 ani"
          swiperAnimateEffect="fadeIn"
          swiperAnimateDuration="0.5s"
          swiperAnimateDelay=".5s"
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
