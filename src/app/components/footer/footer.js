import React from 'react';
import { FooterTop } from './footerTop';
import { FooterBottom } from './footerBottom';

export const Footer = () => {
  return (
      <footer className="footer">
          <FooterTop/>
          <FooterBottom/>
      </footer>
  )
};