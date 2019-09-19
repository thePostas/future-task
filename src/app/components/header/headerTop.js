import React from 'react';
import { Logo } from '../logo';
import { HeaderTel } from '../header/headerTel';
import { HeaderCityMobile } from '../header/HeaderCityMobile';

export const HeaderTop = () => {
    return (
        <div className={'header__top'}>
            <Logo/>
            <HeaderTel>
                8(800)-123-12-12
            </HeaderTel>
            <HeaderCityMobile/>
        </div>
    )
};