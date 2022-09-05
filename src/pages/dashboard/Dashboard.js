import React, { Component } from 'react';
import Header from '../../component/header/Header';
import LeftMenu from '../../component/sidebar/LeftMenu';
import Style from './Dashboard.scss';
class Dashboard extends Component {
    render() {
        return (
            <div className='dashboard-container'>
                <Header/>
                <div className='dadashboard'>
                <div>
                <LeftMenu/>
                </div>
                <div className='dadashboard-item'>
                Dashboard
                </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;