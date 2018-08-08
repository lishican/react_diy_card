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
      <div className="swiper-slide page_container template14_page4_theme">
        <div
          className="bg ani"
          swiper-animate-effect="toBig"
          swiper-animate-duration="2s"
          swiper-animate-delay="0s"
        >
          <img className="bg1" src={this.inimg("8.jpg")} alt="" />
          <img className="bg2" src={this.inimg("9.jpg")} alt="" />
          <img className="bg3" src={this.inimg("10.jpg")} alt="" />

          <Edit
            type={this.props.page[0].type}
            pos="0"
            pageId={this.props.order}
            pageType={this.state.pageType}
            value={this.inimg(this.props.page[0].value)}
            // value={this.props.page[0].value}
            className="bg1 "
            swiperAnimateEffect=""
            swiperAnimateDuration=""
            swiperAnimateDelay=""
          />
          <Edit
            type={this.props.page[1].type}
            pos="1"
            pageId={this.props.order}
            pageType={this.state.pageType}
            value={this.inimg(this.props.page[1].value)}
            // value={this.props.page[1].value}
            className="bg2 "
            swiperAnimateEffect=""
            swiperAnimateDuration=""
            swiperAnimateDelay=""
          />
          <Edit
            type={this.props.page[2].type}
            pos="2"
            pageId={this.props.order}
            pageType={this.state.pageType}
            value={this.inimg(this.props.page[2].value)}
            // value={this.props.page[2].value}
            className="bg3"
            swiperAnimateEffect=""
            swiperAnimateDuration=""
            swiperAnimateDelay=""
          />
        </div>

        <div
          className="img1 ani"
          swiper-animate-effect="zoomIn"
          swiper-animate-duration="1s"
          swiper-animate-delay="0s"
        >
          <img
            src={this.inimg("2.png")}
            alt=""
            className="img2 ani"
            swiper-animate-effect="fadeIn"
            swiper-animate-duration="1s"
            swiper-animate-delay="1s"
          />
          {/* <div
        
            alt=""
            className="img3 ani"
            swiper-animate-effect="fadeIn"
            swiper-animate-duration="1s"
            swiper-animate-delay="1s"
          >
          wedding</div> */}

          <Edit
            type={this.props.page[3].type}
            pos="3"
            pageId={this.props.order}
            pageType={this.state.pageType}
            // value={this.inimg(this.props.page[3].value)}
            value={this.props.page[3].value}
            className="img3 ani"
            swiperAnimateEffect="fadeIn"
            swiperAnimateDuration="1s"
            swiperAnimateDelay="1s"
          />
          <img
            src={this.inimg("11.png")}
            alt=""
            className="img4 ani"
            swiper-animate-effect="fadeIn"
            swiper-animate-duration="1s"
            swiper-animate-delay="1s"
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
