import './UserList.scss';

import $ from 'jquery'
import React, { Component } from 'react';
import ApiClient from './../ApiClient/ApiClient'
import UserListItem from './../UserListItem/UserListItem'

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state= {
      showModal:true,
      page:0,
      limit:20,
      isLoading:false,
      users:[]
    }
  }
  componentWillMount(){
    this.loadBatchOfUsers(this.state.page * this.state.limit, this.state.limit, this);
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }
  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll.bind(this));
  }
  handleScroll(event) {
    if( $(window).scrollTop() > $(document).height() - $(window).height() - 250 
        && !this.state.isLoading) {
      this.loadBatchOfUsers(this.state.page * this.state.limit, this.state.limit, this);
    }
  }
  loadBatchOfUsers(start, limit, self){
    self.setState({
      isLoading:true
    });
    ApiClient.getUsers(start, limit, function(data){
      var users = self.state.users;
      data.forEach(function(item){
        if(item.User.credits_left === 'N_A')
          item.User.credits_left = '0'

        users.push(item.User);
      })

      self.setState({
        users:users,
        isLoading:false,
        page:self.state.page + 1
      })
    },
    function(data){
      console.log(data);
    });
  }
  render() {
    return (
      <div id='user-list'>
        <table className="table">
          <tbody>
          {this.state.users.map(function(user, number){
              return (
                <UserListItem key={number} user={user} />
              )
          })}
          </tbody>
        </table>
      </div>
    );
  }
}



export default UserList;


