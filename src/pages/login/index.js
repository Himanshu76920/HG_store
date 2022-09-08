import React, { Component } from 'react';
import * as Constant from '../../utils/constant/LoginConstant';
//import { SimpleButton } from './../../component/button';
import { LinkButton } from './../../component/button';
import Style from './Login.scss';
class Login extends Component {
    render() {
        return (
            <div className='login-bg'>
                <div className='logo-header'>
                <LinkButton text="E-KABAD" to="/" />

                </div>
            <div className='login-container'>
                <div className='Login-bg'>
                    <div className='login-name'> {Constant.PageName}</div>
                    <div className='login-header'> {Constant.LoginHeader}</div>
                    <div className='form-row'>
                        <div className='form-colum'>
                        <label> Email</label>
                        <input type='email' className='input-class' placeholder='Email ID'></input>
                        </div>

                        <div className='form-colum'>
                        <label> Password</label>
                        <input type='password' className='input-class' placeholder='Password'></input>
                        </div>
                       <div className='remember'>
                       <label>
                       <input type="checkbox"></input>
                        remember me                       
                    </label>
                </div>
            <div className='form-colum'>
            <LinkButton text="SIGN IN" to="/dashboard" cname="large-link-btn" />
                
                </div>
<div className='forget-pass'>
    <a href='#'>Forget Password</a>
    <LinkButton text="Register" to="/register" />
</div>

                    </div>
                </div>
            </div></div>
        );
    }
}

export default Login;