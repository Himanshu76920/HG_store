import React, { Component } from 'react';
import Header from '../../component/header/Header';
import LeftMenu from '../../component/sidebar/LeftMenu';
import Style from './Dashboard.scss';
import Index from '../../component/dashboardpages/Index';

 
class Dashboard extends Component {
    render() {
        return (
            <div className='dashboard-container'>
                <Header/>
                <div className='dashboard'>
                <div>
                <LeftMenu/>
                </div>
                <div className='dashboard-item'>
                  <Index/>
                </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;