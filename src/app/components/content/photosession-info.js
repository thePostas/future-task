import React from 'react';
import VideoBlock from './videoBlock'

import clockImage from '../../img/clock.svg';
import cameraImage from '../../img/camera.svg';
import addressImage from '../../img/address.svg';
import speechImage from '../../img/speech.svg';
import cupImage from '../../img/cup.svg';
import starsImage from '../../img/stars.png';


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
              <ul className="photosession__list">
                  <li className="photosession__list-item">
                      <img className={'photosession__list-item-image'} src={clockImage} alt={'img'}/>
                      <span className={'photosession__list-item-title'}>
                          3 часа съемки
                      </span>
                  </li>
                  <li className="photosession__list-item">
                      <img className={'photosession__list-item-image'} src={cameraImage} alt={'img'}/>
                      <span className={'photosession__list-item-title'}>
                          Более 50 фотографий
                      </span>
                  </li>
                  <li className="photosession__list-item">
                      <img className={'photosession__list-item-image'} src={addressImage} alt={'img'}/>
                      <span className={'photosession__list-item-title'}>
                          Москва
                      </span>
                  </li>
                  <li className="photosession__list-item">
                      <img className={'photosession__list-item-image'} src={speechImage} alt={'img'}/>
                      <span className={'photosession__list-item-title'}>
                          Готовы ответить на любые вопросы
                      </span>
                  </li>
              </ul>
              <div className="photosession__feedback">
                  <img className={'photosession__feedback-image'} src={cupImage} alt={'img'}/>
                  <span className={'photosession__feedback-title'}>Более 50 отзывов с оценкой</span>
                  <img className={'photosession__feedback-image photosession__feedback-image_second'} src={starsImage} alt={'img'}/>
              </div>
          </div>
          <div className="photosession__block photosession__block_second">
              <VideoBlock/>
          </div>
      </section>
  )
};