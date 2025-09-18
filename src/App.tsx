import { Outlet, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <header>
        <nav>
          <Link to="/">홈</Link>
          <Link to="/about">회사 소개</Link>
        </nav>
      </header>
      <main>
        {/* 현재 경로에 맞는 페이지(예: HomePage.tsx)가 이 위치에 렌더링됩니다. */}
        <Outlet />
      </main>
      <footer>
        <p>Copyright © 2025</p>
      </footer>
    </div>
  );
}

export default App;
