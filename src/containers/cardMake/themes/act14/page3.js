import React from "react";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import BaseComponent from "../../../../utils/BaseComponent";
import Edit from "../../editComponent";

import "./page.css";
class Page1 extends BaseComponent {
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
      <div className="swiper-slide page_container template14_page3_theme">
        <div
          className="bg ani"
          swiper-animate-effect="toBig"
          swiper-animate-duration="2s"
          swiper-animate-delay="0s"
        >
          {/* <img className="bg1" src={this.inimg("4.jpg")} alt="" />
          <img className="bg2" src={this.inimg("5.jpg")} alt="" /> */}

          <Edit
            type={this.props.page[0].type}
            pos="0"
            pageId={this.props.order}
            pageType={this.state.pageType}
            value={this.inimg(this.props.page[0].value)}
            // value={this.props.page[0].value}
            className="bg1 ani "
            swiperAnimateEffect=""
            swiperAnimateDuration=""
            swiperAnimateDelay=""
          />
          <Edit
            type={this.props.page[0].type}
            pos="0"
            pageId={this.props.order}
            pageType={this.state.pageType}
            value={this.inimg(this.props.page[0].value)}
            // value={this.props.page[0].value}
            className="bg2  "
            swiperAnimateEffect=""
            swiperAnimateDuration=""
            swiperAnimateDelay=""
          />
        </div>
        <img
          src={this.inimg("21.png")}
          alt=""
          className="img1 ani"
          swiper-animate-effect="bounceIn"
          swiper-animate-duration="1s"
          swiper-animate-delay="0s"
        />

        {/* <div
          className="img4 ani"
          swiper-animate-effect="bounceIn"
          swiper-animate-duration="1s"
          swiper-animate-delay="1s"
        >
          weding
        </div> */}

         <Edit
            type={this.props.page[2].type}
            pos="2"
            pageId={this.props.order}
            pageType={this.state.pageType}
            // value={this.inimg(this.props.page[2].value)}
            value={this.props.page[2].value}
            className="img4 ani  "
            swiperAnimateEffect="bounceIn"
            swiperAnimateDuration="1s"
            swiperAnimateDelay="1s"
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
