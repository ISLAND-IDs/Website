import { Outlet, Link, useLocation } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { useState } from 'react';
import TranslateButton from './language/translate_button.tsx';
import SoundCloudIcon from './components/soundcloud_icon';
import './style.scss';
import 'bootstrap-icons/font/bootstrap-icons.css'

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
        {/* 현재 경로에 맞는 페이지(예: HomePage.tsx)가 이 위치에 렌더링됩니다. */}
        <Outlet />
      </main>
      <footer>
        <div className="footer-content">
          <p className="social">
            <a href="https://soundcloud.com/island-by-rrayy" target="_blank" aria-label="SoundCloud">
              <SoundCloudIcon style={{ width: '14px', height: '14px', verticalAlign: 'middle' }} />
            </a>·
            <a href="https://discord.gg/B55PyFm7nW" target="_blank"><i className="bi bi-discord"></i></a>·
            <a href="https://instagram.com/island.ids" target="_blank"><i className="bi bi-instagram"></i></a>
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
