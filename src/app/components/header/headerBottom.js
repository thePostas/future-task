import React from 'react';
import { HeaderTitle } from './headerTitle'
import { HeaderPrice } from './HeaderPrice'
import { ReservationButton } from './ReservationButton'

export const HeaderBottom = () => {
    return (
        <div className="header__bottom">
            <HeaderTitle/>
            <HeaderPrice price={'1500'}/>
            <ReservationButton/>
        </div>
    )
};