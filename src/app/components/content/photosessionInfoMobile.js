import React from 'react';
import VideoBlock from './videoBlock'
import { PhotosessionFeedback } from './PhotosessionFeedback'
import PhotosessionList  from '../../containers/content/photosessionList'

import clockImage from '../../img/clock_mobile.png';
import cameraImage from '../../img/speech.svg';
import moneyImage from '../../img/money.png';
import addressImage from '../../img/address.svg';
import speechImage from '../../img/camera.svg';

const listItems = [
    {img: clockImage, title: '3 часа съемки'},
    {img: cameraImage, title: 'Русский'},
    {img: moneyImage, title: 'от 850$'},
    {img: addressImage, title: 'Дубай'},
    {img: speechImage, title: 'Более 50 фотографий'},
];

export const PhotosessionInfoMobile = () => {
    return (
        <section className="photosession-mobile">
            <h2 className="photosession-mobile__title">
                Фотосессия {'\n'}
                в вертолете
            </h2>
            <VideoBlock/>
            <p className="photosession-mobile__description">
                Полет на вертолете это прекрасная возможность получить новые ощущения! А наш замечательный фотограф запечатлит лучшие моменты!
            </p>
            <PhotosessionList items={listItems}/>
            <PhotosessionFeedback/>
        </section>
    )
};