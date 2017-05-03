import './UserListItem.scss';

import React, { Component } from 'react';

class UserListItem extends Component {
  render(){
    var user = this.props.user;
    return (
      <tr className='user-list-item'>
        <td>
          <div className="image-cropper">
            <img src="Images/img-01.jpg" alt="Mountain View" className="rounded" />
          </div>
        </td>
        <td>
          <div className="name">
            {user.first_name} {user.last_name}
          </div>
          <div className="email">
            {user.email}
          </div>
        </td>
        <td className="credits">
          {user.credits_left} Credits
        </td>
        <td>
          <div>
            {user.membership_plan_name}
          </div>
          {user.expires &&
          <div>
            Expires {user.expires}
          </div>
          }
        </td>
        <td>
          <a className='btn btn-default'>Access <i className="fa fa-sign-out" aria-hidden="true"></i></a>
          <a className='btn btn-default'>Book/Buy <i className="fa fa-plus-circle" aria-hidden="true"></i></a>
        </td>
      </tr>
    )
  }
}

export default UserListItem;