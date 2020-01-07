import React, { Component, Fragment } from 'react';
import Header from './common/header';
import { GlobalStyle } from './style.js';
import {  IconfontStyle } from './statics/iconfont/iconfont';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail';

class App extends Component {
  render() {
    return(
      <Fragment>
        <GlobalStyle></GlobalStyle>
        <IconfontStyle></IconfontStyle>
        <Provider store={store}>
       
          <BrowserRouter>
            <div>
            <Header/>
              <Route path='/' exact component={Home}></Route>
              <Route path='/detail/:id' exact component={Detail}></Route>
            </div>
          </BrowserRouter>
  
        </Provider>
    
      </Fragment>
      
    )
  }
}

export default App;
