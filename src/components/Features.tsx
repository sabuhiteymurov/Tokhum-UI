import { RiCactusLine } from 'react-icons/ri';
import { TbFlower, TbLeaf, TbPlant2 } from 'react-icons/tb';

const Features = () => {
  return (
    <section className='section-features'>
      <div className='features-container container'>
        <div className='feature'>
          <div className='feature-icon'>
            <RiCactusLine />
          </div>
          <h3 className='feature-title'>
            Customizable
            <br />
            pots
          </h3>
        </div>
        <div className='feature'>
          <div className='feature-icon'>
            <TbFlower />
          </div>
          <h3 className='feature-title'>
            Clear
            <br />
            instructions
          </h3>
        </div>
        <div className='feature'>
          <div className='feature-icon'>
            <TbLeaf />
          </div>
          <h3 className='feature-title'>
            Full eco-friendly
            <br />
            mindset
          </h3>
        </div>
        <div className='feature'>
          <div className='feature-icon'>
            <TbPlant2 />
          </div>
          <h3 className='feature-title'>
            Easy guide
            <br />
            to plant-caring
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Features;
