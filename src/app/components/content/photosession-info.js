import React from 'react';

import clockImage from '../../img/clock.svg'
import cameraImage from '../../img/camera.svg'
import addressImage from '../../img/address.svg'
import speechImage from '../../img/speech.svg'
import cupImage from '../../img/cup.svg'


export const PhotosessionInfo = () => {
  return (
      <section className="photosession-info">
          <div className="photosession-info__block photosession-info__block_first">
              <h2 className="photosession-info__title">
                  Фотосессия {'\n'}
                  в вертолете
              </h2>
              <p className="photosession-info__description">
                  Полет на вертолете это прекрасная возможность получить новые ощущения! А наш замечательный фотограф запечатлит лучшие моменты
              </p>
              <ul className="photosession-info__list">
                  <li className="photosession-info__list-item">
                      <img className={'photosession-info__list-item-image'} src={clockImage} alt={'img'}/>
                      <span className={'photosession-info__list-item-title'}>
                          3 часа съемки
                      </span>
                  </li>
                  <li className="photosession-info__list-item">
                      <img className={'photosession-info__list-item-image'} src={cameraImage} alt={'img'}/>
                      <span className={'photosession-info__list-item-title'}>
                          Более 50 фотографий
                      </span>
                  </li>
                  <li className="photosession-info__list-item">
                      <img className={'photosession-info__list-item-image'} src={addressImage} alt={'img'}/>
                      <span className={'photosession-info__list-item-title'}>
                          Москва
                      </span>
                  </li>
                  <li className="photosession-info__list-item">
                      <img className={'photosession-info__list-item-image'} src={speechImage} alt={'img'}/>
                      <span className={'photosession-info__list-item-title'}>
                          Готовы ответить на любые вопросы
                      </span>
                  </li>
              </ul>
              <div className="photosession-info__feedback">
                  <img className={'photosession-info__feedback-image'} src={cupImage} alt={'img'}/>
                  <span className={'photosession-info__feedback-title'}>Более 50 отзывов с оценкой</span>
              </div>
              <div className="photosession-info__block photosession-info__block_second">

              </div>
          </div>
      </section>
  )
};