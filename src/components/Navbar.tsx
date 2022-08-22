import { navLogo } from '../assets/images';
import { NavLink } from 'react-router-dom';
import { FiSearch, FiUser } from 'react-icons/fi';
import { BiHeart, BiBasket } from 'react-icons/bi';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <img src={navLogo} alt='Navbar logo' />
      <div className='navbar-main-links'>
        <NavLink className='navbar-main-links_link' to={'/'}>
          All products
        </NavLink>
        <NavLink className='navbar-main-links_link' to={'/'}>
          Indoor plants
        </NavLink>
        <NavLink className='navbar-main-links_link' to={'/'}>
          Outdoor plants
        </NavLink>
        <NavLink className='navbar-main-links_link' to={'/'}>
          Gifts
        </NavLink>
        <NavLink className='navbar-main-links_link' to={'/'}>
          Seeds
        </NavLink>
        <NavLink className='navbar-main-links_link' to={'/'}>
          Plant-care
        </NavLink>
        <NavLink className='navbar-main-links_link' to={'/'}>
          Pots
        </NavLink>
      </div>
      <div className='navbar-main-icons'>
        <a href='#'>
          <FiSearch className='navbar-main-icons_icon' />
        </a>
        <a href='#'>
          <BiHeart className='navbar-main-icons_icon' />
        </a>
        <a href='#'>
          <BiBasket className='navbar-main-icons_icon' />
        </a>
        <a href='#'>
          <FiUser className='navbar-main-icons_icon' />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
