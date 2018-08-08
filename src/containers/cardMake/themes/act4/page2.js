import React from "react";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import BaseComponent from "../../../../utils/BaseComponent";
import Edit from "../../editComponent";

import "./page.css";
class Page2 extends BaseComponent {
  state = {
    pageType: "page2"
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
      <div className="swiper-slide page_container template4_page2_theme">
        <img className="bg" src={this.inimg("2.png")} alt="" />
        {/* <img
          src={this.inimg("13.png")}
          alt=""
          className="img1 ani"
          swiper-animate-effect="rotateInDownLeft"
          swiper-animate-duration="1s"
          swiper-animate-delay="0"
        /> */}

<Edit
          type={this.props.page[1].type}
          pos="1"
          pageId={this.props.order}
          pageType={this.state.pageType}
          value={this.props.page[1].value}
          className="img1 ani"
          swiperAnimateEffect="rotateInDownLeft"
          swiperAnimateDuration="1s"
          swiperAnimateDelay="0"
        />


        <img
          src={this.inimg("5.png")}
          alt=""
          className="img2 ani"
          swiper-animate-effect="rotateInUpRight"
          swiper-animate-duration="1s"
          swiper-animate-delay="0"
        />
        <img
          src={this.inimg("1.png")}
          alt=""
          className="img3 ani"
          swiper-animate-effect="slideInLeft"
          swiper-animate-duration="1s"
          swiper-animate-delay="0"
        />
       

<Edit
          type={this.props.page[2].type}
          pos="2"
          pageId={this.props.order}
          pageType={this.state.pageType}
          value={this.props.page[2].value}
          className="img4 ani"
          swiperAnimateEffect="rotateInUpLeft"
          swiperAnimateDuration="1s"
          swiperAnimateDelay="0"
        />

        <img
          src={this.inimg("12.png")}
          alt=""
          className="img5 ani"
          swiper-animate-effect="bounceIn"
          swiper-animate-duration="1s"
          swiper-animate-delay="0"
        />
        {/* <!--  --> */}
        <div
          className="img6 ani"
          swiper-animate-effect="zoomIn"
          swiper-animate-duration="1s"
          swiper-animate-delay="0"
        >
          <Edit
            type={this.props.page[0].type}
            pos="0"
            pageId={this.props.order}
            pageType={this.state.pageType}
            value={this.inimg(this.props.page[0].value)}
            className="pic obj3 ani"
            swiperAnimateEffect="bounceIn"
            swiperAnimateDuration="1s"
            swiperAnimateDelay="1s"
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Page2));
