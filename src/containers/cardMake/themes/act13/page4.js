import React from "react";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import BaseComponent from "../../../../utils/BaseComponent";
import Edit from "../../editComponent";

import "./page.css";
class Page1 extends BaseComponent {
  state = {
    pageType: "page4"
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
      <div className="swiper-slide page_container template7_page4_theme">
        <div className="bg">
          <img src={this.inimg("14.jpg")} alt="" />
        </div>
        <div className="bg2">
          <img src={this.inimg("17.gif")} alt="" />
        </div>

        <img
          className="img5 ani"
          src={this.inimg("17.png")}
          swiper-animate-effect="rotateIn"
          swiper-animate-duration="0.5s"
          swiper-animate-delay="0s"
          alt=""
        />

        <img className="img6 ani" src={this.inimg("5.png")} swiper-animate-effect="zoomIn" swiper-animate-duration="0.5s" swiper-animate-delay=".3s"
         alt="" />

        <div
          className="img7 ani"
          swiper-animate-effect="fadeInLeft"
          swiper-animate-duration="0.5s"
          swiper-animate-delay=".63s"
        >
          <Edit
            type={this.props.page[1].type}
            pos="1"
            pageId={this.props.order}
            pageType={this.state.pageType}
            value={this.inimg(this.props.page[1].value)}
            className=""
            swiperAnimateEffect=""
            swiperAnimateDuration=""
            swiperAnimateDelay=""
          />
        </div>

        <div
          className="img8 ani"
          swiper-animate-effect="fadeInLeft"
          swiper-animate-duration="0.5s"
          swiper-animate-delay=".63s"
        >
          <Edit
            type={this.props.page[2].type}
            pos="2"
            pageId={this.props.order}
            pageType={this.state.pageType}
            value={this.inimg(this.props.page[2].value)}
            className=" "
            swiperAnimateEffect=""
            swiperAnimateDuration=""
            swiperAnimateDelay=""
          />
        </div>

        <img
          className="img9 ani"
          swiper-animate-effect="fadeInRight"
          swiper-animate-duration="0.5s"
          swiper-animate-delay=".63s"
          src={this.inimg("10.png")}
          alt=""
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
          swiperAnimateDelay=".85s"
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
