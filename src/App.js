import React, { Component, Fragment } from 'react';
import Header from './common/header';
import { GlobalStyle } from './style.js';
import {  IconfontStyle } from './statics/iconfont/iconfont';
import store from './store';
import { Provider } from 'react-redux';

class App extends Component {
  render() {
    return(
      <Fragment>
        <GlobalStyle></GlobalStyle>
        <IconfontStyle></IconfontStyle>
        <Provider store={store}>
          <Header></Header> 
        </Provider>
    
      </Fragment>
      
    )
  }
}

export default App;
