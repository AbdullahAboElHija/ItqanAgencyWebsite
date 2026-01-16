import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Admin from './pages/Admin';

import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        {/* Admin Route - Standalone (No Layout) */}
        <Route path="/admin" element={<Admin />} />

        {/* 404 Route */}
        <Route path="*" element={<div className="p-20 text-center">404 Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
