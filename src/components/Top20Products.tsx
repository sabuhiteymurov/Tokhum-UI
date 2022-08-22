import { useRef } from 'react';
//@ts-ignore
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import {
  titleOval2,
  productImg1,
  productImg2,
  productImg3,
  productImg4,
} from '../assets/images';

import { HiOutlineArrowRight, HiOutlineArrowLeft } from 'react-icons/hi';
import Product from './Product';
//@ts-ignore
import uuid from 'react-uuid';

const Top20Products = () => {
  const sliderRef = useRef(null);

  const handlePrev = () => {
    //@ts-ignore
    sliderRef.current.slickPrev();
  };
  const handleNext = () => {
    //@ts-ignore
    sliderRef.current.slickNext();
  };

  // React-slick slider settings
  const settings = {
    slidesToShow: 4,
    arrows: false,
    className: 'products-slider',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className='section-products'>
      <div className='products-container container'>
        <div className='products-container-header'>
          <h2 className='heading-primary'>Tokhum's top 20</h2>
          <img
            className='heading-oval top-20-title_oval'
            src={titleOval2}
            alt='Vector'
          />
          <div className='products-container-header_buttons'>
            <HiOutlineArrowLeft className='arrow-button' onClick={handlePrev} />
            <HiOutlineArrowRight
              className='arrow-button'
              onClick={handleNext}
            />
          </div>
        </div>
        <div className='products '>
          <Slider ref={sliderRef} {...settings}>
            <Product
              key={uuid()}
              {...{
                productName: 'Rapunzel',
                productImg: productImg1,
                productPrice: '132.00',
                productFeatures: ['70-80cm', '90-100cm', '+1'],
                availability: true,
                bottomBg: 'gray',
              }}
            />
            <Product
              key={uuid()}
              {...{
                productName: 'Rapunzel',
                productImg: productImg2,
                productPrice: '132.00',
                productFeatures: ['70-80cm', '90-100cm', '+1'],
                availability: true,
                bottomBg: 'gray',
              }}
            />
            <Product
              key={uuid()}
              {...{
                productName: 'Rapunzel',
                productImg: productImg3,
                productPrice: '132.00',
                productFeatures: ['70-80cm', '90-100cm', '+1'],
                availability: true,
                bottomBg: 'gray',
              }}
            />
            <Product
              key={uuid()}
              {...{
                productName: 'Rapunzel',
                productImg: productImg4,
                productPrice: '132.00',
                productFeatures: ['70-80cm', '90-100cm', '+1'],
                availability: true,
                bottomBg: 'gray',
              }}
            />
            <Product
              key={uuid()}
              {...{
                productName: 'Rapunzel',
                productImg: productImg4,
                productPrice: '132.00',
                productFeatures: ['70-80cm', '90-100cm', '+1'],
                availability: true,
                bottomBg: 'gray',
              }}
            />
            <Product
              key={uuid()}
              {...{
                productName: 'Rapunzel',
                productImg: productImg4,
                productPrice: '132.00',
                productFeatures: ['70-80cm', '90-100cm', '+1'],
                availability: true,
                bottomBg: 'gray',
              }}
            />
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Top20Products;
