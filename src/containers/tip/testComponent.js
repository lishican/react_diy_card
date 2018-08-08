import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
class NameComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    
    };
  }





  sleepFn = (time)=>{
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve()
      },time)
    })
  }

  async componentWillMount(){



    console.log('tes componentWillMount******************1'+new Date().toLocaleTimeString())
    await this.sleepFn(1000)
    console.log('tes componentWillMount******************2'+new Date().toLocaleTimeString())
  }

  componentDidCatch(){
    console.log('tes componentDidCatch')
  }

  componentWillReceiveProps(){
    console.log('tes componentWillReceiveProps')
  }


  // 组件更新后的钩子方法
  componentDidUpdate() {

    console.log('tes componentDidUpdate')

  }
  // 组件第一次加载的方法
  componentDidMount() {

    console.log('tes componentDidMount')
  }

  render() {
    return <div>
      {this.props.testData}
    </div>;
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
  connect(mapStateToProps, mapDispatchToProps)(NameComponent)
);
