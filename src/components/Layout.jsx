import { Outlet } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import useScrollToHash from '../hooks/useScrollToHash.js';

/**
 * Shared chrome for every route: sticky header, the routed page content
 * via <Outlet />, and the footer. Also drives hash-based scrolling so
 * links like /services#orthotics land on the right section.
 */
export default function Layout() {
  useScrollToHash();

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
