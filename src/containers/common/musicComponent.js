import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import cs from "classnames";
import * as editAction from "../../actions/edit";
import "./scss/common.css";
import qs from "query-string";
import { setTimeout } from "timers";
const wx = window.wx;
class MusicComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMusePlay: true,
      musicUrl:
        "http://t1.miaoxing100.cn:9019/Mi/upload/music/201801151729031516008543324.mp3"
    };
    this.audioObj = null;
  }

  componentWillReceiveProps(nextProps) {
    console.log("***********************************");
    console.log(nextProps);

    // }
  }
  // 组件更新后的钩子方法
  componentDidUpdate() {
    if (this.state.isMusePlay) {
      document.getElementById("musicObj").src = this.props.currentMusic;
      // if (this.state.isMusePlay) {
      wx.ready(function() {
        setTimeout(() => {
          document.getElementById("musicObj").play();
        }, 100);
      });
    }
    // let that = this;
    // console.log("that.refs.mp31 componentDidUpdate");
    // wx.ready(function(){
    //   that.refs.mp3.play()
    // })
    // console.log(that.refs.mp3.play);
    // if (this.state.isplay) {
    //   let that = this;
    //   wx.ready(function() {
    //     that.audioAutoPlay();
    //     that.refs.mp3 && this.refs.mp3.play();
    //   });
    // }
  }
  // 组件第一次加载的方法
  componentDidMount() {
    // let that = this;
    // wx.ready(() => {
    //   this.refs.mp3 && this.refs.mp3.play();
    //   this.refs.mp3 && this.refs.mp3.pause();
    // });
    // this.audioAutoPlay();
  }
  componentWillUnmount() {
    document.getElementById("musicObj").pause();
  }
  audioAutoPlay = () => {
    wx.ready(() => {
      setTimeout(() => {
        this.refs.mp3 && this.refs.mp3.play();
      }, 200);
    });
  };
  toggleMusic = () => {
    if (document.getElementById("musicObj").paused && !this.state.isMusePlay) {
      this.setState({
        isMusePlay: true
      });
      document.getElementById("musicObj").play();
    } else {
      this.setState({
        isMusePlay: false
      });
      document.getElementById("musicObj").pause();
    }
  };

  render() {
    return (
      <div
        className={cs("music_com_root", { animate: this.state.isMusePlay })}
        onClick={this.toggleMusic}
      >
        {/* <audio ref="mp3" src={this.props.currentMusic?this.props.currentMusic:this.state.musicUrl} preload="true" autoPlay  loop /> */}
        <img src={require("./assets/music.png")} alt="as" />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentMusic: state.getIn(["edit", "currentMusic"])
  };
};

//将action的所有方法绑定到props上
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    // actions: bindActionCreators({ ...editAction }, dispatch)
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MusicComponent)
);
