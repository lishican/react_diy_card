import React from "react";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import BaseComponent from "../../utils/BaseComponent";
import * as editAction from "../../actions/edit";
import cs from "classnames";
import "./assets/card.css";
import Modal from "../tip/modalComponent";

class MusicChooseComponent extends BaseComponent {
  state = {
    value: "选择背景音乐",
    currennt: 0
  };
  handleChange = event => {
    this.setState({
      value: event.target.value
    });
  };

  doChange = (id,k) => {
    console.log(JSON.stringify(id))
    this.props.actions.fetchCurrentMusic(id)

    this.setState({
      currennt:k
    })
    
  //  let audio = new Audio()
  //  audio.src = id
  //  audio.play()
  //  console.log(audio)
  };
  // 组件会更新
  componentWillUpdate() {}
  componentWillMount(){

   
  }
  componentDidMount() {
    // let a = editAction.


  }
  saveMusic = ()=>{

   let currentMusic =  this.props.audiolist.get(this.state.currennt).get('audioUrl')
   console.log(currentMusic)
   this.props.actions.fetchCurrentMusic(currentMusic)
   this.props.actions.hideMusic()

    
    
  }

  doReport = e => {
    this.props.doReport(this.state.list[this.state.currennt]);
  };
  render() {

    console.log(this.props.audiolist.toJS())
    console.log(this.props.currentMusic)
    return (
      <Modal>
        <div className="music_eidt_root  fadeIn">
          <div
            className="modal animated fadeIn"
            style={{ height: "6rem",  }}
          > 
          <h3>选择h5的背景音乐</h3>
          {this.props.audiolist.isEmpty()&&'loading...'}
          <div className='content'>
          {!this.props.audiolist.isEmpty()&&this.props.audiolist.map((v, k) => {
              return (
                <div
                  key={k}
                  className={cs("pointlist", {
                    active: this.props.currentMusic == v.get('audioUrl')
                  })}
                  onClick={this.doChange.bind(this, v.get('audioUrl'),k)}
                >
                  <span className="point" />
                  <span className='rank'>{k+1}</span>
                  <img src={require('./assets/music.png')} alt='as'/>
                  <p>{v.get('audioName')}</p>
                </div>
              );
            })}
          </div>
            <div className="b_btn_group">
              <div
                className="btn"
                onTouchEnd={e => {
                  this.props.actions.hideMusic()
                }}
              >
                取消
              </div>
              <div className="btn" onTouchEnd={this.saveMusic}>
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
  return {
    audiolist: state.getIn(["edit","musicList"]),
    currentMusic: state.getIn(["edit","currentMusic"]),
  };
};

//将action的所有方法绑定到props上
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators({ ...editAction }, dispatch)
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MusicChooseComponent)
);
