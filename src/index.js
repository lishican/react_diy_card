import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import { createStore, applyMiddleware,compose } from "redux";
import { Provider } from "react-redux";
import { createBrowserHistory} from "history";
import registerServiceWorker from "./registerServiceWorker";
import {combineReducers} from 'redux-immutable';
// 初始化样式
import './utils/base.css'
import 'animate.css/animate.min.css'
// import initReactFastclick from 'react-fastclick';
import adapt from './utils/adapt'




import {
  routerReducer,
  routerMiddleware,
} from "react-router-redux";

// redux中间件

// import logger from "redux-logger";
import thunk from "redux-thunk";

import rootReducer from "./reducers/index"; // Or wherever you keep your reducers

adapt(750,100)

const h = window.innerHeight
window.addEventListener('resize',function(){
  if(h>window.innerHeight){
    document.body.style.height = h+'px'
    document.documentElement.style.height = h+'px'
  }
  // alert( window.innerHeight,h)
})


const history = createBrowserHistory({
  basename:process.env.NODE_ENV==='development'?'':'/h5/card/',
  forceRefresh:true
});
const middleware = routerMiddleware(history);
let middlewares = [ thunk,middleware];


// 区分生产环境和开发环境
if(process.env.NODE_ENV==='development'){
  console.log('正处于开发环境')
}else{
  console.log('make by stackh')
}

let store;
// 使用redux chorme调试
if(!(window.__REDUX_DEVTOOLS_EXTENSION__ || window.__REDUX_DEVTOOLS_EXTENSION__)){
  store =createStore(
      combineReducers({ routing: routerReducer, ...rootReducer }),
      applyMiddleware(...middlewares)
    );
    
}else{
  store = createStore(
      combineReducers({ routing: routerReducer, ...rootReducer }),
      compose(applyMiddleware(...middlewares),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) //插件调试，未安装会报错
  );
}
// const store = createStore(
//   combineReducers({ routing: routerReducer, ...rootReducer }),
//   applyMiddleware(...middlewares)
// );




ReactDOM.render(
  <Provider store={store}>
        <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
