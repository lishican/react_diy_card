import React from "react";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import BaseComponent from "../../utils/BaseComponent";
import * as editAction from "../../actions/edit";
import Modal from "../tip/modalComponent";

import Cropper from "cropperjs";
import "cropperjs/dist/cropper.min.css";
import "./assets/card.css";
class CropComponent extends BaseComponent {
  state = {
    value: "",
  };

  handleChange = event => {
    this.setState({
      value: event.target.value
    });
  };
  componentWillReceiveProps() {}
  // 组件会更新
  componentWillUpdate() {}
  componentDidMount() {
    let aspectRatio =
      parseInt(this.props.info.w, 10) / parseInt(this.props.info.h, 10);
 
    this.cropper = new Cropper(this.refs.editimg, {
      dragMode: "move",
      responsive: true,
      aspectRatio: aspectRatio,
      autoCropArea: 0.0,
      restore: false,
      guides: false,
      center: false,
      highlight: false,
      cropBoxMovable: false,
      cropBoxResizable: false,
      toggleDragModeOnDblclick: false,
      rotatable: true
    });
  }
  doCrop = () => {
    var that = this;

    let canvasObj = that.cropper.getCroppedCanvas({
      width: parseInt(that.props.info.w, 10) * 2,
      height: parseInt(that.props.info.h, 10) * 2
    });
    let base64 = canvasObj.toDataURL('image/jpeg')
    that.props.doCropF(base64);



  };
  rotate = ()=>{
    this.cropper.rotate(10)
  }
  render() {
    console.log(this.props.info);
    return (
      <Modal>
        <div className="crop_page_root ">
          <div className="eidaaa">
            <img
              className="main"
              ref="editimg"
              src={this.props.info.url}
              style={{
                display: "block",
                width: this.props.info.w,
                height: this.props.info.h
              }}
              alt="裁剪的图片"
            />
          </div>

              <div flex='main:center cross:center'>

              <div onClick={this.rotate} className="crop">
            旋转
          </div>
              <div onClick={this.doCrop} className="crop">

              {this.props.cropTip}
            </div>
        
                </div>
        </div>
      </Modal>
    );
  }
}

const mapStateToProps = state => {
  return {
    editData: state.getIn(["edit"])
  };
};

//将action的所有方法绑定到props上
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators({ ...editAction }, dispatch)
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CropComponent)
);
