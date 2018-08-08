import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import "./cate.css";
import queryString from "query-string";
import * as editAction from "../../actions/edit";
import {doJsApi} from '../../utils/common'
class CateListComponent extends React.Component {
  state = {
    templetListRes: []
  };
  // 组件更新后的钩子方法
  componentDidUpdate() {}
  // 组件第一次加载的方法
  async componentDidMount() {
    doJsApi()
    let search = queryString.parse(this.props.location.search);


    editAction.doPost("/getTempletList", { typeId: search.id }).then(data => {
      if (data.code == 200) {
        this.setState({
          templetListRes: data.templetList
        });
      } else {
        alert("分类网络繁忙");
      }
    });
  }
  goPage = id => {
    this.props.history.push({
      pathname:'/cardmake',
      search: '?isOnLine=0&templateId='+id
    })
  };
  render() {
    let search = queryString.parse(this.props.location.search);


    return (
      <div className="cate_page_root">
        <div className="title">{search.type}</div>

        <div className="pro_con">
          {this.state.templetListRes &&
            this.state.templetListRes.map((v,k) => {
              return (
                <div
                  className="item"
                  key = {k}
                  onClick={this.goPage.bind(this, v.id)}
                >
                  <img src={v.url} className="pro_img" alt="hand" />
                  <span style={{color:'#333'}}>{v.name}</span>
                  <span>
                    <img
                      src={require("./assets/price.png")}
                      className="icon"
                      alt="a"
                    />免费
                  </span>
                </div>
              );
            })}
        </div>
      </div>
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
  connect(mapStateToProps, mapDispatchToProps)(CateListComponent)
);
