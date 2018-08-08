import React from "react";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import BaseComponent from "../../utils/BaseComponent";
import * as editAction from "../../actions/edit";
import cs from 'classnames'
import "./assets/card.css";

class ReportComponent extends BaseComponent {
  state = {
    value: "请输入举报原因",
    list: [
      "黄赌毒",
      "谣言，诈骗，虚假宣传",
      "违法集赞，违法引导关注",
      "传销，邪教",
      "医药，整形",
      "违反国家政策和法律",
      "泄露机密信息"
    ],
    currennt:0
  };
  handleChange = event => {
    this.setState({
      value: event.target.value
    });
  };

  doChange = id =>{
    this.setState({
      currennt:id
    })
  }
  // 组件会更新
  componentWillUpdate() {}

  componentDidMount() {}

  doReport = e => {
    this.props.doReport(this.state.list[this.state.currennt]);
  };
  render() {
    return (
      <div className="text_eidt_root  fadeIn">
        <div className="modal animated fadeIn" style={{height:'6rem',paddingTop:'.6rem'}}>
          {this.state.list.map((v,k) => {
            return (
              <div key={k} className={cs('pointlist',{'active':k==this.state.currennt})} onClick={this.doChange.bind(this,k)}>
                <span className="point" />
                <p>{v}</p>
              </div>
            );
          })}
          <div className="b_btn_group">
            <div
              className="btn"
              onTouchEnd={e => {
                this.props.hideReport();
              }}
            >
              取消
            </div>
            <div className="btn" onTouchEnd={this.doReport}>
              提交
            </div>
          </div>
        </div>
      </div>
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
  connect(mapStateToProps, mapDispatchToProps)(ReportComponent)
);
