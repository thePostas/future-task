import React from 'react';
import cupImage from '../../img/cup.svg';
import starsImage from '../../img/stars.png';

export const PhotosessionFeedback = () => {
  return (
      <div className="photosession-feedback">
          <img className={'photosession-feedback__image'} src={cupImage} alt={'img'}/>
          <div className="photosession-feedback__wrapper">
              <span className={'photosession-feedback__title'}>Более 50 отзывов с оценкой</span>
              <img className={'photosession-feedback__image photosession-feedback__image_second'} src={starsImage} alt={'img'}/>
          </div>
      </div>
  )
};