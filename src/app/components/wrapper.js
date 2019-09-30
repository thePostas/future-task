import React from 'react';
import { Header } from './header/header';
import { MainContent } from './content/main';
import { Map } from './content/map'

export const Wrapper = () => {
    return (
        <div className={'wrapper'}>
            <Header/>
            <MainContent/>
            <Map/>
        </div>
    )
};