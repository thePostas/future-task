import React from 'react';
import { PhotosessionInfo } from './photosessionInfo'
import { PhotosessionInfoMobile } from './photosessionInfoMobile'

export const MainContent = () => {
  return (
      <main className="main-content">
          <PhotosessionInfo/>
          <PhotosessionInfoMobile/>
      </main>
  )
};