import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import QRCode from "qrcode2";
import "./assets/device.css";
class PcComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // 组件更新后的钩子方法
  componentDidUpdate() {}
  // 组件第一次加载的方法
  componentDidMount() {
    var qrcode = new QRCode(document.getElementById("qrcode"), {
      text: window.location.href,
      width: 128,
      height: 128,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H
    });
  }

  render() {
    return (
      <div className="pcbg">
        <div className="asdas">
          <div className="device device-iphone-x">
            <div className="device-frame" />
            <div className="device-stripe" />
            <div className="device-header" />
            <div className="device-sensors" />
            <div className="device-btns" />
            <div className="device-power" />
          </div>
        </div>
    
        {/* <div className="btn1 btn" onClick={this.props.prev}>
          上一步
        </div>
        <div className="btn2 btn" onClick={this.props.next}>
          下一步
        </div> */}
        <div className="qrcode" id="qrcode" />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    aaaa: state.getIn(["global", "animateCls"])
  };
};

//将action的所有方法绑定到props上
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    // actions: bindActionCreators({ ...editAction }, dispatch)
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PcComponent)
);
