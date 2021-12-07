import React from 'react';
import { data } from './data';
import '../Style/Gallery.css';

function gallery() {
  return (
    <>
      <section className='gallery-page section_' id='gallery'>
        <div className='title'>gallery nature</div>
        <div className='gallery-center section-center'>
          {data.map((gallery) => {
            const { id, img } = gallery;
            return (
              <a href={img} target='_blank'>
                <article className='gallery'>
                  <div className='gallery-photo-container'>
                    <img src={img} alt='' className='gallery-photo' />
                  </div>
                </article>
              </a>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default gallery;
