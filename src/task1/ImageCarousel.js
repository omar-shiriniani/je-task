import React, { useEffect, useState } from 'react';
import { fetchImageUrls } from '../api/index';
import './styles.css';

const ImageCarousel = () => {
  const [imgArray, setimgArray] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    resdata();
  }, []);

  const resdata = async () => {
    try {
      let res = await fetchImageUrls();
      setimgArray(res);
    } catch (error) {
      console.log(error);
    }
  };

  const previousSlide = () => {
    const lastIndex = imgArray.length - 1;
    const shouldResetIndex = currentImageIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;
    setCurrentImageIndex(index);
  };

  const nextSlide = () => {
    const lastIndex = imgArray.length - 1;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(index);
  };

  return (
    <div>
      {imgArray.length > 0 && (
        <>
          <Arrow
            direction='left'
            clickFunction={previousSlide}
            glyph='&#5176;'
          />
          <ImageSlide url={imgArray[currentImageIndex]} />
          <Arrow direction='right' clickFunction={nextSlide} glyph='&#5171;' />
        </>
      )}
    </div>
  );
};

const Arrow = ({ direction, clickFunction, glyph }) => (
  <div className={`slide-arrow ${direction}`} onClick={clickFunction}>
    {glyph}
  </div>
);

const ImageSlide = ({ url }) => {
  return <img src={url} className='img' alt='img' />;
};
export default ImageCarousel;
