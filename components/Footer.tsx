"use client";

import React from 'react'
import Container from './Container'
import FooterTop from './FooterTop'
import FooterBottom from './FooterBottom';

const Footer = () => {
  return (
    <footer className='border-t'>
      <Container>
          <FooterTop />
          <FooterBottom />      
      </Container>
    </footer>
  )
}

export default Footer