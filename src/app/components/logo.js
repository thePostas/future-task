import React from 'react';

import logoImage from '../img/logo.png';

export const Logo = () => {
    return (
        <div className={'logo header__logo'}>
            <img
                className={'logo__title'}
                src={logoImage}
                alt={'helyfly'}
                width={129}
                height={23}
            />
        </div>
    )
};