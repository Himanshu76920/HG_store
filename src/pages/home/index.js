import React from 'react';
import * as Constant from '../../utils/constant/HomeConstant';
import Style from './index.scss'
import banner from './../../images/home-right.png';
import { LinkButton } from './../../component/button';

const CardInfo=[
    {cardHader:'1', cardInfo:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus'},
    {cardHader:'2', cardInfo:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus'},
    {cardHader:'3', cardInfo:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus'},
]



export default function index() {
  return (
    <div className='container'>
             <div className='bannerRow'>
                <div className="banner-left">
                <div className='header'> {Constant.HomeHader}</div> 
                <div className='subHeader'>{Constant.HomeBannerInfo}</div> 
                <div className='marTop20'>
                <LinkButton text="Get Start" cname="greyBtn" to="login" />
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
  )
}
