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
      <div className="swiper-slide page_container template8_page1_theme">
        <div className="bg">
          <img src={this.inimg("msg3.jpg")} alt="1" />
        </div>

        <Edit
        type={this.props.page[0].type}
        pos="0"
        pageId={this.props.order}
        pageType={this.state.pageType}
        value={this.props.page[0].value}
        className="who"
        swiperAnimateEffect=""
        swiperAnimateDuration=""
        swiperAnimateDelay=""
        />
         <Edit
        type={this.props.page[1].type}
        pos="1"
        pageId={this.props.order}
        pageType={this.state.pageType}
        value={this.props.page[1].value}
        className="what"
        swiperAnimateEffect=""
        swiperAnimateDuration=""
        swiperAnimateDelay=""
        />
          <Edit
        type={this.props.page[2].type}
        pos="2"
        pageId={this.props.order}
        pageType={this.state.pageType}
        value={this.props.page[2].value}
        className="where"
        swiperAnimateEffect=""
        swiperAnimateDuration=""
        swiperAnimateDelay=""
        />
        {/* <div className='what'>da bda bda bda bda bda bda bda bda bda bda bda bda bda bda bda bda bda bda bda bda bda bda b</div>
        <div className='where'>da c</div> */}
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
