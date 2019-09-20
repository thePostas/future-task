import React from 'react';
import loginImage from '../../img/login.svg';

export const LoginButton = () => {
    return (
        <div className="login header__login">
            <img className={'login__image'} src={loginImage} alt={'login'}/>
        </div>
    )
};