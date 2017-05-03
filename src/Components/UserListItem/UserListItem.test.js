// __tests__/CheckboxWithLabel-test.js

import React from 'react';
import {shallow} from 'enzyme';
import UserListItem from './UserListItem';

test('UserItemList has correct amount of columns in its row', () => {
  // Render a checkbox with label in the document
  var user = {}

  const listItem = shallow(
    <UserListItem user={user} />
  );

  expect(listItem.nodes[0].type).toEqual('tr');
  expect(listItem.nodes[0].props.children.length).toEqual(5);
});