import React, { useRef } from 'react';
import { heartIcon } from '../assets/images';

const Product: React.FC<{
  productImg: any;
  productName: string;
  productPrice: string;
  productFeatures: string[];
  availability: boolean;
  bottomBg: string;
}> = ({
  productName,
  productPrice,
  productFeatures,
  productImg,
  availability,
  bottomBg = 'gray',
}) => {
  const likeIconRef = useRef();
  const handleLikeClick = () => {
    //@ts-ignore
    likeIconRef.current.classList.toggle('liked-product');
  };

  return (
    <article className='product'>
      <img src={productImg} alt='Product' className='product-image' />
      <div
        className='product-icon'
        onClick={handleLikeClick}
        //@ts-ignore
        ref={likeIconRef}
      >
        <img src={heartIcon} alt='heart' />
      </div>
      <div
        className={`product-desc-container ${
          bottomBg === 'white' ? 'bg-white' : ''
        }`}
      >
        <p className='product-name'>{productName}</p>
        <p className='product-price'>{productPrice}</p>
        <div className='product-features-container'>
          {productFeatures.map((feature) => (
            <div
              className={`product-feature ${
                bottomBg === 'white' ? 'bg-gray' : 'bg-white'
              }`}
            >
              {feature}
            </div>
          ))}
        </div>
        <button
          className={`btn product-button ${availability ? '' : 'out-of-stock'}`}
          disabled={availability}
        >
          {availability ? 'Add to basket' : 'Out of stock'}
        </button>
      </div>
    </article>
  );
};

export default Product;
