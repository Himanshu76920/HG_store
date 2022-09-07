import React, { Component } from 'react';
import Header from '../../component/header/Header';
import LeftMenu from '../../component/sidebar/LeftMenu';
import Style from './Dashboard.scss';
const Carvalue=[
{cardname: "Sale", cardprice:12200, cardicon: 'club_night_day'},
{cardname: "vdvdgdfg", cardprice:12200, cardicon: 'gfdgfdgdf'}

    
]
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
                    <div className='small-Card-row'>
                       {
                         Carvalue.map((cardinfo)=>
                         <div className={"small-card " + (cardinfo.cardicon)}>{cardinfo.cardname}</div>
                        )
                       }
                        
                        {/* <div className='small-card blue-card'>fdgfg</div>
                        <div className='small-card orange-card'>fdgfg</div> */}
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;