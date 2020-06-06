import React from 'react';
import ImageGallery from 'react-image-gallery';
import '../../../node_modules/react-image-gallery/styles/css/image-gallery.css';
import './style.css';
import slide2 from '../../assets/slide002.png';
import slide3 from '../../assets/slide003.png';
import slide4 from '../../assets/slide004.png';
import slide5 from '../../assets/slide005.png';
import slide6 from '../../assets/slide006.png';

export default function SlideShow() {
  const images = [
    {
      original: slide2,
    },
    {
      original: slide4,
    },
    {
      original: slide3,
    },
    {
      original: slide5,
    },
    {
      original: slide6,
    },
  ];
  return (
    <ImageGallery
      showPlayButton={false}
      showThumbnails={false}
      slideDuration={3000}
      showBullets={false}
      autoPlay={true}
      infinite={true}
      disableSwipe={true}
      lazyLoad={false}
      items={images}
      disableArrowKeys={true}
      showFullscreenButton={false}
      showIndex={false}
      showNav={false}
    />
  );
}
