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
      <div className="swiper-slide page_container template1_page7_theme">
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
            swiper-animate-delay=".1s"
          />
          <img
            src={this.inimg("42.png")}
            alt=""
            className="pic img2 ani"
            swiper-animate-effect="fadeInDown"
            swiper-animate-duration="1s"
            swiper-animate-delay=".1s"
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
            swiper-animate-delay=".1s"
          />
          <img
            src={this.inimg("47.png")}
            alt=""
            className="pic img6 ani"
            swiper-animate-effect="fadeInDown"
            swiper-animate-duration="1s"
            swiper-animate-delay=".1s"
          />
          <img
            src={this.inimg("23.png")}
            alt=""
            className="pic img7 ani"
            swiper-animate-effect="fadeInLeft"
            swiper-animate-duration="1s"
            swiper-animate-delay=".1s"
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
            swiper-animate-delay=".1s"
          />
          <img
            src={this.inimg("27.png")}
            alt=""
            className="pic img10 ani"
            swiper-animate-effect="fadeInUp"
            swiper-animate-duration="1s"
            swiper-animate-delay=".1s"
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
            swiper-animate-delay=".2s"
          />
          <img
            src={this.inimg("41.png")}
            alt=""
            className="pic img19 ani"
            swiper-animate-effect="fadeInLeft"
            swiper-animate-duration="1s"
            swiper-animate-delay=".2s"
          />
          <img
            src={this.inimg("28.png")}
            alt=""
            className="pic img20 ani"
            swiper-animate-effect="toSmall"
            swiper-animate-duration="1s"
            swiper-animate-delay=".4s"
          />
          <img
            src={this.inimg("64.png")}
            alt=""
            className="pic img21 ani"
            swiper-animate-effect="toSmall"
            swiper-animate-duration="1s"
            swiper-animate-delay=".4s"
          />
          <img
            src={this.inimg("24.png")}
            alt=""
            className="pic img22 ani"
            swiper-animate-effect="toSmall"
            swiper-animate-duration="1s"
            swiper-animate-delay=".4s"
          />
          <img
            src={this.inimg("9.png")}
            alt=""
            className="pic img23 ani"
            swiper-animate-effect="fadeInLeft"
            swiper-animate-duration="1s"
            swiper-animate-delay="2s"
          />
          <img
            src={this.inimg("63.png")}
            alt=""
            className="pic img24 ani"
            swiper-animate-effect="fadeInRight"
            swiper-animate-duration="1s"
            swiper-animate-delay="2s"
          />

          <img
            src={this.inimg("34.png")}
            alt=""
            className="pic img25 ani"
            swiper-animate-effect="toSmall"
            swiper-animate-duration="1s"
            swiper-animate-delay=".1s"
          />


          <img
            src={this.inimg("31.png")}
            alt=""
            className="pic img26 ani"
            swiper-animate-effect="toSmall"
            swiper-animate-duration="1s"
            swiper-animate-delay="2s"
          />
          {/* <!-- # --> */}
          <div
            className="pic img27 ani"
            swiper-animate-effect="toSmall"
            swiper-animate-duration="1s"
            swiper-animate-delay=".6s"
          >
            Wedding Process
          </div>
          {/* <!-- # --> */}
          <div
            className="pic img28 ani"
            swiper-animate-effect="toSmall"
            swiper-animate-duration="1s"
            swiper-animate-delay=".8s"
          >
            婚礼流程
          </div>
          <img src={this.inimg("3.png")} alt="" className="pic img29" />
          {/* <!-- # --> */}
          {/* <div
            className="pic img30 ani"
            swiper-animate-effect="fadeInLeft"
            swiper-animate-duration="1s"
            swiper-animate-delay="1s"
          >
            17:00-17:30
          </div> */}

          <Edit
            type={this.props.page[0].type}
            pos="0"
            pageId={this.props.order}
            pageType={this.state.pageType}
            value={this.props.page[0].value}
            className="pic img30 ani"
            swiperAnimateEffect="fadeInLeft"
            swiperAnimateDuration="1s"
            swiperAnimateDelay="1s"
          />
          {/* <!-- # --> */}
          {/* <div
            className="pic img31 ani"
            swiper-animate-effect="fadeInLeft"
            swiper-animate-duration="1s"
            swiper-animate-delay="1.2s"
          >
            17:30-18:30
          </div> */}

          <Edit
            type={this.props.page[1].type}
            pos="1"
            pageId={this.props.order}
            pageType={this.state.pageType}
            value={this.props.page[1].value}
            className="pic img31 ani"
            swiperAnimateEffect="fadeInLeft"
            swiperAnimateDuration="1s"
            swiperAnimateDelay="1.2s"
          />

          {/* <!-- # --> */}
          {/* <div
            className="pic img33 ani"
            swiper-animate-effect="fadeInLeft"
            swiper-animate-duration="1s"
            swiper-animate-delay="1.4s"
          >
            18:30-20:00
          </div> */}

          <Edit
            type={this.props.page[2].type}
            pos="2"
            pageId={this.props.order}
            pageType={this.state.pageType}
            value={this.props.page[2].value}
            className="pic img33 ani"
            swiperAnimateEffect="fadeInLeft"
            swiperAnimateDuration="1s"
            swiperAnimateDelay="1.4s"
          />

          {/* <!-- # --> */}
          {/* <div
            className="pic img40 ani"
            swiper-animate-effect="fadeInLeft"
            swiper-animate-duration="1s"
            swiper-animate-delay="1.6s"
          >
            20:00-20:30
          </div> */}

          <Edit
            type={this.props.page[3].type}
            pos="3"
            pageId={this.props.order}
            pageType={this.state.pageType}
            value={this.props.page[3].value}
            className="pic img40 ani"
            swiperAnimateEffect="fadeInLeft"
            swiperAnimateDuration="1s"
            swiperAnimateDelay="1.6s"
          />

          {/* <!-- # --> */}
          {/* <div
            className="pic img46 ani"
            swiper-animate-effect="fadeInLeft"
            swiper-animate-duration="1s"
            swiper-animate-delay="1.8s"
          >
            20:30-21:30
          </div> */}

          <Edit
            type={this.props.page[4].type}
            pos="4"
            pageId={this.props.order}
            pageType={this.state.pageType}
            value={this.props.page[4].value}
            className="pic img46 ani"
            swiperAnimateEffect="fadeInLeft"
            swiperAnimateDuration="1s"
            swiperAnimateDelay="1.8s"
          />

          {/* <!-- # --> */}
          {/* <div
            className="pic img41 ani"
            swiper-animate-effect="fadeInRight"
            swiper-animate-duration="1s"
            swiper-animate-delay="1s"
          >
            嘉宾签到
          </div> */}

          <Edit
            type={this.props.page[5].type}
            pos="5"
            pageId={this.props.order}
            pageType={this.state.pageType}
            value={this.props.page[5].value}
            className="pic img41 ani"
            swiperAnimateEffect="fadeInRight"
            swiperAnimateDuration="1s"
            swiperAnimateDelay="1s"
          />
          {/* <!-- # --> */}
          {/* <div
            className="pic img42 ani"
            swiper-animate-effect="fadeInRight"
            swiper-animate-duration="1s"
            swiper-animate-delay="1.2s"
          >
            婚礼开始
          </div> */}

          <Edit
            type={this.props.page[6].type}
            pos="6"
            pageId={this.props.order}
            pageType={this.state.pageType}
            value={this.props.page[6].value}
            className="pic img42 ani"
            swiperAnimateEffect="fadeInRight"
            swiperAnimateDuration="1s"
            swiperAnimateDelay="1.2s"
          />
          {/* <!-- # --> */}
          {/* <div
            className="pic img43 ani"
            swiper-animate-effect="fadeInRight"
            swiper-animate-duration="1s"
            swiper-animate-delay="1.4s"
          >
            精致晚宴
          </div> */}
          <Edit
            type={this.props.page[7].type}
            pos="7"
            pageId={this.props.order}
            pageType={this.state.pageType}
            value={this.props.page[7].value}
            className="pic img43 ani"
            swiperAnimateEffect="fadeInRight"
            swiperAnimateDuration="1s"
            swiperAnimateDelay="1.4s"
          />
          {/* <!-- # --> */}
          {/* <div
            className="pic img44 ani"
            swiper-animate-effect="fadeInRight"
            swiper-animate-duration="1s"
            swiper-animate-delay="1.6s"
          >
            合影留念
          </div> */}

          <Edit
            type={this.props.page[8].type}
            pos="8"
            pageId={this.props.order}
            pageType={this.state.pageType}
            value={this.props.page[8].value}
            className="pic img44 ani"
            swiperAnimateEffect="fadeInRight"
            swiperAnimateDuration="1s"
            swiperAnimateDelay="1.6s"
          />

          {/* <!-- # --> */}
          {/* <div
            className="pic img45 ani"
            swiper-animate-effect="fadeInRight"
            swiper-animate-duration="1s"
            swiper-animate-delay="1.8s"
          >
            结婚结束
          </div> */}

          <Edit
            type={this.props.page[9].type}
            pos="9"
            pageId={this.props.order}
            pageType={this.state.pageType}
            value={this.props.page[9].value}
            className="pic img45 ani"
            swiperAnimateEffect="fadeInRight"
            swiperAnimateDuration="1s"
            swiperAnimateDelay="1.8s"
          />
          <img
            src={this.inimg("49.png")}
            alt=""
            className="pic img32 ani"
            swiper-animate-effect="toSmall"
            swiper-animate-duration="1.5s"
            swiper-animate-delay=".3s"
          />
          {/* <img
            src={this.inimg("92.png")}
            alt=""
            className="pic img34 ani"
            swiper-animate-effect="toSmall"
            swiper-animate-duration="1s"
            swiper-animate-delay="0s"
          /> */}

