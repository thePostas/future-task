import React from 'react';
import { PhotosessionInfo } from './photosessionInfo';
import { PhotosessionInfoMobile } from './photosessionInfoMobile';
import Photos from '../../containers/content/photos';
import Sponsor from '../../containers/content/sponsor';
import { Schedule } from '../../containers/content/schedule'
import { Map } from './map'

export const MainContent = () => {
  return (
      <main className="main-content">
          <PhotosessionInfo/>
          <PhotosessionInfoMobile/>
          <Photos/>
          <Sponsor/>
          <Schedule/>
          <Map/>
      </main>
  )
};