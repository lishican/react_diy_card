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
      <div className="swiper-slide page_container template1_page6_theme">
        <div className="page">
          <img src={this.inimg("8.png")} alt="" className="bg" />
          <img
            src={this.inimg("69.png")}
            alt=""
            className="pic obj1 ani"
            swiper-animate-effect="toBig"
            swiper-animate-duration="1s"
            swiper-animate-delay="0s"
          />

          <Edit
            type={this.props.page[0].type}
            pos="0"
            pageId={this.props.order}
            pageType={this.state.pageType}
            value={this.inimg(this.props.page[0].value)}
            className="pic obj2 ani"
            swiperAnimateEffect="toSmall"
            swiperAnimateDuration="1s"
            swiperAnimateDelay="0s"
          />
          <img
            src={this.inimg("36.png")}
            alt=""
            className="pic obj3 ani"
            swiper-animate-effect="toSmall"
            swiper-animate-duration="1s"
            swiper-animate-delay=".1s"
          />
          <img
            src={this.inimg("17.png")}
            alt=""
            className="pic obj4 ani"
            swiper-animate-effect="toSmall"
            swiper-animate-duration="1s"
            swiper-animate-delay=".1s"
          />
          <img
            src={this.inimg("30.png")}
            alt=""
            className="pic obj5 ani"
            swiper-animate-effect="toSmall"
            swiper-animate-duration="1s"
            swiper-animate-delay=".3s"
          />
          <img
            src={this.inimg("42.png")}
            alt=""
            className="pic obj6 ani"
            swiper-animate-effect="toSmall"
            swiper-animate-duration="1s"
            swiper-animate-delay=".4s"
          />
          <img
            src={this.inimg("45.png")}
            alt=""
            className="pic obj7 ani"
            swiper-animate-effect="toSmall"
            swiper-animate-duration="1s"
            swiper-animate-delay=".6s"
          />
          <img
            src={this.inimg("6.png")}
            alt=""
            className="pic obj8 ani"
            swiper-animate-effect="toSmall"
            swiper-animate-duration="1s"
            swiper-animate-delay=".8s"
          />
          <img
            src={this.inimg("39.png")}
            alt=""
            className="pic obj9 ani"
            swiper-animate-effect="toSmall"
            swiper-animate-duration="1s"
            swiper-animate-delay="1s"
          />

          <Edit
            type={this.props.page[1].type}
            pos="1"
            pageId={this.props.order}
            pageType={this.state.pageType}
            value={this.props.page[1].value}
            className="pic obj10 ani"
            swiperAnimateEffect="fadeInUp"
            swiperAnimateDuration="1s"
            swiperAnimateDelay="1.2s"
          />

          {/* <Edit
            type={this.props.page[2].type}
            pos="2"
            pageId={this.props.order}
            pageType={this.state.pageType}
            value={this.props.page[2].value}
            className="pic obj11 ani"
            swiperAnimateEffect="fadeInUp"
            swiperAnimateDuration="1s"
            swiperAnimateDelay="1.4s"
          />

          <Edit
            type={this.props.page[3].type}
            pos="3"
            pageId={this.props.order}
            pageType={this.state.pageType}
            value={this.props.page[3].value}
            className="pic obj12 ani"
            swiperAnimateEffect="fadeInUp"
            swiperAnimateDuration="1s"
            swiperAnimateDelay="1.6s"
          /> */}
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
