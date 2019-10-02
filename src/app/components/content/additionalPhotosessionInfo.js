import React from 'react';
import { Photographer } from './photographer';

export const AdditionalPhotosessionInfo = () => {
  return (
      <div className="additional-photosession-info">
          <div className="additional-photosession-info__item">
              <div className="additional-photosession-info__item-number">
                  1
              </div>
              <div className="additional-photosession-info__item-wrapper">
                  <span className="additional-photosession-info__item-title">
                  Где встречаемся?
                  </span>
                  <span className="additional-photosession-info__item-text">
                  Москва
              </span>
              </div>
          </div>
          <div className="additional-photosession-info__item">
              <div className="additional-photosession-info__item-number">
                  2
              </div>
              <div className="additional-photosession-info__item-wrapper">
                  <span className="additional-photosession-info__item-title">
                  Время съемки
                  </span>
                  <span className="additional-photosession-info__item-text">
                  3 часа
              </span>
              </div>
          </div>
          <div className="additional-photosession-info__item">
              <div className="additional-photosession-info__item-number">
                  3
              </div>
              <div className="additional-photosession-info__item-wrapper">
                  <span className="additional-photosession-info__item-title">
                  Мест осталось
                  </span>
                  <span className="additional-photosession-info__item-text">
                  2 места
              </span>
              </div>
          </div>
          <Photographer/>
      </div>
  )
};