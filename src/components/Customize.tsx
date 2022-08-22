import { customizeVector1, customizeVector2 } from '../assets/images';

const Customize = () => {
  return (
    <section className='section-customize'>
      <div className='customize-container container grid grid--2-cols'>
        <article className='customize customize-1'>
          <img
            className='customize-vector'
            src={customizeVector1}
            alt='vector'
          />
          <h4 className='customize_title'>
            Newbie with plants?
            <br />
            Let us help you.
          </h4>
          <p className='customize_text'>
            If you are new with plants, let us help you. Wonder how? We will ask
            you a few quick questions and you are expected to answer them. You
            will get your plant(s) in no time. :)
          </p>
          <a href='/' className='customize_button'>
            Find my plant
          </a>
        </article>
        <article className='customize customize-2'>
          <img
            className='customize-vector'
            src={customizeVector2}
            alt='vector'
          />
          <h4 className='customize_title'>
            Customize your own designed pot
            <br />
            with Tokhum
          </h4>
          <p className='customize_text'>
            Don't like what we have in our stock? That's ok, really... Create
            your own desired pot and let us put your favorite plant in it.
            Tokhum will always be there for your taste. :)
          </p>
          <a href='/' className='customize_button'>
            More
          </a>
        </article>
      </div>
    </section>
  );
};

export default Customize;
