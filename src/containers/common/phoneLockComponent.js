// import React from "react";
// import { withRouter } from "react-router-dom";
// import { connect } from "react-redux";
// import cs from "classnames";
// import './scss/common.css'
// class PhoneLockConponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isCode: false,
//       time: 5,
//       text:'获取认证码'
//     };
//     this.timer = null;
//   }
//   // 组件更新后的钩子方法
//   componentDidUpdate() {}

//   componentWillUnmount() {
//     this.timer && clearInterval(this.timer);
//   }
//   // 组件第一次加载的方法
//   componentDidMount() {
//     let h = window.innerHeight
//     let that = this
//     window.addEventListener('resize',function(){
//       // alert(1)
//       that.refs.ng.style.height=h+'px'

//     })


//   }
//   sendCode = () => {

    
//     if (this.state.isCode) return false;

//     this.setState({
//       isCode: true
//     });

//     this.timer && clearInterval(this.timer);
//     this.timer = setInterval(() => {
//       if (this.state.time < 1) {
//         clearInterval(this.timer);

//         this.setState({
//           isCode: false,
//           text:'重新获取',
//           time:5
//         });
//       } else {
//         this.setState((preState, preProps) => {
//           return { time: --preState.time };
//         });
//       }
//     }, 1000);
//   };
//   render() {
//     return (
   
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     // aaaa: state.getIn(["global", "animateCls"])
//   };
// };

// //将action的所有方法绑定到props上
// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     // actions: bindActionCreators({ ...editAction }, dispatch)
//   };
// };

// export default withRouter(
//   connect(mapStateToProps, mapDispatchToProps)(PhoneLockConponent)
// );
