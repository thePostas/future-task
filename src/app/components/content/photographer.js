import React from 'react';
import photo from '../../img/photographer.png'

export const Photographer = () => {
  return (
      <div className="photographer photographer_position">
          <img src={photo} alt="photo" className="photographer__image"/>
          <div className="photographer__text-wrapper">
              <h5 className="photographer__text-title">
                  Марина Иванова
              </h5>
              <span className="photographer__text-additional">
                  Фотограф
              </span>
              <span className="photographer__text-show-more">
                  <a href="#" className="photographer__text-show-more-link">
                      Показать больше информации о фотографе
                  </a>
              </span>
          </div>
      </div>
  )
};