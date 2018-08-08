import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import "../assets/commmon.css";
class ChoseTypeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type:1
    };
  }
  // 组件更新后的钩子方法
  componentDidUpdate() {}
  // 组件第一次加载的方法
  componentDidMount() {}
  handleChange = id=>{
    console.log(id)
    this.setState({
      type:id
    })
  }
  next=()=>{
    console.log(this.props.themeConfig.toJS())
    this.props.history.push({
      pathname:`/msg/${this.props.orderId}`,
      search:`?type=${this.state.type}&isA=0&templateId=${this.props.themeConfig.get('typeId')}`
    })




  }

  render() {
    return (
      <div className="chose_type2_modal_root ">
      <div className='bg' onTouchEnd={this.props.hideChoseType}></div>
        <div className="modal_body  ">
          <div className="title">分享方式选择</div>
          <div className="form">
            <div className='item' onTouchEnd={this.handleChange.bind(this,1)} >
              <input type="radio" name='type' value='1' checked={this.state.type===1} onChange={this.handleChange.bind(this,1)}   /> 微信普通分享
            </div>
            <div  className='item' onTouchEnd={this.handleChange.bind(this,2)}>
              <input type="radio" name='type' value='2' checked={this.state.type===2}  onChange={this.handleChange.bind(this,2)} /> 指定手机号分享
            </div>
            <p>注：“指定手机号分享”可选择留言模板</p>
            <div className='input' onTouchEnd ={this.next}>
                下一步
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    orderId: state.getIn(["edit", "orderId"]),
    themeConfig:state.getIn(["edit","themeConfig"])
  };
};

//将action的所有方法绑定到props上
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    // actions: bindActionCreators({ ...editAction }, dispatch)
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ChoseTypeComponent)
);
