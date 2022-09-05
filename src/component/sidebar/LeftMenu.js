import React, { Component } from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import Style from './Leftmenu.scss'
import profile from '../../images/Avatar.png'; 

class LeftMenu extends Component {
    render() {
        return (
            <div>
        <ProSidebar>
          <div className='left-menu-img'>
          <img src={profile} />
          <div> Eduardo illiamson</div>
          <div> xyz ghjkhkklmy</div>
          </div>
            <Menu>
              <MenuItem> Dashboard</MenuItem>
              <SubMenu title="Components">
                <MenuItem>Component 1</MenuItem>
                <MenuItem>Component 2</MenuItem>
              </SubMenu>
            </Menu>
         </ProSidebar>
            </div>
        );
    }
}

export default LeftMenu;