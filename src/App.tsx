import { Outlet, Link, useLocation } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { useState } from 'react';
import TranslateButton from './language/translate_button.tsx';
import './style.scss';

function App() {
  const location = useLocation();
  const { t } = useTranslation();
  const path = location.pathname;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header>
        <nav className="container">
          <div className="logo">ISLAND</div>
          <div className={`hamburger${isMenuOpen ? ' active' : ''}`} onClick={toggleMenu}>
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
            <a href="https://soundcloud.com/island-by-rrayy" target="_blank">SoundCloud</a>·
            <a href="https://discord.gg/B55PyFm7nW" target="_blank">Discord</a>·
            <a href="https://instagram.com/island.ids" target="_blank">Instagram</a>
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
