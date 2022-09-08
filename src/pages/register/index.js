import React from 'react'
import * as Constant from '../../utils/constant/LoginConstant';
import { SimpleButton } from './../../component/button';
import { LinkButton } from './../../component/button';

export default function index() {
  return (
    <div className='login-bg'>
       <div className='logo-header'>
                <LinkButton text="E-KABAD" to="/" />

                </div>
    <div className='login-container'>
        <div className='Login-bg'>
            <div className='login-name'>Register</div>
            <div className='login-header'> {Constant.LoginHeader}</div>
            <div className='form-row'>
            <div className='form-colum'>
                <label> Full First</label>
                <input type='email' className='input-class' placeholder='Full First'></input>
                </div>

                <div className='form-colum'>
                <label> Email</label>
                <input type='email' className='input-class' placeholder='Email ID'></input>
                </div>

                <div className='form-colum'>
                <label> Password</label>
                <input type='password' className='input-class' placeholder='Password'></input>
                </div>

                <div className='form-colum'>
                <label>Confirm Password</label>
                <input type='password' className='input-class' placeholder='Confirm Password'></input>
                </div>     
             
    <div className='form-colum'>
    <LinkButton text="Submit" to="/login" cname="large-link-btn" />
        </div>
<div className='forget-pass'>

<LinkButton text="Log in" to="/login" />
</div>

    </div>
        </div>
    </div></div>



  )
}
