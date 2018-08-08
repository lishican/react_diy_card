import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import './cate.css'
import BaseComponent from '../../../utils/BaseComponent'

class cateComponent extends BaseComponent {
  // 组件更新后的钩子方法
  componentDidUpdate() {}
  // 组件第一次加载的方法
  componentDidMount() {}
  goCate = (id,type)=>{

      // this.props.history.push({
      //   pathname:'/main/list/'+id,
      //   search:`?type=${type}&id=${id}`
      // })

  }
  render() {

    return (
      <div className="cate_com_root">
        {this.props.cardTypeList&&this.props.cardTypeList.map((v,k)=>{
          return <div className='item'key={k}  onClick={this.goCate.bind(this,v.get('id'),v.get('name'))}>
          <img src={v.get('img')} alt="pic" />
          <span>{v.get('name')}</span>
        </div>

         })}
        {/* //<div className='item' onTouchEnd={this.goCate.bind(this,1,'生日贺卡')}>
        //   <img src={require("../assets/icon1.png")} alt="pic" />
        //   <span>生日贺卡</span>
        // </div>
        // <div className='item'  onTouchEnd={this.goCate.bind(this,2,'情侣表白')}>
        //   <img src={require("../assets/icon2.png")} alt="pic" />
        //   <span>情侣表白</span>
        // </div>
        // <div className='item'  onTouchEnd={this.goCate.bind(this,3,'情人节')}>
        //   <img src={require("../assets/icon3.png")} alt="pic" />
        //   <span>情人节</span>
        // </div>
        // <div className='item'  onTouchEnd={this.goCate.bind(this,4,'通用祝福')}>
        //   <img src={require("../assets/icon4.png")} alt="pic" />
        //   <span>通用祝福</span>
        // </div> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cardTypeList: state.getIn(["edit", "cateList"])
  };
};

//将action的所有方法绑定到props上
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    // actions: bindActionCreators({ ...editAction }, dispatch)
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(cateComponent)
);
