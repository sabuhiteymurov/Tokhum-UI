import { titleOval3 } from '../assets/images';

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
      </div>
    </section>
  );
};

export default Shop;
