import React from "react";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import BaseComponent from "../../../../utils/BaseComponent";
import Edit from "../../editComponent";

import "./page.css";
class Page1 extends BaseComponent {
  state = {
    pageType: "page5"
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
      <div className="swiper-slide page_container template7_page5_theme">
        <div className="bg">
          <img src={this.inimg("14.jpg")} alt="" />
        </div>
        <div className="bg2">
          <img src={this.inimg("17.gif")} alt="" />
        </div>

        <img
          className="img5 ani"
          swiper-animate-effect="rotateIn"
          swiper-animate-duration="0.5s"
          swiper-animate-delay="0s"
          src={this.inimg("17.png")}
          alt=""
        />
        <img
          className="img6 ani"
          swiper-animate-effect="fadeIn"
          swiper-animate-duration="0.5s"
          swiper-animate-delay="0s"
          src={this.inimg("7.png")}
          alt=""
        />
        {/* 
        <img
          class="img7 ani"
          swiper-animate-effect="zoomIn"
          swiper-animate-duration="0.5s"
          swiper-animate-delay="0s"
          src={this.inimg("9.jpg")}
          alt=""
        /> */}

        <Edit
          type={this.props.page[1].type}
          pos="1"
          pageId={this.props.order}
          pageType={this.state.pageType}
          value={this.inimg(this.props.page[1].value)}
          className="img7 ani "
          swiperAnimateEffect="zoomIn"
          swiperAnimateDuration="0.5s"
          swiperAnimateDelay="0s"
        />

        <Edit
          type={this.props.page[0].type}
          pos="0"
          pageId={this.props.order}
          pageType={this.state.pageType}
          value={this.props.page[0].value}
          className="img10 ani"
          swiperAnimateEffect="fadeIn"
          swiperAnimateDuration="0.5s"
          swiperAnimateDelay=".35s"
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
