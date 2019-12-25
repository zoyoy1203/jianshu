import React, { Component, Fragment } from 'react';
import Header from './common/header';
import { GlobalStyle } from './style.js';
import {  IconfontStyle } from './statics/iconfont/iconfont';
class App extends Component {
  render() {
    return(
      <Fragment>
        <GlobalStyle></GlobalStyle>
        <IconfontStyle></IconfontStyle>
        <Header></Header> 
      </Fragment>
      
    )
  }
}

export default App;