<Edit
type={this.props.page[10].type}
pos="10"
pageId={this.props.order}
pageType={this.state.pageType}
value={this.inimg(this.props.page[10].value)}
className="pic img34 ani"
swiperAnimateEffect="toSmall"
swiperAnimateDuration="1s"
swiperAnimateDelay=".1s"
/> 

          <img
            src={this.inimg("88.png")}
            alt=""
            className="pic img35 ani"
            swiper-animate-effect="toSmall"
            swiper-animate-duration="1s"
            swiper-animate-delay="1s"
          />
          <img
            src={this.inimg("88.png")}
            alt=""
            className="pic img36 ani"
            swiper-animate-effect="toSmall"
            swiper-animate-duration="1s"
            swiper-animate-delay="1.2s"
          />
          <img
            src={this.inimg("88.png")}
            alt=""
            className="pic img37 ani"
            swiper-animate-effect="toSmall"
            swiper-animate-duration="1s"
            swiper-animate-delay="1.4s"
          />
          <img
            src={this.inimg("88.png")}
            alt=""
            className="pic img38 ani"
            swiper-animate-effect="toSmall"
            swiper-animate-duration="1s"
            swiper-animate-delay="1.6s"
          />
          <img
            src={this.inimg("88.png")}
            alt=""
            className="pic img39 ani"
            swiper-animate-effect="toSmall"
            swiper-animate-duration="1s"
            swiper-animate-delay="1.8s"
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Page4));
