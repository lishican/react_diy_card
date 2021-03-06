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
      <div className="swiper-slide page_container template5_page1_theme">
        <img className="bg" src={this.inimg("7.jpg")} alt="" />
        <Edit
          type={this.props.page[2].type}
          pos="2"
          pageId={this.props.order}
          pageType={this.state.pageType}
          value={this.props.page[2].value}
          className=" img1 ani"
          swiperAnimateEffect="sildeInUp"
          swiperAnimateDuration="1s"
          swiperAnimateDelay="1s"
        />
        <img className="img2  toBig" src={this.inimg("18.png")} alt="" />

        {/* <img
          className="img3 ani"
          src={this.inimg("10.png")}
          alt=""
          swiper-animate-effect="slideInDown"
          swiper-animate-duration="1s"
          swiper-animate-delay="0s"
        /> */}
        {/* <div className="img3">这一次我不再错过</div> */}
        <Edit
            type={this.props.page[3].type}
            pos="3"
            pageId={this.props.order}
            pageType={this.state.pageType}
            value={this.props.page[3].value}
            className="img3 ani"
            swiperAnimateEffect="fadeInUp"
            swiperAnimateDuration="1s"
            swiperAnimateDelay="0s"
          />

        <div
          className="div1 ani"
          swiper-animate-effect="fadeInUp"
          swiper-animate-duration="1s"
          swiper-animate-delay="0s"
        >
          <Edit
            type={this.props.page[0].type}
            pos="0"
            pageId={this.props.order}
            pageType={this.state.pageType}
            value={this.inimg(this.props.page[0].value)}
            className="img4 ani"
            swiperAnimateEffect="fadeInUp"
            swiperAnimateDuration="1s"
            swiperAnimateDelay="0s"
          />
        </div>
        {/* <Edit
          type={this.props.page[1].type}
          pos="1"
          pageId={this.props.order}
          pageType={this.state.pageType}
          value={this.props.page[1].value}
          className=" img5 ani"
          swiperAnimateEffect="fadeInUp"
          swiperAnimateDuration="1s"
          swiperAnimateDelay=".5s"
        /> */}
        {/* <div className="img5">xxxx品牌宣传会</div> */}
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
