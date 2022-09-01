import React, { Component } from 'react';
import * as Constant from './Constant';
import Style from './Home.scss'
import banner from './../images/home-right.png';
import SimpleButon from '../component/button/SimpleButon';
// const CardInfo= ['Randhir', 'Gyan', 'Kapil', 'AmanPeet'];
const CardInfo=[
    {cardHader:'1', cardInfo:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus'},
    {cardHader:'2', cardInfo:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus'},
    {cardHader:'3', cardInfo:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus'},
]
class Home extends Component {
    render() {
        return (
           <div className='container'>
             <div className='bannerRow'>
                <div className="banner-left">
                <div className='header'> {Constant.HomeHader}</div> 
                <div className='subHeader'>{Constant.HomeBannerInfo}</div> 
                <div className='marTop20'>
                <SimpleButon text="Get Start" cname="greyBtn" />
                </div>
            </div>
                <div className='banner'>
                 <img src={banner} />
              </div>
            </div>
            
<div className='cardRow'>
    {
        CardInfo.map((Data)=>
        <div className='cardCol'>
        <div className='card-number'> {Data.cardHader}</div>
        <div className='card-info'> {Data.cardInfo}</div>
    </div>
        )
    }
</div>
  </div>
        );
    }
}
export default Home;