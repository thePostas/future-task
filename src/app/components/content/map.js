import React from 'react';
import { AdditionalPhotosessionInfo } from './additionalPhotosessionInfo';

export const Map = () => {
    return (
        <section className={'map'}>
            <iframe className={'map__iframe'}
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad3610f818e1e0660fd0ed5cb0bc6353fcefadb90261590c276376b81c7f6cced&amp;source=constructor"
                    width="1280" height="509" frameBorder="0">
            </iframe>
            <iframe className={'map__iframe map__iframe_mobile'}
                src="https://yandex.ru/map-widget/v1/?um=constructor%3Af4f0cd01eafa968b5c153037e79583e0658ba84730251119e4debf39e55afbce&amp;source=constructor"
                width="320" height="509" frameBorder="0">
            </iframe>
            <div className="map__inner">
                <AdditionalPhotosessionInfo/>
            </div>
        </section>
    )
};