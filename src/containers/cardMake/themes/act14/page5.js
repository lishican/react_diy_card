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
      <div className="swiper-slide page_container template14_page5_theme">
        <img className="bg ani" src={this.inimg('2.jpg')} alt=""  swiper-animate-effect="toBig" swiper-animate-duration="2s" swiper-animate-delay="0s" />
        <img src={this.inimg('21.png')} alt="" className="img1 ani" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="0s"
        />
        <img src={this.inimg('22.png')} className="img2 ani"  swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="0.5s" alt="" />
        <img src={this.inimg('3.png')} alt="" className="img3 ani"  swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="0.7s" />
        <div className="img4 ani" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="0.9s">2018年12月12日 11时30分</div>
        <div className="img8 ani" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="1.1s">深圳市罗湖区地王大厦婚礼主题酒店</div>
        <img src={this.inimg('23.png')} className="img9 ani" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="1.3s" alt="" />
        <div className="img10 ani" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="1.5s"> 恭候您的来临！</div>
        <div className="img11 ani"swiper-animate-effect="bounceIn" swiper-animate-duration="1s" swiper-animate-delay="1.7s"></div>
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
