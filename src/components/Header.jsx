import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { navLinks, bookingHref } from '../data/navigation.js';

/**
 * Sticky site header: a thin contact bar, the logo/wordmark, the primary
 * nav (with hover/click dropdowns on desktop), and a slide-down panel on
 * mobile. Two pieces of state: which dropdown (if any) is open, and
 * whether the mobile menu is open. Links are real routes (react-router),
 * with an optional `hash` for jumping to a section within a page.
 */
export default function Header() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleDropdown = (label) => {
    setOpenDropdown((current) => (current === label ? null : label));
  };

  const linkTo = (link) => ({
    pathname: link.href,
    hash: link.hash ? `#${link.hash}` : undefined,
  });

  return (
    <header className="sticky top-0 z-50 bg-white shadow-soft">
      {/* Top contact strip */}
      <div className="bg-brand-700 text-white text-sm">
        <div className="max-w-content mx-auto px-4 py-2 flex flex-wrap items-center justify-between gap-2">
          <span>2300 Yonge Street Suite 2004, Toronto</span>
          <a href="tel:+14169012141" className="font-semibold hover:text-accent-400">
            (416) 901-2141
          </a>
        </div>
      </div>

      {/* Main nav row */}
      <div className="max-w-content mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-display font-bold text-xl md:text-2xl text-brand-700">
            Focused on Health
          </span>
          <span className="hidden sm:inline text-xs uppercase tracking-wide text-brand-500 border-l border-brand-200 pl-2">
            The Toronto Chiropractor
          </span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => link.children && setOpenDropdown(link.label)}
              onMouseLeave={() => link.children && setOpenDropdown(null)}
            >
              <NavLink
                to={linkTo(link)}
                end={link.href === '/'}
                className={({ isActive }) =>
                  `flex items-center gap-1 py-2 font-medium hover:text-brand-500 ${
                    isActive ? 'text-brand-600' : 'text-ink'
                  }`
                }
                aria-haspopup={link.children ? 'true' : undefined}
                aria-expanded={link.children ? openDropdown === link.label : undefined}
                onClick={(e) => {
                  if (link.children) {
                    e.preventDefault();
                    toggleDropdown(link.label);
                  }
                }}
              >
                {link.label}
                {link.children && (
                  <svg width="10" height="6" viewBox="0 0 10 6" aria-hidden="true">
                    <path d="M0 0L5 6L10 0" fill="currentColor" />
                  </svg>
                )}
              </NavLink>

              {link.children && openDropdown === link.label && (
                <ul className="absolute left-0 top-full min-w-[280px] bg-white shadow-card rounded-card py-2 border border-brand-100">
                  {link.children.map((child) => (
                    <li key={child.label}>
                      <Link
                        to={linkTo(child)}
                        className="block px-4 py-2 text-sm text-ink hover:bg-brand-50 hover:text-brand-600"
                        onClick={() => setOpenDropdown(null)}
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            to={bookingHref}
            className="inline-block bg-accent-500 hover:bg-accent-600 text-white font-semibold px-5 py-2.5 rounded-card shadow-soft transition-colors"
          >
            Request An Appointment
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="lg:hidden p-2 text-brand-700"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {mobileOpen ? (
              <path d="M5 5L19 19M19 5L5 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M3 6H21M3 12H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile slide-down panel */}
      {mobileOpen && (
        <nav aria-label="Mobile" className="lg:hidden border-t border-brand-100 bg-white">
          <ul className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <li key={link.label}>
                <div className="flex items-center justify-between">
                  <Link
                    to={linkTo(link)}
                    className="block py-2 font-medium text-ink"
                    onClick={() => {
                      if (!link.children) setMobileOpen(false);
                    }}
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <button
                      type="button"
                      className="p-2 text-brand-600"
                      aria-label={`Toggle ${link.label} submenu`}
                      onClick={() => toggleDropdown(link.label)}
                    >
                      {openDropdown === link.label ? '\u2212' : '+'}
                    </button>
                  )}
                </div>
                {link.children && openDropdown === link.label && (
                  <ul className="pl-4 pb-2 space-y-1">
                    {link.children.map((child) => (
                      <li key={child.label}>
                        <Link
                          to={linkTo(child)}
                          className="block py-1.5 text-sm text-brand-600"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li className="pt-2">
              <Link
                to={bookingHref}
                className="block text-center bg-accent-500 text-white font-semibold px-5 py-2.5 rounded-card"
                onClick={() => setMobileOpen(false)}
              >
                Request An Appointment
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
