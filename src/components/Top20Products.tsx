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
            <HiOutlineArrowLeft className='arrow-button' />
            <HiOutlineArrowRight className='arrow-button' />
          </div>
        </div>
        <div className='products grid grid--4-cols'>
          <Product
            key={uuid()}
            {...{
              productName: 'Rapunzel',
              productImg: productImg1,
              productPrice: '132.00',
              productFeatures: ['70-80cm', '90-100cm', '+1'],
              availability: true,
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
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Top20Products;
