import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Modal from  './modalComponent'
import './modal.css'
class ReqModalComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    
    };
  }
  // 组件更新后的钩子方法
  componentDidUpdate() {}
  // 组件第一次加载的方法
  componentDidMount() {}

  render() {
    return <Modal>
      <div className='req_modal_root' >
        {this.props.msg}
      </div>
    </Modal>;
  }
}

const mapStateToProps = state => {
  return {
  
  };
};

//将action的所有方法绑定到props上
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    // actions: bindActionCreators({ ...editAction }, dispatch)
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ReqModalComponent)
);
