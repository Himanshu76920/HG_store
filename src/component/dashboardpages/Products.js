import React, { Component } from 'react';
import { PageName } from '../../utils/constant/LoginConstant';
import LeftMenu from '../sidebar/LeftMenu';
import Header from '../header/Header';

class Products extends Component {
    render() {
        return (
           
            <div className='dashboard-container'>
            <Header/>
            <div className='dashboard'>
            <div>
            <LeftMenu/>
            </div>
            <div className='dashboard-item'>
             Products
            </div>
            </div>
        </div>
        );
    }
}

export default Products;