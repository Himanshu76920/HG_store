import React, { Component } from 'react';
import Style from './Graphpage.scss';
import editicon from '../../images/edit.png'; 
import arrowupcircle from '../../images/arrow-up-circle.png'; 
import docment from '../../images/docment.png'; 

const Carvalue=[
    {cardname: "Sale", cardprice:'2,50,000.00', cname: 'green-card',  icon:'images/edit.png'},
    {cardname: "Active Appointment", cardprice:'100.00', cname: 'blue-card', icon:'images/arrow-up-circle.png'},
    {cardname: "Cancled Appointment", cardprice:'50.00', cname: 'orange-card',  icon:'images/docment.png'}
    ]
const Itembar=[
    {price: 'Rate 5 -', itemname: 'Glass', progressvalue: '50'},
    {price: 'Rate 3 -', itemname: 'Wood', progressvalue: '20'},
    {price: 'Rate 9 -', itemname: 'Newspaper', progressvalue: '25'},
    {price: 'Rate 4 -', itemname: 'Iron', progressvalue: '80'},
    {price: 'Rate 6 -', itemname: 'Copper', progressvalue: '45'},
    {price: 'Rate 8 -', itemname: 'Electronic', progressvalue: '55'},
]
const Weekprogress=[
    {weekvaluedata: '10'},
    {weekvaluedata: '20'},
    {weekvaluedata: '30'},
    {weekvaluedata: '40'},
    {weekvaluedata: '50'},
    {weekvaluedata: '60'},
    {weekvaluedata: '70'},
]


class Graphpage extends Component {
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
        <div className='card-header'>
            <div className='card-name'> Latest  Progress </div>
            <div className='card-name-info'> More..</div>
        </div>
{
    Itembar.map((itemdata)=>
    <div className='progress-bar-row'>
    <div className='itme-rate'> {itemdata.price} </div>
    <div className='itme-name'> {itemdata.itemname} </div>
    <div className='itme-bar'> <progress min="0" max="100" value={itemdata.progressvalue} /> {itemdata.progressvalue}</div>
</div>
    )

}
        </div>
    </div>
    <div className='right-container'>
         <div className='dark-card'> 
        <div className='card-header'>
            <div className='card-name'> Last Week Data </div>
            <div className='card-name-info'> More..</div>
        </div>
<div className='week-day'>
    <div>Mon </div>
    <div>Tue </div>
    <div>Wed </div>
    <div>Thurs </div>
    <div>Fri </div>
    <div>Sat </div>
    <div>Sun </div>
</div>

    <div className='vertical-progress'>
        {
            Weekprogress.map((weekdata)=>
            <div className='weekpvalue'>
                <div className='itme-bar '> 
                <progress min="0" max="100" value={weekdata.weekvaluedata} />
                </div>
             </div>
            )
        }
        
     </div>

  


        
        </div> 
        </div>

</div>

            
            </>
        );
    }
}

export default Graphpage;