import React, { Component } from 'react';
import {
  productImg5,
  productImg6,
  productImg7,
  productImg8,
} from '../assets/images';
//@ts-ignore
import Slider from 'react-slick';
import Product from './Product';
//@ts-ignore
import uuid from 'react-uuid';

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'red' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'green' }}
      onClick={onClick}
    />
  );
}

export default class CustomArrows extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
      <div>
        <h2>Custom Arrows</h2>
        <Slider {...settings}>
          <Product
            key={uuid()}
            {...{
              productName: 'Rapunzel',
              productImg: productImg5,
              productPrice: '132.00',
              productFeatures: ['70-80cm', '90-100cm', '+1'],
              availability: true,
            }}
          />
          <Product
            key={uuid()}
            {...{
              productName: 'Rapunzel',
              productImg: productImg6,
              productPrice: '132.00',
              productFeatures: ['70-80cm', '90-100cm', '+1'],
              availability: false,
            }}
          />
          <Product
            key={uuid()}
            {...{
              productName: 'Rapunzel',
              productImg: productImg7,
              productPrice: '132.00',
              productFeatures: ['70-80cm'],
              availability: true,
            }}
          />
          <Product
            key={uuid()}
            {...{
              productName: 'Rapunzel',
              productImg: productImg8,
              productPrice: '132.00',
              productFeatures: ['70-80cm', '90-100cm', '+1'],
              availability: true,
            }}
          />
        </Slider>
      </div>
    );
  }
}
