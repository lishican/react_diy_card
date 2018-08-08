import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Swiper from "swiper/dist/js/swiper.min";
import "./slide.css";
import BaseComponent from "../../../utils/BaseComponent";
class SlideComponent extends BaseComponent {
  // 组件更新后的钩子方法
  componentDidUpdate() {}
  // 组件第一次加载的方法
  componentDidMount() {
    this.mySwiper = new Swiper(".home_container_root", {
      direction: "horizontal",
      loop: false,
      observer: true,
      observerParents: true,
      preventClicks: false,
      pagination: {
        // el: ".swiper-pagination"
      }
    });
  }
  goUrl = (id,title) => {
    window.location.href='http://liwu.kiis.cn/h6/card3/'
    // this.props.history.push({
    //   pathname:'/main/list/'+id,
    //   search:`?type=${title}&id=${id}`
    // })
  };
  render() {
    return (
      <div className="swiper-container home_container_root">
        <div className="swiper-wrapper">
          {this.props.banner &&
            this.props.banner.map((v, k) => {
              return (
                <div
                  className="swiper-slide"
                  key={k}
                  onClick={this.goUrl.bind(this, v.id,v.title)}
                >
                  <img src={v.imgUrl} alt="banner" />
                </div>
              );
            })}
        </div>
        <div className="swiper-pagination" />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

//将action的所有方法绑定到props上
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    // actions: bindActionCreators({ ...editAction }, dispatch)
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SlideComponent)
);
