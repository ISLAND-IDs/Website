import { Outlet, Link, useLocation } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { useState } from 'react';
import { HelmetProvider } from 'react-helmet-async';

import TranslateButton from './language/translate_button.tsx';
import SoundCloudIcon from './components/soundcloud_icon';

import 'bootstrap-icons/font/bootstrap-icons.css'
import './style.scss';

function App() {
  const location = useLocation();
  const { t } = useTranslation();
  const path = location.pathname;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <header>
        <nav className="container">
          <div className="logo">ISLAND</div>
          <div className={`hamburger${isMenuOpen ? ' active' : ''}`} onClick={() => {setIsMenuOpen(!isMenuOpen)}}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={`nav-menu${isMenuOpen ? ' active' : ''}`}>
            <Link to="/" className={"nav-link "+(path=="/"?"active":"")} onClick={() => setIsMenuOpen(false)}>{t("home")}</Link>
            <Link to="/submission" className={"nav-link "+(path=="/submission"?"active":"")} onClick={() => setIsMenuOpen(false)}>{t("submit_id")}</Link>
            <Link to="/about" className={"nav-link "+(path=="/about"?"active":"")} onClick={() => setIsMenuOpen(false)}>{t("about_island")}</Link>
            <TranslateButton></TranslateButton>
          </div>
        </nav>
      </header>
      <main>
        <HelmetProvider>
          <Outlet />
        </HelmetProvider>
      </main>
      <footer>
        <div className="footer-content">
          <p className="social">
            <a href="https://soundcloud.com/island-by-rrayy" target="_blank" aria-label="SoundCloud">
              <SoundCloudIcon style={{ width: '14px', height: '14px', verticalAlign: 'middle' }} />
            </a>·
            <a href="https://discord.gg/B55PyFm7nW" target="_blank"><i className="bi bi-discord"></i></a>·
            <a href="https://instagram.com/island.ids" target="_blank"><i className="bi bi-instagram"></i></a>·
            <a href="https://github.com/ISLAND-IDs" target="_blank"><i className="bi bi-github"></i></a>
          </p>
          <p className='contact-mail'>
            Contact: <a href="mailto:island.id.record@gmail.com"> island.id.record@gmail.com</a>
          </p>
          <p className="license">
            © 2025 ISLAND · MIT License
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
