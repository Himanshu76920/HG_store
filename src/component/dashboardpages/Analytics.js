import React, { Component } from 'react';
import Header from '../header/Header';
import LeftMenu from '../sidebar/LeftMenu';

class Analytics extends Component {
    render() {
        return (
            <div className='dashboard-container'>
            <Header/>
            <div className='dashboard'>
            <div>
            <LeftMenu/>
            </div>
            <div className='dashboard-item'>
            Analytics
            </div>
            </div>
        </div>
        );
    }
}

export default Analytics;