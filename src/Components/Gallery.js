import React from 'react';
import { data } from './data';
import '../Style/Gallery.css';

function gallery() {
  return (
    <>
      <section className='gallery-page'>
        <div className='title'>gallery nature</div>
        <div className='gallery-center section-center'>
          {data.map((gallery) => {
            const { id, img } = gallery;
            return (
              <article className='gallery'>
                <img src={img} alt='' className='gallery-photo' />
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default gallery;
