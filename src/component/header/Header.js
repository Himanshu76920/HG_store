import React, { Component } from 'react';
import Style from './Header.scss'
class Header extends Component {
    render() {
        return (
          <header>
            <div className='header-container'>
             <div className='header-logo'> <a href='#'> E-KABAD</a> </div>
             <div className='header-right'>
                <div className='center-header'>Welcome To Your Dashboard</div>
                <div className='right-header'> 8th July 2022, Friday</div>
             </div>
            </div>
            </header>
        );
    }
}

export default Header;