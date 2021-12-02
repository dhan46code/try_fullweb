import React, { useState, useEffect } from 'react';
import { data } from './data';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import '../Style/HeaderSlider.css';

export default function Header_SliderImage() {
  const [image, setImage] = useState(data);
  const [index, setIndex] = useState(0);

  // krna sblum dan sesudah if next tidak ada buat condition
  useEffect(() => {
    const lastIndex = image.length - 1;
    if (index < 0) {
      return setIndex(lastIndex);
    }
    if (index > lastIndex) {
      return setIndex(0);
    }
  }, [index, image]);

  // automatically
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <>
      <section className='slider-center'>
        {image.map((images, indexImage) => {
          const { img } = images;

          let position = 'nextSlide';

          if (indexImage === index) {
            position = 'activeSlide';
          }
          if (
            indexImage === index - 1 ||
            (index === 0 && indexImage === image.length - 1)
          ) {
            position = 'lastSlide';
          }

          return (
            <article className={`slider-image ${position}`} key={indexImage}>
              <img src={img} alt='' className='picture' />
            </article>
          );
        })}
        {/* button slide */}
        <div className='button-container'>
          <button className='prevBtn' onClick={() => setIndex(index - 1)}>
            <FaArrowLeft />
          </button>
          <button className='nextBtn' onClick={() => setIndex(index + 1)}>
            <FaArrowRight />
          </button>
        </div>
        {/* slide-text */}
        <div className='slide-text'>
          <div className='main-text'>
            <h1>NATURE</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laboriosam deleniti sunt facere, nam dolorum nulla assumenda
              blanditiis dignissimos laborum. Pariatur dolores eveniet similique
              quas quae.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
