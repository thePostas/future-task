import React from 'react';
import { PhotosessionInfo } from './photosessionInfo';
import { PhotosessionInfoMobile } from './photosessionInfoMobile';
import Photos from '../../containers/content/photos';
import Sponsor from '../../containers/content/sponsor';
import { Schedule } from './schedule'

export const MainContent = () => {
  return (
      <main className="main-content">
          <PhotosessionInfo/>
          <PhotosessionInfoMobile/>
          <Photos/>
          <Sponsor/>
          <Schedule/>
      </main>
  )
};