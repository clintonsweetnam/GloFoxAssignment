import styles from './index.scss';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import Home from './Views/Home/Home'; 

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Home} />
  </Router>
), document.getElementById('app'));
