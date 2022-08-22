import {
  titleOval3,
  shopImg1,
  shopImg2,
  shopImg3,
  shopImg4,
  shopImg5,
  shopImg6,
} from '../assets/images';
import { TiArrowRight } from 'react-icons/ti';

const Shop = () => {
  return (
    <section className='section-shop section'>
      <div className='shop-container container'>
        <h2 className='heading-primary'>What can you buy through Tokhum?</h2>
        <img
          className='heading-oval shop-title_oval'
          src={titleOval3}
          alt='Vector'
        />
        <div className='shop-article-container'>
          <div className='shop-article-container_upper grid'>
            <article className='shop-article'>
              <div className='shop-article_title'>Indoor plants</div>
              <div className='shop-article_desc'>312 plants in stock</div>
              <a href='/' className='shop-article_link'>
                Explore
                <TiArrowRight />
              </a>
              <img
                src={shopImg1}
                alt='plant inside pot'
                className='shop-article_img'
              ></img>
            </article>
            <article className='shop-article'>
              <div className='shop-article_title'>Outdoor plants</div>
              <div className='shop-article_desc'>312 plants in stock</div>
              <a href='/' className='shop-article_link'>
                Explore
                <TiArrowRight />
              </a>
              <img
                src={shopImg2}
                alt='plant inside pot'
                className='shop-article_img'
              ></img>
            </article>
            <article className='shop-article'>
              <div className='shop-article_title'>Seeds</div>
              <div className='shop-article_desc'>312 plants in stock</div>
              <a href='/' className='shop-article_link'>
                Explore
                <TiArrowRight />
              </a>
              <img
                src={shopImg3}
                alt='plant inside pot'
                className='shop-article_img'
              ></img>
            </article>
          </div>
          <div className='shop-article-container_bottom grid'>
            <article className='shop-article'>
              <div className='shop-article_title'>Indoor plants</div>
              <div className='shop-article_desc'>312 plants in stock</div>
              <a href='/' className='shop-article_link'>
                Explore
                <TiArrowRight />
              </a>
              <img
                src={shopImg4}
                alt='plant inside pot'
                className='shop-article_img'
              ></img>
            </article>
            <article className='shop-article'>
              <div className='shop-article_title'>Outdoor plants</div>
              <div className='shop-article_desc'>312 plants in stock</div>
              <a href='/' className='shop-article_link'>
                Explore
                <TiArrowRight />
              </a>
              <img
                src={shopImg5}
                alt='plant inside pot'
                className='shop-article_img'
              ></img>
            </article>
            <article className='shop-article'>
              <div className='shop-article_title'>Seeds</div>
              <div className='shop-article_desc'>312 plants in stock</div>
              <a href='/' className='shop-article_link'>
                Explore
                <TiArrowRight />
              </a>
              <img
                src={shopImg6}
                alt='plant inside pot'
                className='shop-article_img'
              ></img>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
