import React from 'react';
import { Header } from './header/header';
import { MainContent } from './content/main';

export const Wrapper = () => {
    return (
        <div className={'wrapper'}>
            <Header/>
            <MainContent/>
        </div>
    )
};