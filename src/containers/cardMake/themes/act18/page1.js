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
      <div className="swiper-slide page_container template14_page1_theme">
        {/* <img
          className="bg ani "
          src={this.inimg("1.jpg")}
          alt=""
          swiper-animate-effect="toBig"
          swiper-animate-duration="2s"
          swiper-animate-delay="0s"
        /> */}


          <Edit
          type={this.props.page[3].type}
          pos="3"
          pageId={this.props.order}
          pageType={this.state.pageType}
          value={this.inimg(this.props.page[3].value)}
          // value={this.props.page[3].value}
          className="bg ani "
          swiperAnimateEffect="toBig"
          swiperAnimateDuration="2s"
          swiperAnimateDelay="0s"
        />
        <img
          src={this.inimg("21.png")}
          alt=""
          className="img1 ani"
          swiper-animate-effect="bounceIn"
          swiper-animate-duration="1s"
          swiper-animate-delay="0s"
        />
        <img
          src={this.inimg("2.png")}
          alt=""
          className="img2 ani"
          swiper-animate-effect="fadeIn"
          swiper-animate-duration="1s"
          swiper-animate-delay=".5s"
        />
        {/* <div
          className="img3 ani"
          swiper-animate-effect="fadeIn"
          swiper-animate-duration="2s"
          swiper-animate-delay="0s"
        >
          Wedding
        </div> */}

        <Edit
          type={this.props.page[0].type}
          pos="0"
          pageId={this.props.order}
          pageType={this.state.pageType}
          // value={this.inimg(this.props.page[0].value)}
          value={this.props.page[0].value}
          className="img3 ani "
          swiperAnimateEffect="fadeIn"
          swiperAnimateDuration="2s"
          swiperAnimateDelay="0s"
        />

        {/* <div
          className="img4 ani"
          swiper-animate-effect="fadeIn"
          swiper-animate-duration="2s"
          swiper-animate-delay="0s"
        >
          张志明 & 余春娇
        </div> */}



        <Edit
          type={this.props.page[1].type}
          pos="1"
          pageId={this.props.order}
          pageType={this.state.pageType}
          // value={this.inimg(this.props.page[1].value)}
          value={this.props.page[1].value}
          className="img4 ani "
          swiperAnimateEffect="fadeIn"
          swiperAnimateDuration="2s"
          swiperAnimateDelay="0s"
        />

        <div
          className="img5 ani"
          swiper-animate-effect="fadeIn"
          swiper-animate-duration="2s"
          swiper-animate-delay="0s"
        >
          2018年12月12日 11时30分
        </div>



          <Edit
          type={this.props.page[2].type}
          pos="2"
          pageId={this.props.order}
          pageType={this.state.pageType}
          // value={this.inimg(this.props.page[2].value)}
          value={this.props.page[2].value}
          className="img5 ani "
          swiperAnimateEffect="fadeIn"
          swiperAnimateDuration="2s"
          swiperAnimateDelay="0s"
        />

        <img
          src={this.inimg("2.png")}
          alt=""
          className="img6 ani"
          swiper-animate-effect="fadeIn"
          swiper-animate-duration="2s"
          swiper-animate-delay="0s"
        />
        <div
          className="img7 ani"
          swiper-animate-effect="fadeIn"
          swiper-animate-duration="2s"
          swiper-animate-delay="0s"
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
