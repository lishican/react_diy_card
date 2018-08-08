import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
class ProgressComponent extends React.Component {
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
    let {currentPage,size} = this.props
    currentPage  = currentPage>0?currentPage:1
    let progress = currentPage/size*100

    if(size==0){
      progress=10
    }
    
    progress=progress>0?progress:10


    return <div className='progress_com_root'>
          <div className='line'>
              <div className='cu' style={{width:progress+'%'}}></div>
          </div>
          <div className='num'>{this.props.currentPage>0?this.props.currentPage:1}/{this.props.size}</div>
    </div>;
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
  connect(mapStateToProps, mapDispatchToProps)(ProgressComponent)
);
