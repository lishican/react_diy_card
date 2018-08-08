import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import "./modal.css";

const JRoll = require("jroll");
class MyJRoll extends React.Component {
  constructor(props) {
    super(props);
    this.jroll = null;
  }
  componentDidMount() {
    let wrappers = this.props.ID || "wrappers";
    this.jroll = new JRoll(`#${wrappers}`);
    this.jroll.refresh();
  }
  componentDidUpdate() {
    this.jroll.refresh();
  }
  render() {
    const { height } = this.props;
    return (
      <div
        id={this.props.ID ? this.props.ID : "wrappers"}
        style={{ height: height ? height : "100%" }}
      >
        <ul id="scroller">{this.props.children}</ul>
      </div>
    );
  }
}
class BsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMonut() {
    // document.addEventListener(
    //   "touchmove",
    //   function(event) {
    //     event.preventDefault();
    //     return false;
    //   },
    //   false
    // );
  }

  componentWillUnmount() {
    // document.removeEventListener(
    //   "touchmove",
    //   function(event) {
    //     event.preventDefault();
    //     return false;
    //   },
    //   false
    // );
  }

  render() {
    // 插件滚动
    let content = (
      <MyJRoll
        ID="myWrapper"
        height={window.innerHeight}
        ref={myRoll => (this.myRoll = myRoll)}
      >
        {this.props.children}
      </MyJRoll>
    );
    // 自定义滚动
    let content2 = (
      <div className="swiper-container-bs">{this.props.children}</div>
    );
    return content;
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
  connect(mapStateToProps, mapDispatchToProps)(BsComponent)
);
