import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import SlideComponent from "./components/slideCompnent";
import ListComponent from "./components/ListComponent";
import { bindActionCreators } from "redux";
import * as editAction from "../../actions/edit";
import BaseComponent from "../../utils/BaseComponent";

import ComfirmModal from "../tip/confirmModal";
import Bs from "../tip/bsComponent";
import { doJsApi } from "../../utils/common";
class NameComponent extends BaseComponent {
  state = {
    banner: [],
    templatelist: [],
    templatelist2: [],
    isFetch: false,
    isShowConfirm: false,
    showTip: true
  };
  // 组件更新后的钩子方法

  componentDidUpdate() {}
  // 组件第一次加载的方法
  async componentDidMount() {
    doJsApi();

    this.props.actions.updateOrderId("");
    this.setState({
      isFetch: true
    });
    let BannerListRes = await editAction.doPost("/getBannerList", {
      templetId: 1
    });

    let templetListRes = await editAction.doPost("/getTempletList", {});


    let simple = templetListRes.templetList.filter(v=>{
      return v.typeName=='简易'
    })

    let music = templetListRes.templetList.filter(v=>{
      console.log()
      return v.typeName=='音乐'
    })


    this.setState({
      banner: BannerListRes.bannerList,
      templatelist: simple,
      templatelist2:music,
    });
    this.setState({
      isFetch: false
    });
  }
  cancleFn = () => {
    this.setState({
      isShowConfirm: false
    });
  };
  sureFn = () => {
    this.setState({
      isShowConfirm: false
    });
  };
  showComfirm = () => {
    this.setState({
      isShowConfirm: true
    });
  };

  hideTip= ()=>{
    // this.setState({
    //   showTip:false
    // })
  }

  render() {
    return (
      <Bs key="1">
        {/* {this.state.isFetch && <ReqModal msg="数据加载中，请稍等" />} */}
        {this.state.isShowConfirm && (
          <ComfirmModal
            msg="确定删除吗"
            cancleFn={this.cancleFn}
            sureFn={this.sureFn}
          />
        )}
        <SlideComponent banner={this.state.banner} />
        {/* <CateComponent onClick={this.showComfirm} /> */}
        <ListComponent title='音乐动画贺卡'  templatelist={this.state.templatelist2} />
        <ListComponent title='单页祝福贺卡  ' templatelist={this.state.templatelist} />
        <div style={{ height: "2rem",background:'#f8f8f8' }} ></div>
        {/* {this.state.showTip && (
          <TipComponent key="2" msg="aa" hideTip={this.hideTip} />
        )} */}
      </Bs>
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
    actions: bindActionCreators({ ...editAction }, dispatch)
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(NameComponent)
);
