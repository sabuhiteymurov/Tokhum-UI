import {
  footerLogo,
  usaFlagIcon,
  azeFlagIcon,
  rusFlagIcon,
  footerYoutubeIcon,
  footerTwitterIcon,
  footerTiktokIcon,
  footerInstagramIcon,
  footerFacebookIcon,
  footerEmailIcon,
  footerTelephoneIcon,
} from '../assets/images';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { useState } from 'react';

const Footer = () => {
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const currentYear = new Date().getFullYear();

  const handleLanguageSelect = () => {
    setShowLanguageModal((prev) => !prev);
  };

  return (
    <footer className='footer'>
      <div className='footer-container container'>
        <div className='footer-logo-language-container'>
          <img src={footerLogo} alt='logo' className='footer-logo' />
          <button
            className='footer-select_language'
            onClick={handleLanguageSelect}
          >
            <img src={usaFlagIcon} alt='USA flag' />
            <span>USA - English</span>
            <MdKeyboardArrowDown
              className={`${showLanguageModal ? 'rotate-180' : ''}`}
            />
          </button>
          {showLanguageModal && (
            <ul className='footer-language-select_modal'>
              <li>
                <img src={azeFlagIcon} alt='USA flag' />
                <span>AZE - Azerbaijan</span>
              </li>
              <li>
                <img src={rusFlagIcon} alt='USA flag' />
                <span>RUS - Russian</span>
              </li>
            </ul>
          )}
        </div>
        <div className='footer-main-links grid grid--4-cols'>
          {/* Links column 1 */}
          <ul className='footer-link-container'>
            <li className='footer-link-container_title'>Tokhum</li>
            <li className='footer-link-container_link'>
              <a href='/'>About Tokhum</a>
            </li>
            <li className='footer-link-container_link'>
              <a href='/'>Career</a>
            </li>
            <li className='footer-link-container_link'>
              <a href='/'>Support</a>
            </li>
            <li className='footer-link-container_link'>
              <a href='/'>Blogs</a>
            </li>
            <li className='footer-link-container_link'>
              <a href='/'>FAQ</a>
            </li>
          </ul>

          {/* Links column 2 */}
          <ul className='footer-link-container'>
            <li className='footer-link-container_title'>Shop</li>
            <li className='footer-link-container_link'>
              <a href='/'>Indoor plants</a>
            </li>
            <li className='footer-link-container_link'>
              <a href='/'>Outdoor plants</a>
            </li>
            <li className='footer-link-container_link'>
              <a href='/'>Seeds</a>
            </li>
            <li className='footer-link-container_link'>
              <a href='/'>Plant-care</a>
            </li>
            <li className='footer-link-container_link'>
              <a href='/'>Gifts</a>
            </li>
            <li className='footer-link-container_link'>
              <a href='/'>Pots</a>
            </li>
          </ul>

          {/* Links column 3 */}
          <ul className='footer-link-container'>
            <li className='footer-link-container_title'>Terms</li>
            <li className='footer-link-container_link'>
              <a href='/'>Terms of Service</a>
            </li>
            <li className='footer-link-container_link'>
              <a href='/'>Privacy Policy</a>
            </li>
            <li className='footer-link-container_link'>
              <a href='/'>Returns and Delivery</a>
            </li>
            <li className='footer-link-container_link'>
              <a href='/'>Cookies</a>
            </li>
          </ul>

          {/* Links column 4 */}
          <ul className='footer-link-container'>
            <li className='footer-link-container_title'>Contact</li>
            <li className='footer-link-container_telephone'>
              <img src={footerTelephoneIcon} alt='telephone' />
              +994 50 123 45 67
            </li>
            <li className='footer-link-container_email'>
              <img src={footerEmailIcon} alt='email' />
              hello@tokhum.az
            </li>

            <div className='footer-social-links_container'>
              <a href='/'>
                <img src={footerYoutubeIcon} alt='youtube' />
              </a>
              <a href='/'>
                <img src={footerTwitterIcon} alt='twitter' />
              </a>
              <a href='/'>
                <img src={footerTiktokIcon} alt='tiktok' />
              </a>
              <a href='/'>
                <img src={footerInstagramIcon} alt='instagram' />
              </a>
              <a href='/'>
                <img src={footerFacebookIcon} alt='facebook' />
              </a>
            </div>
          </ul>
        </div>
        <p className='footer-container_copyright'>
          Tokhum {currentYear} | All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
