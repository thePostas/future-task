import React from 'react';
import { Header } from './header/header';
import { MainContent } from './content/main';
import { Map } from './content/map';
import Feedback from '../containers/content/feedback';
import { Footer } from '../components/footer/footer';

export const Wrapper = () => {
    return (
        <div className={'wrapper'}>
            <Header/>
            <MainContent/>
            <Map/>
            <Feedback/>
            <Footer/>
        </div>
    )
};