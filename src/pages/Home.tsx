import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Top20Products from '../components/Top20Products';
import Customize from '../components/Customize';
import EasyLevelCare from '../components/EasyLevelCare';
import Shop from '../components/Shop';

const Home = () => {
  return (
    <>
      <div className='home-page'>
        <Navbar />
        <Hero />
        <Features />
        <Top20Products />
        <Customize />
        <EasyLevelCare />
        <Shop />
      </div>
    </>
  );
};

export default Home;
