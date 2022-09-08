import React, { Component } from 'react';
import Style from './Index.scss';
import editicon from '../../images/edit.png'; 
import arrowupcircle from '../../images/arrow-up-circle.png'; 
import docment from '../../images/docment.png'; 

const Carvalue=[
    {cardname: "Sale", cardprice:'2,50,000.00', cname: 'green-card',  icon:'images/edit.png'},
    {cardname: "Active Appointment", cardprice:'100.00', cname: 'blue-card', icon:'images/arrow-up-circle.png'},
    {cardname: "Cancled Appointment", cardprice:'50.00', cname: 'orange-card',  icon:'images/docment.png'}
    
        
    ]
class Index extends Component {
    render() {
        return (
            <>
              <div className='small-Card-row'>
                       {
                         Carvalue.map((cardinfo)=>
                         <div className={"small-card " + (cardinfo.cname)}>
                         <div className='small-card-icon'><img src={cardinfo.icon} alt="img"/></div>
                         <div className='small-info'>
                         <div className='small-cad-head'> {cardinfo.cardname}</div> 
                         {cardinfo.cardprice}
                        </div>  
                         </div>
                        )
                       }
                        
                        {/* <div className='small-card blue-card'>fdgfg</div>
                        <div className='small-card orange-card'>fdgfg</div> */}
                    </div>

<div className='large-card-row'>
    <div className='left-container'>
        <div className='dark-card'> 
        hghfg
        </div>
    </div>
    <div className='right-container'>
         <div className='dark-card'> 
        hghfg
        </div> </div>

</div>

            
            </>
        );
    }
}

export default Index;