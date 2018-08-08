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
      <div className="swiper-slide page_container template3_page2_theme">
        <div className="page">
          <img src={this.inimg("4.png")} alt="" className="bg" />
          <img
            src={this.inimg("22.png")}
            alt=""
            className="pic obj26 ani"
            swiper-animate-effect="toDownRoat"
            swiper-animate-duration=".8s"
            swiper-animate-delay="0s"
          />
          <img
            src={this.inimg("22.png")}
            alt=""
            className="pic obj27 ani"
            swiper-animate-effect="toDownRoat"
            swiper-animate-duration=".8s"
            swiper-animate-delay=".2s"
          />
          <img
            src={this.inimg("17.png")}
            alt=""
            className="pic obj28 ani"
            swiper-animate-effect="toDownRoat"
            swiper-animate-duration=".8s"
            swiper-animate-delay=".4s"
          />
          <img
            src={this.inimg("14.png")}
            alt=""
            className="pic obj29 ani"
            swiper-animate-effect="toDownRoat"
            swiper-animate-duration=".8s"
            swiper-animate-delay=".6s"
          />
          <img
            src={this.inimg("27.png")}
            alt=""
            className="pic obj30 ani"
            swiper-animate-effect="toDownRoat"
            swiper-animate-duration=".8s"
            swiper-animate-delay=".8s"
          />
          <img
            src={this.inimg("34.png")}
            alt=""
            className="pic obj1 ani"
            swiper-animate-effect="fadeInRight"
            swiper-animate-duration=".4s"
            swiper-animate-delay="1s"
          />
          <img
            src={this.inimg("13.png")}
            alt=""
            className="pic obj2 ani"
            swiper-animate-effect="toSmall"
            swiper-animate-duration=".8s"
            swiper-animate-delay="0s"
          />
          <img
            src={this.inimg("21.png")}
            alt=""
            className="pic obj3 ani"
            swiper-animate-effect="toSmall"
            swiper-animate-duration=".8s"
            swiper-animate-delay="0s"
          />
          <img
            src={this.inimg("10.png")}
            alt=""
            className="pic obj4 ani"
            swiper-animate-effect="toSmall"
            swiper-animate-duration=".8s"
            swiper-animate-delay="0s"
          />
          <img
            src={this.inimg("5.png")}
            alt=""
            className="pic obj5 ani"
            swiper-animate-effect="bigASmall"
            swiper-animate-duration="2.4s"
            swiper-animate-delay="1s"
          />
          <img
            src={this.inimg("25.png")}
            alt=""
            className="pic obj6 ani"
            swiper-animate-effect="bigASmall"
            swiper-animate-duration="2.4s"
            swiper-animate-delay="1.2s"
          />
          <img
            src={this.inimg("37.png")}
            alt=""
            className="pic obj7 ani"
            swiper-animate-effect="bigASmall"
            swiper-animate-duration="2.4s"
            swiper-animate-delay="1.4s"
          />
          <img
            src={this.inimg("19.png")}
            alt=""
            className="pic obj8 ani"
            swiper-animate-effect="bigASmall"
            swiper-animate-duration="2.4s"
            swiper-animate-delay="1.6s"
         />


          {/* <!-- # --> */}
          {/* <img
            src={this.inimg("15.png")}
            alt=""
            className="pic obj9 ani"
            swiper-animate-effect="toSmall"
            swiper-animate-duration=".4s"
            swiper-animate-delay="1.6s"
          /> */}

          <Edit
            type={this.props.page[0].type}
            pos="0"
            pageId={this.props.order}
            pageType={this.state.pageType}
            value={this.inimg(this.props.page[0].value)}
            className="pic obj9 ani"
            swiperAnimateEffect="toSmall"
            swiperAnimateDuration="2s"
            swiperAnimateDelay="1.6s"
          />
          {/* <!-- # --> */}
          {/* <div
            className="pic obj10 ani"
            swiper-animate-effect="fadeIn"
            swiper-animate-duration="1.5s"
            swiper-animate-delay="2s"
          >
            于千万人之中遇见你所遇见的人，于千万年之中，时间的噩无涯的荒野里，没有早一步，也没有晚一步，刚巧赶上了，那也没有别的话可说，惟有轻轻地问一声:"噢，原来你也在这这里吗？"
          </div> */}

          {/* <Edit
            type={this.props.page[1].type}
            pos="1"
            pageId={this.props.order}
            pageType={this.state.pageType}
            value={this.props.page[1].value}
            className="pic obj10 ani"
            swiperAnimateEffect="fadeIn"
            swiperAnimateDuration="1.5s"
            swiperAnimateDelay="2s"
          /> */}

          <img
            src={this.inimg("16.png")}
            alt=""
            className="pic obj11 ani"
            swiper-animate-effect="toSmall"
            swiper-animate-duration="2.4s"
            swiper-animate-delay="1.6s"
          />
          <img
            src={this.inimg("29.png")}
            alt=""
            className="pic obj12 ani"
            swiper-animate-effect="toSmall"
            swiper-animate-duration="2.4s"
            swiper-animate-delay="1.6s"
          />
          <img
            src={this.inimg("24.png")}
            alt=""
            className="pic obj13 ani"
            swiper-animate-effect="toSmall"
            swiper-animate-duration="2.4s"
            swiper-animate-delay="1.6s"
          />
          <img
            src={this.inimg("28.png")}
            alt=""
            className="pic obj14 ani"
            swiper-animate-effect="toSmall"
            swiper-animate-duration="2.4s"
            swiper-animate-delay="1.6s"
          />
          {/* <!-- # --> */}
          {/* <img
            src={this.inimg("41.png")}
            alt=""
            className="pic obj15 ani"
            swiper-animate-effect="fadeIn"
            swiper-animate-duration=".4s"
            swiper-animate-delay="2s"
          /> */}
{/* 
          <Edit
            type={this.props.page[3].type}
            pos="3"
            pageId={this.props.order}
            pageType={this.state.pageType}
            value={this.inimg(this.props.page[3].value)}
            className="pic obj15 ani"
            swiperAnimateEffect="fadeIn"
            swiperAnimateDuration="1s"
            swiperAnimateDelay="2s"
          /> */}
          {/* <!-- # --> */}
          {/* <img
            src={this.inimg("42.png")}
            alt=""
            className="pic obj16 ani"
            swiper-animate-effect="fadeIn"
            swiper-animate-duration=".4s"
            swiper-animate-delay="2s"
          /> */}

          {/* <Edit
            type={this.props.page[2].type}
            pos="2"
            pageId={this.props.order}
            pageType={this.state.pageType}
            value={this.inimg(this.props.page[2].value)}
            className="pic obj16 ani"
            swiperAnimateEffect="fadeIn"
            swiperAnimateDuration="1s"
            swiperAnimateDelay="2s"
          /> */}
          <img
            src={this.inimg("2.png")}
            alt=""
            className="pic obj17 ani"
            swiper-animate-effect="toSmallInt"
            swiper-animate-duration="2.4s"
            swiper-animate-delay="2s"
          />
          <img
            src={this.inimg("26.png")}
            alt=""
            className="pic obj18 ani"
            swiper-animate-effect="toSmallInt"
            swiper-animate-duration="2.4s"
            swiper-animate-delay="2.2s"
          />
          {/* <img
            src={this.inimg("36.png")}
            alt=""
            className="pic obj19 ani"
            swiper-animate-effect="toSmall"
            swiper-animate-duration="2.4s"
            swiper-animate-delay="2s"
          /> */}




