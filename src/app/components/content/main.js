import React from 'react';
import { PhotosessionInfo } from './photosessionInfo'
import { PhotosessionInfoMobile } from './photosessionInfoMobile'
import Photos from '../../containers/content/photos'

export const MainContent = () => {
  return (
      <main className="main-content">
          <PhotosessionInfo/>
          <PhotosessionInfoMobile/>
          <Photos/>
      </main>
  )
};