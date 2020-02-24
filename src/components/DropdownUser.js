import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import {Dropdown} from 'semantic-ui-react';

const Dropdownuser = () =>{
    return(
        <Dropdown text='Image'>
    <Dropdown.Menu direction="left">
    <Dropdown.Item text="Profile" />
      <Dropdown.Item text='Your Activity' />
      <Dropdown.Divider />
      <Dropdown.Item icon='logout' text='Logout' />
    </Dropdown.Menu>
  </Dropdown>
    )
}

export default Dropdownuser;