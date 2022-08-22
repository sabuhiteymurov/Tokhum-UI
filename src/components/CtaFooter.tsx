import {
  scribbleVector,
  sparkleVector,
  titleOval4,
  sendIcon,
} from '../assets/images';

const CtaFooter = () => {
  return (
    <section className='section-cta-footer'>
      <div className='cta-footer-container container'>
        <div className='cta-footer'>
          <h3 className='heading-primary cta-footer_title'>
            Subscribe
            <br />
            to get the latest updates from Tokhum
          </h3>
          <img
            className='heading-oval footer-cta-title_oval'
            src={titleOval4}
            alt='Vector'
          />
          <p className='cta-footer_text'>
            How to receive updates from Tokhum? When we say updated we mean new
            products, new categories, new features... Just drop your email and
            we will take care of the rest. :)
          </p>
          <form className='cta-footer_form'>
            <input
              type='email'
              className='cta-footer_form-input'
              placeholder='Email address'
            />
            <button className='cta-footer_form-button'>
              <img src={sendIcon} alt='send icon' />
            </button>
          </form>
        </div>
        <img
          className='cta-footer-container_sparkle'
          src={sparkleVector}
          alt='sparkle'
        />
      </div>
      <img
        className='section-cta-footer_scribble'
        src={scribbleVector}
        alt='scribble'
      />
    </section>
  );
};

export default CtaFooter;
