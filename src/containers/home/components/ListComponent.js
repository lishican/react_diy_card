import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import "./List.css";
import BaseComponent from '../../../utils/BaseComponent'
class ListComponent extends BaseComponent {
  // 组件更新后的钩子方法
  componentDidUpdate() {}
  // 组件第一次加载的方法
  componentDidMount() {}
  goPage = (id)=>{
    
      this.props.history.push({
        pathname:'/cardmake',
        search: '?isOnLine=0&templateId='+id
      })
 
   
  }
  render() {
    return (
      <div className="list_com_root">
        <div className="title">{this.props.title}</div>
        <div className="pro_con">

        {
          this.props.templatelist&&this.props.templatelist.map((v,k)=>{
            return <div className="item" key={k} onClick={this.goPage.bind(this,v.id)}>
            <img
              src={v.url}
              className="pro_img"
              alt="hand"
            />
             <span style={{color:'#333'}}>{v.name}</span>
            <span>
              <img
                src={require("../assets/price.png")}
                className="icon"
                alt="a"
              />免费
            </span>
          </div>
          })
        }
        
          {/* <div className="item" onClick={this.goPage.bind(this,2)}>
            <img
              src={require("../assets/pic2.png")}
              className="pro_img"
              alt="hand"
            />
            <span>
              <img
                src={require("../assets/price.png")}
                className="icon"
                alt="a"
              />免费
            </span>
          </div> */}
          {/* <div className="item" onClick={this.goPage.bind(this,3)}>
            <img
              src={require("../assets/pic3.png")}
              className="pro_img"
              alt="hand"
            />
            <span>
              <img
                src={require("../assets/price.png")}
                className="icon"
                alt="a"
              />免费
            </span>
          </div> */}
        </div>
      {/* <div style={{ height: "2rem" }} ></div> */}
        
      </div>
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
    // actions: bindActionCreators({ ...editAction }, dispatch)
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ListComponent)
);
