import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Modal from "./modalComponent";
import "./modal.css";
class ConfirmModalComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // 组件更新后的钩子方法
  componentDidUpdate() {}
  // 组件第一次加载的方法
  componentDidMount() {}
  // msg="确定删除吗"
  //         isShow={this.state.isShowConfirm}
  //         cancleFn={this.cancleFn}
  // sureFn={this.sureFn}
  render() {
    return (
      <Modal>
        <div className="confirm_modal_root">
          <div className="confirm_inner_modal">
            <div className="confirm_text">{this.props.msg}</div>
            <div className="confirm_b">
              <div className="confirm_btn" onClick={this.props.cancleFn}>
                取消
              </div>
              <div className="confirm_btn" onClick={this.props.sureFn}>
                确定
              </div>
            </div>
          </div>
        </div>
      </Modal>
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
  connect(mapStateToProps, mapDispatchToProps)(ConfirmModalComponent)
);
