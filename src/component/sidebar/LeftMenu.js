import React, { Component } from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import Style from './Leftmenu.scss'
import profile from '../../images/Avatar.png'; 
import Home from '../svgicon/Home';
import Calender from '../svgicon/Calender';
import Clock from '../svgicon/Clock';
import Dashboard from '../svgicon/Dashboard';
import Money from '../svgicon/Money';
import Product from '../svgicon/Product';
import Sales from '../svgicon/Sales';
import Chat from '../svgicon/Chat';
import Setting from '../svgicon/Setting';
import Analytics from '../svgicon/Analytics';
import { LinkButton } from './../../component/button';  
// const CardInfo=[
//  {cardHader:'1', icons:'<Calender cname="icon-color" height="20" width="20" />'},
 
// ]


class LeftMenu extends Component {
    render() {
        return (
            <div>
        <ProSidebar>
          <div className='left-menu-img'>
          <img src={profile} />
          <div className='profile-name'> Eduardo illiamson</div>
          <div className='profile-info'> CEO - E-Kabad</div>
          </div>
            <Menu>
               {/* {
                CardInfo.map((mnuInfo)=>
<MenuItem> {mnuInfo.icons} {mnuInfo.cardHader} </MenuItem>
                )
              } 
               */}
             <MenuItem> <Dashboard cname="icon-color" height="20" width="20" />
             <LinkButton text="Dashboard" cname="left-menu-link" to="/dashboard" /> </MenuItem>
              <MenuItem> <Product cname="icon-color" height="20" width="20" /> 
              <LinkButton text="Products" cname="left-menu-link" to="/products" /> </MenuItem>           
              <MenuItem> <Analytics cname="icon-color" height="20" width="20" />
              <LinkButton text="Analytics" cname="left-menu-link" to="/analytics" /> </MenuItem>

              <MenuItem> <Money cname="icon-color" height="20" width="20" /> Schedules</MenuItem>
              <MenuItem> <Clock cname="icon-color" height="20" width="20" /> History</MenuItem>
            <div className='left-drop-down'>
              <Sales cname="icon-color" height="20" width="20" />
               <SubMenu title="Sales">
                <MenuItem>Component 1</MenuItem>
                <MenuItem>Component 2</MenuItem>
              </SubMenu>
              </div>
              <MenuItem> <Chat cname="icon-color" height="20" width="20" /> Schedules</MenuItem>
              <MenuItem> <Setting cname="icon-color" height="20" width="20" /> History</MenuItem>
            </Menu>
         </ProSidebar>
            </div>
        );
    }
}

export default LeftMenu;