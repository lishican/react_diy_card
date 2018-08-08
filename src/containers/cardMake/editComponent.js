import React from "react";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import BaseComponent from "../../utils/BaseComponent";
import cs from "classnames";
import * as editAction from "../../actions/edit";

import ReqModal from "../tip/reqModal";
import { uploadFile } from "../../utils/upload";

import Crop from "./cropComponent";

class Edit extends BaseComponent {
  // 组件会更新
  state = {
    imgrul: "",
    isUploading: false,
    imgObj: {
      w: 0,
      h: 0
    },
    showCrop: false,
    imgtype: "jpg",
    cropTip:"裁剪"
  };
  componentWillUpdate() {}
  componentDidMount() {
    let { value, className, type } = this.props;

    let that = this;

    if (type === "img") {
      that.setState({
        imgObj: {
          w: this.refs.eidtarea.offsetWidth,
          h: this.refs.eidtarea.offsetHeight,
          url: value
        }
      });
    }
  }
  showEdit = () => {
    console.log(this.props);
    this.props.actions.showEdit({
      value: this.props.value,
      pageId: this.props.pageId,
      pageType: this.props.pageType,
      site: this.props.pos
    });
  };
  showImgUpload = e => {
    // alert(1)
    this.refs.upload.click();
  };

  attrStyle = (elem, attr) => {
    if (elem.attr) {
      //若样式存在于html中,优先获取
      return elem.style[attr];
    } else if (elem.currentStyle) {
      //IE下获取CSS属性最终样式(同于CSS优先级)
      return elem.currentStyle[attr];
    } else if (document.defaultView && document.defaultView.getComputedStyle) {
      //W3C标准方法获取CSS属性最终样式(同于CSS优先级)
      //注意,此法属性原格式(text-align)获取的,故要转换一下
      attr = attr.replace(/([A-Z])/g, "-$1").toLowerCase();
      //获取样式对象并获取属性值
      return document.defaultView
        .getComputedStyle(elem, null)
        .getPropertyValue(attr);
    } else {
      return null;
    }
  };

  doSaveImg = async e => {
    let that = this;
    let file = e.target.files[0];

    this.setState({
      isUploading: true
    });
    if (window.FileReader) {
      var reader = new FileReader();
    } else {
      alert("您的设备不支持图片预览功能，如需该功能请升级您的设备！");
    }

    var imageType = /^image\//;
    //是否是图片
    if (!imageType.test(file.type)) {
      alert("请选择图片！");
      return;
    }
    //读取完成
    reader.onload = function(e) {
      that.setState({
        isUploading: false
      });
      that.setState({
        showCrop: true,
        imgtype: file.name.split(".")[1],
        imgObj: {
          w: that.attrStyle(that.refs.eidtarea, "width"),
          h: that.attrStyle(that.refs.eidtarea, "height"),
          url: e.target.result
        }
      });
    };
    reader.readAsDataURL(file);
  };

  doCropF = async file => {

  this.setState({
    cropTip:'处理中'
  })
    


    let that = this;
    this.setState({
      isUploading: true,
      showCrop: true
    });

    let url = await uploadFile(file, 1, 'jpg');

    let param = {
      value: url,
      pageId: that.props.pageId,
      pageType: that.props.pageType,
      site: that.props.pos
    };

    this.setState({
      cropTip:'裁剪'
    })
    that.props.actions.saveEdit2(param);



    this.setState({
      isUploading: false
    });
  };
  htmlhelp = val => {
    return { __html: val };
  };

  render() {
    let { value, className, type } = this.props;

    if (this.props.doEdit) {
      if (type === "text") {
        return (
          <div
            className={cs(className)}
            swiper-animate-effect={this.props.swiperAnimateEffect}
            swiper-animate-duration={this.props.swiperAnimateDuration}
            swiper-animate-delay={this.props.swiperAnimateDelay}
          >
            <div className="edit">
              <div
                className="eidt_btn ani"
                swiper-animate-effect="fadeIn"
                swiper-animate-duration="3s"
                swiper-animate-delay=".3s"
                onClick={this.showEdit}
              >
                {/* 232 */}
              </div>

              <div dangerouslySetInnerHTML={{ __html: value }} />
            </div>
          </div>
        );
      } else {
        return [
          <div key="crop">
            {this.state.showCrop && (
              <Crop info={this.state.imgObj} cropTip={this.state.cropTip} doCropF={this.doCropF} />
            )}
          </div>,
          <div
            key="main"
            className={cs("edit", "editimg", className)}
            swiper-animate-effect={this.props.swiperAnimateEffect}
            swiper-animate-duration={this.props.swiperAnimateDuration}
            swiper-animate-delay={this.props.swiperAnimateDelay}
          >
            {this.state.isUploading && <ReqModal msg="图片上传中，请稍等..." />}
            <input
              type="file"
              value=""
              ref="upload"
              onChange={this.doSaveImg}
            />
            <div
              ref="eidtarea"
              className="eidt_btn ani img"
              swiper-animate-effect="fadeIn"
              swiper-animate-duration=".3s"
              swiper-animate-delay=".3s"
            />

            <img
              src={value}
              className={cs({
                hw: this.state.hw,
                wh: !this.state.hw
              })}
              alt={value}
            />
          </div>
        ];
      }
    } else {
      if (type === "text") {
        return (
          <div
            className={cs("edit", className)}
            swiper-animate-effect={this.props.swiperAnimateEffect}
            swiper-animate-duration={this.props.swiperAnimateDuration}
            swiper-animate-delay={this.props.swiperAnimateDelay}
            dangerouslySetInnerHTML={{ __html: value }}
          >
            {/* {value} */}
          </div>
        );
      } else {
        return (
          <div
            className={cs("edit", "editimg", className)}
            swiper-animate-effect={this.props.swiperAnimateEffect}
            swiper-animate-duration={this.props.swiperAnimateDuration}
            swiper-animate-delay={this.props.swiperAnimateDelay}
          >
            <img
              src={value}
              ref="eidtarea"
              className={cs({
                hw: this.state.hw,
                wh: !this.state.hw
              })}
              alt={value}
            />
          </div>
        );
      }
    }
  }
}

const mapStateToProps = state => {
  return {
    doEdit: state.getIn(["edit", "doEdit"]),
    editData: state.getIn(["edit"])
  };
};

//将action的所有方法绑定到props上
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators({ ...editAction }, dispatch)
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Edit));
