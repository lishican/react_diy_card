import React from "react";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import BaseComponent from "../../../../utils/BaseComponent";
import Edit from "../../editComponent";
import "./page.css";

class Page5 extends BaseComponent {
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
      <div className="swiper-slide page_container template1_page5_theme">
        <div className="page">
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
          <img src={this.inimg("34.png")} alt="" className="pic top1 ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="1s" swiper-animate-delay=".1s"/>
          <img src={this.inimg("13.png")} alt="" className="pic top2 ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="1s" swiper-animate-delay="0s"/>
          <img src={this.inimg("34.png")} alt="" className="pic top3 ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="1s" swiper-animate-delay="0s"/>
          <img src={this.inimg("30.png")} alt="" className="pic top4 ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="1s" swiper-animate-delay=".1s"/>
          <img src={this.inimg("19.png")} alt="" className="pic toph ani" swiper-animate-effect="rotateInDownLeft" swiper-animate-duration="1s" swiper-animate-delay="0s"/>
          <img src={this.inimg("18.png")} alt="" className="pic topa ani" swiper-animate-effect="rotateInDownLeft" swiper-animate-duration="1s" swiper-animate-delay="0s"/>
          <img src={this.inimg("26.png")} alt="" className="pic topp1 ani" swiper-animate-effect="rotateIn" swiper-animate-duration="1s" swiper-animate-delay="0s"/>
          <img src={this.inimg("26.png")} alt="" className="pic topp2 ani" swiper-animate-effect="rotateInDownRight" swiper-animate-duration="1s" swiper-animate-delay="0s"/>
          <img src={this.inimg("31.png")} alt="" className="pic topy ani" swiper-animate-effect="rotateInDownRight" swiper-animate-duration="1s" swiper-animate-delay="0s"/>
          <img src={this.inimg("33.png")} alt="" className="pic tophear ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="1s" swiper-animate-delay=".5s"/>
          {/* <!-- 内容 --> */}
          {/* <!-- # --> */}
          <div className="pic obj1 ani" swiper-animate-effect="rotateInDownLeft" swiper-animate-duration=".5s" swiper-animate-delay=".8s">
            {/* <img src={this.inimg("49.jpg")} alt=""/> */}
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
          {/* <!-- # --> */}
          <div className="pic obj2 ani" swiper-animate-effect="bounceIn" swiper-animate-duration="1s" swiper-animate-delay=".9s">
            {/* <img src={this.inimg("42.jpeg")} alt=""/> */}

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
          {/* <!-- # --> */}
          <div className="pic obj3 ani" swiper-animate-effect="flipInX" swiper-animate-duration="1s" swiper-animate-delay="1s">
            {/* <img src={this.inimg("47.jpg")} alt=""/> */}

            <Edit
            type={this.props.page[2].type}
            pos="2"
            pageId={this.props.order}
            pageType={this.state.pageType}
            value={this.inimg(this.props.page[2].value)}
            className="ani"
            swiperAnimateEffect=""
            swiperAnimateDuration=""
            swiperAnimateDelay=""
          />
          </div>
          <div className="pic obj4 ani" swiper-animate-effect="flipInY" swiper-animate-duration="1s" swiper-animate-delay="1.4s">
            <img src={this.inimg("44.png")} alt="" className="bgsmall" />
            <div className="small">

            <Edit
            type={this.props.page[3].type}
            pos="3"
            pageId={this.props.order}
            pageType={this.state.pageType}
            value={this.inimg(this.props.page[3].value)}
            className="ani"
            swiperAnimateEffect=""
            swiperAnimateDuration=""
            swiperAnimateDelay=""
          />
              {/* <img src={this.inimg("41.jpg")} alt="" className="smalls ani" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="1.8s" /> */}
            </div>
          </div>
          <img src={this.inimg("25.png")} alt="" className="pic obj5 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1s" swiper-animate-delay="1.6s"/>
          <div className="pic obj6 ani" swiper-animate-effect="flipInY" swiper-animate-duration="1s" swiper-animate-delay="1.8s">怀着美好的信念，怀着幸福的憧憬</div>
          <div className="pic obj7 ani" swiper-animate-effect="flipInY" swiper-animate-duration="1s" swiper-animate-delay="2s">幸福就在你我的身边</div>
          <img src={this.inimg("5.png")} alt="" className="pic obj8 ani" swiper-animate-effect="toSmall" swiper-animate-duration="1s" swiper-animate-delay=".6s"/>
          <img src={this.inimg("5.png")} alt="" className="pic obj9 ani" swiper-animate-effect="toSmall" swiper-animate-duration="1s" swiper-animate-delay=".7s"/>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Page5));
