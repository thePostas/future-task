import React from 'react';
import loginImage from '../../img/login.svg';

export const LoginButton = () => {
    return (
        <div className="header__login">
            <img className={'header__login-image'} src={loginImage} alt={'login'}/>
        </div>
    )
};