{/* <Edit
type={this.props.page[4].type}
pos="4"
pageId={this.props.order}
pageType={this.state.pageType}
value={this.props.page[4].value}
className="pic obj19 ani"
swiperAnimateEffect="toSmall"
swiperAnimateDuration="2.4s"
swiperAnimateDelay="2s"
/>  */}
          <img
            src={this.inimg("38.png")}
            alt=""
            className="pic obj20 ani"
            swiper-animate-effect="toSmall"
            swiper-animate-duration="2.4s"
            swiper-animate-delay="1s"
          />
          <img
            src={this.inimg("11.png")}
            alt=""
            className="pic obj21 ani"
            swiper-animate-effect="toSmall"
            swiper-animate-duration="2.4s"
            swiper-animate-delay="1s"
          />
          <img
            src={this.inimg("33.png")}
            alt=""
            className="pic obj22 ani"
            swiper-animate-effect="toSmall"
            swiper-animate-duration="2.4s"
            swiper-animate-delay="1s"
          />
          <img
            src={this.inimg("18.png")}
            alt=""
            className="pic obj23 ani"
            swiper-animate-effect="rotateInDownRight"
            swiper-animate-duration=".4s"
            swiper-animate-delay="1s"
          />
          <img
            src={this.inimg("12.png")}
            alt=""
            className="pic obj24 ani"
            swiper-animate-effect="fadeInDown"
            swiper-animate-duration=".4s"
            swiper-animate-delay="1s"
          />
          <img
            src={this.inimg("6.png")}
            alt=""
            className="pic obj25 ani"
            swiper-animate-effect="fadeInUp"
            swiper-animate-duration=".4s"
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Page2));
