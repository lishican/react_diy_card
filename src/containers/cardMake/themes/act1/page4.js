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

    if (name.length > 16) {
      return name;
    } else {
      return require("./img/" + name);
    }
  };
  render() {
    return (
      <div className="swiper-slide page_container template1_page4_theme">
        <div className="page">
          {/* <!-- 公用背景 --> */}
          <img src={this.inimg("39.png")} alt="" className="bg" />
          <img src={this.inimg("1.png")} alt="" className="pic bg1" />
          <img src={this.inimg("1.png")} alt="" className="pic bg2" />
          <img src={this.inimg("1.png")} alt="" className="pic bg3" />
          <img src={this.inimg("1.png")} alt="" className="pic bg4" />
          <img src={this.inimg("1.png")} alt="" className="pic bg5" />
          <img src={this.inimg("1.png")} alt="" className="pic bg6" />
          <img src={this.inimg("1.png")} alt="" className="pic bg7" />
          <img src={this.inimg("1.png")} alt="" className="pic bg8" />
          <img src={this.inimg("17.png")} alt="" className="pic bg9" />
          <img src={this.inimg("32.png")} alt="" className="pic bg10 animated fadeIn infinite" />
          {/* <!-- 公用头部1 --> */}
          <img src={this.inimg("34.png")} alt="" className="pic top1 ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="1s" swiper-animate-delay=".3s"/>
          <img src={this.inimg("33.png")} alt="" className="pic top2 ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="1s" swiper-animate-delay="0s ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="1s" swiper-animate-delay=".6s"/>
          <img src={this.inimg("34.png")} alt="" className="pic top3 ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="1s" swiper-animate-delay=".4s"/>
          <img src={this.inimg("30.png")} alt="" className="pic top4 ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="1s" swiper-animate-delay=".5s"/>
          <img src={this.inimg("7.png")} alt="" className="pic top5 ani"  swiper-animate-effect="fadeInLeft" swiper-animate-duration="1s" swiper-animate-delay=".8s"/>
          <img src={this.inimg("34.png")} alt="" className="pic top6 ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="1s" swiper-animate-delay=".4s"/>
          <img src={this.inimg("11.png")} alt="" className="pic top7 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1s" swiper-animate-delay=".9s"/>
          {/* <!-- 内容 --> */}
          <img src={this.inimg("19.png")} alt="" className="pic obj1 ani" swiper-animate-effect="bigASmall" swiper-animate-duration="1s" swiper-animate-delay="1.2s"/>
          <img src={this.inimg("18.png")} alt="" className="pic obj2 ani" swiper-animate-effect="bigASmall" swiper-animate-duration="1s" swiper-animate-delay="1.4s"/>
          <img src={this.inimg("12.png")} alt="" className="pic obj3 ani" swiper-animate-effect="bigASmall" swiper-animate-duration="1s" swiper-animate-delay="1.8s"/>
          <img src={this.inimg("12.png")} alt="" className="pic obj4 ani" swiper-animate-effect="bigASmall" swiper-animate-duration="1s" swiper-animate-delay="2s"/>
          <img src={this.inimg("31.png")} alt="" className="pic obj5 ani" swiper-animate-effect="bigASmall" swiper-animate-duration="1s" swiper-animate-delay="2.2s"/>
          <img src={this.inimg("27.png")} alt="" className="pic obj6 ani" swiper-animate-effect="toSmall" swiper-animate-duration="1s" swiper-animate-delay="2.4s"/>
          <img src={this.inimg("5.png")} alt="" className="pic obj7 ani"  swiper-animate-effect="toSmall" swiper-animate-duration="1s" swiper-animate-delay="2.4s"/>
          <div className="pic obj8 ani" swiper-animate-effect="rotateInDownLeft" swiper-animate-duration=".5s" swiper-animate-delay="2.8s"></div>
          {/* <!-- # --> */}
          <div className="pic obj9 ani" swiper-animate-effect="rotateInDownRight" swiper-animate-duration=".5s" swiper-animate-delay="3s">
            {/* <img src={this.inimg("46.jpg")} alt="" /> */}
            <Edit
            type={this.props.page[0].type}
            pos="0"
            pageId={this.props.order}
            pageType={this.state.pageType}
            value={this.inimg(this.props.page[0].value)}
            className="ani"
            swiperAnimateEffect=""
            swiperAnimateDuration=""
            swiperAnimateDelay=""
          />
            
            </div>
          <div className="pic obj10 ani" swiper-animate-effect="rotateInDownRight" swiper-animate-duration=".5s" swiper-animate-delay="3.2s"></div>
          {/* <!-- # -->*/}
          <div className="pic obj11 ani" swiper-animate-effect="rotateInDownLeft" swiper-animate-duration=".5s" swiper-animate-delay="3.4s"> 
            {/* <img src={this.inimg("48.jpg")} alt="" /> */}
            <Edit
            type={this.props.page[1].type}
            pos="1"
            pageId={this.props.order}
            pageType={this.state.pageType}
            value={this.inimg(this.props.page[1].value)}
            className="ani"
            swiperAnimateEffect=""
            swiperAnimateDuration=""
            swiperAnimateDelay=""
          />
          </div>
          {/* <div className="pic obj12 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration=".5s" swiper-animate-delay="3.6s">我喜欢</div>
          <div className="pic obj13 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration=".5s" swiper-animate-delay="3.7s">春天的花 夏天的树 </div>
          <div className="pic obj14 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration=".5s" swiper-animate-delay="3.8s">秋天的枫叶 冬天的阳光</div>
          <div className="pic obj15 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration=".5s" swiper-animate-delay="3.9s">和每天的你   </div> */}
     <Edit
            type={this.props.page[2].type}
            pos="2"
            pageId={this.props.order}
            pageType={this.state.pageType}
            value={this.props.page[2].value}
            className="pic obj12 ani"
            swiperAnimateEffect="fadeInUp"
            swiperAnimateDuration="1s"
            swiperAnimateDelay="3.6s"
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
