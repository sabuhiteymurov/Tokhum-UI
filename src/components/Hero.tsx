import {
  titleOval,
  vector1,
  vector2,
  vector3,
  vector4,
  heroPot1,
  heroPot2,
  heroPot3,
  heroPot4,
} from '../assets/images';
import { HiOutlineArrowRight } from 'react-icons/hi';

const Hero = () => {
  return (
    <section className='hero container'>
      <div className='hero-article-container grid'>
        <article className='hero-article-container_article-1'>
          <h2 className='hero-title heading-primary'>
            Your eco-friendly plant store
          </h2>
          <img
            src={titleOval}
            alt='vector'
            className='hero-article-1_vector heading-oval'
          />
          <p className='hero-description'>
            Tokhum helps the society get to know the idea of eco-friendly
            products,
            <br />
            sustainability, and aestheticism through a variety of greens
          </p>
          <a href='/' className='hero-cta-button btn'>
            Start exploring
          </a>
        </article>
        <article className='hero-article-container_article-2'>
          <img className='hero-pot-1' src={heroPot1} alt='Pot' />
          <img src={vector1} alt='vector' className='hero-article-2_vector' />
          <h4 className='hero-article-2_title'>
            New arrivals on
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;office plants
          </h4>
          <a href='/' className='hero-article-2_button btn'>
            <HiOutlineArrowRight />
          </a>
        </article>
        <article className='hero-article-container_article-3'>
          <img className='hero-pot-2' src={heroPot2} alt='Pot' />
          <img src={vector2} alt='vector' className='hero-article-3_vector' />
          <h4 className='hero-article-3_title'>
            40% OFF
            <br />
            for all pots!
          </h4>

          <a href='/' className='hero-article-3_button btn'>
            <HiOutlineArrowRight />
          </a>
        </article>
        <article className='hero-article-container_article-4'>
          <img className='hero-pot-3' src={heroPot3} alt='Pot' />
          <img src={vector3} alt='vector' className='hero-article-4_vector' />
          <h4 className='hero-article-4_title'>
            10% OFF
            <br />
            for all garden flowers!
          </h4>
          <a href='/' className='hero-article-4_button btn'>
            <HiOutlineArrowRight />
          </a>
        </article>
        <article className='hero-article-container_article-5'>
          <img className='hero-pot-4' src={heroPot4} alt='Pot' />
          <img src={vector4} alt='vector' className='hero-article-5_vector' />
          <h4 className='hero-article-5_title'>
            Outdoor
            <br />
            Plants
          </h4>
          <a href='/' className='hero-article-5_button btn'>
            <HiOutlineArrowRight />
          </a>
        </article>
      </div>
    </section>
  );
};

export default Hero;
