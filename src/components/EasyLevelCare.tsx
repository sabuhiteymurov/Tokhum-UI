import {
  titleOval3,
  productImg5,
  productImg6,
  productImg7,
  productImg8,
} from '../assets/images';
import { HiOutlineArrowRight, HiOutlineArrowLeft } from 'react-icons/hi';
import Product from './Product';
//@ts-ignore
import uuid from 'react-uuid';

const EasyLevelCare = () => {
  return (
    <section className='section-easy'>
      <div className='products-container container'>
        <div className='products-container-header'>
          <h2 className='heading-primary'>Easy-level care plants</h2>
          <img
            className='heading-oval easy-level-title_oval'
            src={titleOval3}
            alt='Vector'
          />
          <div className='products-container-header_buttons'>
            <HiOutlineArrowLeft className='arrow-button' />
            <HiOutlineArrowRight className='arrow-button' />
          </div>
        </div>
        <div className='products grid grid--4-cols'>
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
        </div>
      </div>
    </section>
  );
};

export default EasyLevelCare;
