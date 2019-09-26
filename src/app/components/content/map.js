import React from 'react';

export const Map = () => {
    return (
        <section className={'map'}>
            <div className="map__inner">
                <iframe className={'map__inner-iframe'}
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad3610f818e1e0660fd0ed5cb0bc6353fcefadb90261590c276376b81c7f6cced&amp;source=constructor"
                    width="1280" height="509" frameBorder="0"></iframe>
            </div>
        </section>
    )
};