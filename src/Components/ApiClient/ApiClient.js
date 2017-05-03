import $ from 'jquery';

class ApiClient {
  constructor() {
  }
  getUsers(start, limit, successCb, failureCb){

    var postData = JSON.stringify({
      fields: [
        "branch_id",
        "namespace",
        "first_name",
        "last_name",
        "phone",
        "membership",
        "type",
        "email",
        "birth",
        "active"
      ],
      extra_fields: [
        "full_name",
        "expires",
        "credits_left",
        "member_type",
        "membership_name",
        "membership_plan_name",
        "membership_force_start"
      ],
      search_string: null,
      active: true
    });

    post(postData, buildUrl(start, limit), successCb, failureCb)
  }
}

var post = function(data, url, successCb, failureCb){
  $.ajax({
    type: "POST",
    url: url,
    data: data,
    success: function(data) {
      successCb(data);
    },
    error: function(data){
      failureCb(data);
    }
  });
}


var buildUrl = function(start, limit)
{
  return 'https://sandbox.glofox.com/users/findUserByBranchIdBasicInfo/56cdc0155c46bb176bb92582/'+ 
      limit + '/'+ start;
}

export default new ApiClient();