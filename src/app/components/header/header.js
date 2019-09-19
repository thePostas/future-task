import React from 'react';
import { HeaderTop } from './headerTop'
import { HeaderBottom } from './headerBottom'

export const Header = () => {
    return (
        <header className={'header'}>
            <HeaderTop/>
            <HeaderBottom/>
        </header>
    )
};