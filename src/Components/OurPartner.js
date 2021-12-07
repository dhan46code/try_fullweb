import React from 'react';
import '../Style/OurPartner.css';
import {
  SiReact,
  SiPexels,
  SiNetlify,
  SiHtml5,
  SiCss3,
  SiLinuxfoundation,
} from 'react-icons/si';

function OurPartner() {
  return (
    <section className='partner_page' id='our_partner'>
      <div className='title'>
        <h2>our partner</h2>
        <div className='underline'></div>
      </div>
      <div className='section-center'>
        <div className='logo-icons'>
          <SiReact className='react-icons' />
          <SiPexels className='pexels-icons' />
          <SiNetlify className='netlify-icons' />
          <SiHtml5 className='html5-icons' />
          <SiCss3 className='css3-icons' />
          <SiLinuxfoundation className='linuxfoundation-icons' />
        </div>
      </div>
    </section>
  );
}

export default OurPartner;
