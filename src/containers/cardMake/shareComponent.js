import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as editAction from "../../actions/edit";
import "./assets/card.css";
import { wxShare } from "../../utils/wxshare";

import ReqModal from "../tip/reqModal";

import {uploadFile} from '../../utils/upload'
class ShareComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sendType: 1,
      shareImg: require("./assets/shh.png"),
      shareTitle: "",
      shareDesc: "",
      isShowTip: "",
      isUploading: false
    };
  }
  // 组件更新后的钩子方法
  componentDidUpdate() {}
  // 组件第一次加载的方法
  componentDidMount() {}

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  doSaveImg = async e => {
    let that = this;
    var file = e.target.files[0];
    this.setState({
      isUploading: true
    });
    let imgUrl = await uploadFile(file,.3)
    that.setState({
      shareImg:imgUrl,
      isUploading: false
    });

    // todo
  };
  triggleImg = e => {
    this.refs.upload.click();
  };
  doSaveShare = () => {
    let that = this;
    this.setState({
      isShowTip: true
    });

    console.log(this.props.current);
    let param = {
      link: `http://t10.miaoxing100.cn/h5/card/index/1/enter?orderId=${
        this.props.current.orderId
      }&sendOpenId=${this.props.current.sendOpenId}&detailId=${
        this.props.current.detailId
      }`,
      imgurl: this.state.shareImg,
      title: this.state.shareTitle,
      desc: this.state.shareDesc
    };
    wxShare(param, async function() {
      that.props.onConfigShare();
      let res = await editAction.doPost("/shareCard", {
        openId: document.getElementById("openid").value,
        orderId: that.props.current.orderId
      });
      console.log(res);
    });
  };

  hideAll = () => {
    this.props.actions.hideShare();
  };
  render() {
    return (
      <div className="share_page_modal_root animated fadeIn">
        {this.state.isUploading && <ReqModal msg='图片上传中，请稍等...'/>}
        {!this.state.isShowTip ? (
          <div className="modal animated slideInDown">
            <div className="title">贺卡分享设置</div>
            <div className="con" flex="main:center cross:stretch box:first">
              <a
                className="item"
                flex="main:center dir:top cross:center"
               
              >
                <p>分享图片</p>
                <input
                  type="file"
                  value=""
                  ref="upload"
                  id='upload'
                  onChange={this.doSaveImg}
                 
                />
                <img src={this.state.shareImg} alt="a" />

              </a>
              <div className="item" flex=" dir:top cross:center">
                <p>标题</p>
                <textarea
                  placeholder="请输入标题"
                  name="shareTitle"
                  value={this.state.shareTitle}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <textarea
              className="phoneInput"
              placeholder="请输入分享描述"
              name="shareDesc"
              value={this.state.shareDesc}
              onChange={this.handleChange}
            />
            <div flex="main:center cross:stretch box:mean" className="btn">
              <div
                flex="main:center cross:center"
                onClick={e => {
                  this.props.actions.hideShare();
                }}
              >
                取消
              </div>
              <div
                flex="main:center cross:center"
                onClick={e => {
                  this.doSaveShare();
                }}
              >
                保存并分享
              </div>
            </div>
          </div>
        ) : (
          <div className="tip">
            <img src={require("./assets/share.png")} alt="as" />
          </div>
        )}
        <div className="bg" onClick={this.hideAll} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    showShare: state.getIn(["eidt", "showShare"])
  };
};

//将action的所有方法绑定到props上
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators({ ...editAction }, dispatch)
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ShareComponent)
);
