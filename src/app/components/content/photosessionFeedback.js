import React from 'react';
import cupImage from '../../img/cup.svg';
import starsImage from '../../img/stars.png';

export const PhotosessionFeedback = () => {
  return (
      <div className="photosession-feedback">
          <img className={'photosession-feedback-image'} src={cupImage} alt={'img'}/>
          <span className={'photosession-feedback-title'}>Более 50 отзывов с оценкой</span>
          <img className={'photosession-feedback-image photosession-feedback-image_second'} src={starsImage} alt={'img'}/>
      </div>
  )
};