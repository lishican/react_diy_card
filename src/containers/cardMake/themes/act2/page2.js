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
      <div className="swiper-slide page_container template1_page3_theme">
        <div className="page">
          <img
            src={this.inimg("8.png")}
            alt=""
            className="bg ani"
            swiper-animate-effect="toBig"
            swiper-animate-duration="1s"
            swiper-animate-delay="0s"
          />
          <img
            src={this.inimg("30.png")}
            alt=""
            className="pic img1 ani"
            swiper-animate-effect="fadeInLeft"
            swiper-animate-duration="1s"
            swiper-animate-delay=".2s"
          />
          <img
            src={this.inimg("42.png")}
            alt=""
            className="pic img2 ani"
            swiper-animate-effect="fadeInDown"
            swiper-animate-duration="1s"
            swiper-animate-delay=".15s"
          />
          <img
            src={this.inimg("43.png")}
            alt=""
            className="pic img3 ani"
            swiper-animate-effect="fadeInDown"
            swiper-animate-duration="1s"
            swiper-animate-delay=".1s"
          />
          <img
            src={this.inimg("5.png")}
            alt=""
            className="pic img4 ani"
            swiper-animate-effect="fadeInDown"
            swiper-animate-duration="1s"
            swiper-animate-delay=".1s"
          />
          <img
            src={this.inimg("26.png")}
            alt=""
            className="pic img5 ani"
            swiper-animate-effect="fadeInDown"
            swiper-animate-duration="1s"
            swiper-animate-delay=".15s"
          />
          <img
            src={this.inimg("47.png")}
            alt=""
            className="pic img6 ani"
            swiper-animate-effect="fadeInRight"
            swiper-animate-duration="1s"
            swiper-animate-delay=".2s"
          />
          <img
            src={this.inimg("23.png")}
            alt=""
            className="pic img7 ani"
            swiper-animate-effect="fadeInLeft"
            swiper-animate-duration="1s"
            swiper-animate-delay=".2s"
          />
          <img
            src={this.inimg("11.png")}
            alt=""
            className="pic img8 ani"
            swiper-animate-effect="fadeInRight"
            swiper-animate-duration="1s"
            swiper-animate-delay=".2s"
          />
          <img
            src={this.inimg("60.png")}
            alt=""
            className="pic img9 ani"
            swiper-animate-effect="fadeInDown"
            swiper-animate-duration="1s"
            swiper-animate-delay=".2s"
          />
          <img
            src={this.inimg("27.png")}
            alt=""
            className="pic img10 ani"
            swiper-animate-effect="fadeInUp"
            swiper-animate-duration="1s"
            swiper-animate-delay=".15s"
          />
          <img
            src={this.inimg("7.png")}
            alt=""
            className="pic img11 ani"
            swiper-animate-effect="fadeInUp"
            swiper-animate-duration="1s"
            swiper-animate-delay=".1s"
          />
          <img
            src={this.inimg("52.png")}
            alt=""
            className="pic img12 ani"
            swiper-animate-effect="fadeInUp"
            swiper-animate-duration="1s"
            swiper-animate-delay=".1s"
          />
          <img
            src={this.inimg("62.png")}
            alt=""
            className="pic img13 ani"
            swiper-animate-effect="fadeInUp"
            swiper-animate-duration="1s"
            swiper-animate-delay=".1s"
          />
          <img
            src={this.inimg("1.png")}
            alt=""
            className="pic img14 ani"
            swiper-animate-effect="fadeInUp"
            swiper-animate-duration="1s"
            swiper-animate-delay=".1s"
          />
          <img
            src={this.inimg("50.png")}
            alt=""
            className="pic img15 ani"
            swiper-animate-effect="fadeInUp"
            swiper-animate-duration="1s"
            swiper-animate-delay=".1s"
          />
          <img
            src={this.inimg("6.png")}
            alt=""
            className="pic img16 ani"
            swiper-animate-effect="fadeInUp"
            swiper-animate-duration="1s"
            swiper-animate-delay=".1s"
          />
          <img
            src={this.inimg("68.png")}
            alt=""
            className="pic img17 ani"
            swiper-animate-effect="fadeInUp"
            swiper-animate-duration="1s"
            swiper-animate-delay=".1s"
          />
          <img
            src={this.inimg("17.png")}
            alt=""
            className="pic img18 ani"
            swiper-animate-effect="fadeInRight"
            swiper-animate-duration="1s"
            swiper-animate-delay=".1s"
          />
          <img
            src={this.inimg("41.png")}
            alt=""
            className="pic img19 ani"
            swiper-animate-effect="fadeInLeft"
            swiper-animate-duration="1s"
            swiper-animate-delay=".1s"
          />
          <img
            src={this.inimg("28.png")}
            alt=""
            className="pic img20 ani"
            swiper-animate-effect="toSmall"
            swiper-animate-duration="1s"
            swiper-animate-delay=".8s ani"
          />
          <img
            src={this.inimg("64.png")}
            alt=""
            className="pic img21 ani"
            swiper-animate-effect="toSmall"
            swiper-animate-duration="1s"
            swiper-animate-delay=".8s"
          />
          <img
            src={this.inimg("24.png")}
            alt=""
            className="pic img22 ani"
            swiper-animate-effect="toSmall"
            swiper-animate-duration="1s"
            swiper-animate-delay=".8s"
          />
          <img
            src={this.inimg("85.png")}
            alt=""
            className="pic img23 ani"
            swiper-animate-effect="toSmall"
            swiper-animate-duration="1s"
            swiper-animate-delay="2s"
          />
          <img
            src={this.inimg("14.png")}
            alt=""
            className="pic img24 ani"
            swiper-animate-effect="fadeInRight"
            swiper-animate-duration="1s"
            swiper-animate-delay="2s"
          />
          <div className="message">
            <img
              src={this.inimg("19.png")}
              alt=""
              className="smallBg ani"
              swiper-animate-effect="toBig"
              swiper-animate-duration="1s"
              swiper-animate-delay=".1s"
            />
            <div
              className="box ani"
              swiper-animate-effect="toSmall"
              swiper-animate-duration="1s"
              swiper-animate-delay=".1s"
            >
              <img
                src={this.inimg("10.png")}
                alt=""
                className="boxBg ani"
                swiper-animate-effect="toBig"
                swiper-animate-duration="1.5s"
                swiper-animate-delay=".2s"
              />
              <div className="changImg">
                <Edit
                  type={this.props.page[0].type}
                  pos="0"
                  pageId={this.props.order}
                  pageType={this.state.pageType}
                  value={this.inimg(this.props.page[0].value)}
                  className="ani"
                  swiperAnimateEffect="toSmall"
                  swiperAnimateDuration="1.5ss"
                  swiperAnimateDelay=".25s"
                />
              </div>
            </div>
          </div>
          <img
            src={this.inimg("39.png")}
            alt=""
            className="pic img25 ani"
            swiper-animate-effect="fadeInLeft"
            swiper-animate-duration="1s"
            swiper-animate-delay=".3s"
          />
          <img
            src={this.inimg("37.png")}
            alt=""
            className="pic img26 ani"
            swiper-animate-effect="fadeInRight"
            swiper-animate-duration="1s"
            swiper-animate-delay=".3s"
          />
          {/* <!-- # --> */}
          {/* <div
            className="pic img27 ani"
            swiper-animate-effect="toSmall"
            swiper-animate-duration="1s"
            swiper-animate-delay="1.8s"
          >
            新娘ANBABY
          </div> */}

          <Edit
            type={this.props.page[1].type}
            pos="1"
            pageId={this.props.order}
            pageType={this.state.pageType}
            value={this.props.page[1].value}
            className="pic img27 ani"
            swiperAnimateEffect="toSmall"
            swiperAnimateDuration="1s"
            swiperAnimateDelay="1.6s"
          />

          <img
            src={this.inimg("20.png")}
            alt=""
            className="pic img30 ani"
            swiper-animate-effect="toRightRoat"
            swiper-animate-duration="1s"
            swiper-animate-delay="1.5s"
          />
          <img
            src={this.inimg("29.png")}
            alt=""
            className="pic img31 ani"
            swiper-animate-effect="toLeftRoat"
            swiper-animate-duration="1s"
            swiper-animate-delay="1.5s"
          />
          <img
            src={this.inimg("73.png")}
            alt=""
            className="pic img32 ani"
            swiper-animate-effect="toSmall"
            swiper-animate-duration="1s"
            swiper-animate-delay=".6s"
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
