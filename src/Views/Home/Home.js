import './Home.scss';

import React, { Component } from 'react';

import UserList from './../../Components/UserList/UserList'

class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() { 
    return (
      <div id='home'>
        <UserList />
      </div>
    );
  }
}

export default Home;


