import React from 'react';
import VideoBlock from './videoBlock'
import { PhotosessionFeedback } from './PhotosessionFeedback'
import PhotosessionList  from '../../containers/content/photosessionList'

import clockImage from '../../img/clock.svg';
import cameraImage from '../../img/camera.svg';
import addressImage from '../../img/address.svg';
import speechImage from '../../img/speech.svg';

const listItems = [
    {img: clockImage, title: '3 часа съемки'},
    {img: cameraImage, title: 'Более 50 фотографий'},
    {img: addressImage, title: 'Москва'},
    {img: speechImage, title: 'Готовы ответить на любые вопросы'},
];

export const PhotosessionInfo = () => {
  return (
      <section className="photosession">
          <div className="photosession__block photosession__block_first">
              <h2 className="photosession__title">
                  Фотосессия {'\n'}
                  в вертолете
              </h2>
              <p className="photosession__description">
                  Полет на вертолете это прекрасная возможность получить новые ощущения! А наш замечательный фотограф запечатлит лучшие моменты
              </p>
              <PhotosessionList items={listItems}/>
              <PhotosessionFeedback/>
          </div>
          <div className="photosession__block photosession__block_second">
              <VideoBlock/>
          </div>
      </section>
  )
};