import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Modal from  './modalComponent'
import cs from 'classnames'
import './modal.css'
class tipComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show:true
    };
  }
  // 组件更新后的钩子方法
  componentDidUpdate() {}
  // 组件第一次加载的方法
  componentDidMount() {

    setTimeout(()=>{
      this.props.hideTip()
    },4000)

    setTimeout(() => {
      this.setState({
        show:false
      })
    }, 3000);
    
  }


  render() {
    return <Modal>
      <div className={cs('tip_modal_root animated ',{
        "slideInDown":this.state.show,
        "slideOutUp":!this.state.show
      })} >
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
  connect(mapStateToProps, mapDispatchToProps)(tipComponent)
);
