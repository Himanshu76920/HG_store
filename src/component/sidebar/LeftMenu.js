import React, { Component } from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css'
class LeftMenu extends Component {
    render() {
        return (
            <div>
        <ProSidebar>
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