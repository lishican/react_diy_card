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
      <div className="swiper-slide page_container template5_page2_theme">
        <img className="bg" src={this.inimg("7.jpg")} alt="" />
        <img src={this.inimg("21.png")} alt="" className="img1 ani" swiper-animate-effect="bounceIn" swiper-animate-duration="1s" swiper-animate-delay="0s"
        />
        <img src={this.inimg("14.png")} alt="" className="img2 ani" swiper-animate-effect="bounceIn" swiper-animate-duration="1s" swiper-animate-delay="0s"
        />
        <img src={this.inimg("9.png")} alt=""  className="img3 toCircle"/>
        <img src={this.inimg("12.png")} alt="" className="img4 toCircle" />
        <img src={this.inimg("17.png")} alt="" className="img5 toCircle" />
        <img src={this.inimg("19.png")} alt="" className="img6 toCircle" />
        <img src={this.inimg("17.png")} alt="" className="img7 toCircle" />
        <img src={this.inimg("19.png")} alt="" className="img8 toCircle" />

        {/* <img src={this.inimg("13.png")} alt="" className="img9 ani" swiper-animate-effect="slideInRight" swiper-animate-duration="1s" swiper-animate-delay="0s" /> */}
     
        <Edit
            type={this.props.page[2].type}
            pos="2"
            pageId={this.props.order}
            pageType={this.state.pageType}
            value={this.inimg(this.props.page[2].value)}
            className="img9 ani"
            swiperAnimateEffect="fadeInLeft"
            swiperAnimateDuration="1s"
            swiperAnimateDelay="0s"
          />
{/* 
        <Edit
            type={this.props.page[0].type}
            pos="0"
            pageId={this.props.order}
            pageType={this.state.pageType}
            value={this.props.page[0].value}
            className="img10 ani"
            swiperAnimateEffect="slideInDown"
            swiperAnimateDuration="2s"
            swiperAnimateDelay="0s"
          /> */}
    

        <Edit
            type={this.props.page[1].type}
            pos="1"
            pageId={this.props.order}
            pageType={this.state.pageType}
            value={this.props.page[1].value}
            className="img11 ani"
            swiperAnimateEffect="slideInUp"
            swiperAnimateDuration="2s"
            swiperAnimateDelay="0s"
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Page2));
{
  /* <Edit
type={this.props.page[0].type}
pos="0"
pageId={this.props.order}
pageType={this.state.pageType}
value={this.props.page[0].value}
className="part text ani"
swiperAnimateEffect="fadeIn"
swiperAnimateDuration="0.5s"
swiperAnimateDelay="0s"
/> */
}
