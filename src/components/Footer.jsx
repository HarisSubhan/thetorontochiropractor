import { Link } from 'react-router-dom';
import { navLinks } from '../data/navigation.js';

export default function Footer() {
  return (
    <footer className="bg-brand-800 text-brand-100">
      <div className="max-w-content mx-auto px-4 py-12 grid sm:grid-cols-3 gap-10">
        <div>
          <h3 className="text-white font-display font-bold text-lg mb-3">Focused on Health</h3>
          <p className="text-sm">2300 Yonge Street Suite 2004</p>
          <p className="text-sm">
            <a href="tel:+14169012141" className="hover:text-white">
              (416) 901-2141
            </a>
          </p>
          <p className="text-sm">
            <a href="mailto:info@thetorontochiropractor.com" className="hover:text-white">
              info@thetorontochiropractor.com
            </a>
          </p>
          <div className="flex gap-4 mt-4">
            <a href="https://www.facebook.com/FocusedonHealthTO" className="hover:text-white" aria-label="Facebook">
              Facebook
            </a>
            <a
              href="https://www.instagram.com/thetorontochiropractor/"
              className="hover:text-white"
              aria-label="Instagram"
            >
              Instagram
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-white font-display font-bold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/booking" className="hover:text-white">
                Book an Appointment
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-display font-bold text-lg mb-3">Our Office</h3>
          <p className="text-sm mb-3">2300 Yonge St #2004, Toronto, ON M4P 1E4, Canada</p>
          <div className="aspect-video rounded-card bg-brand-700 border border-white/10 flex items-center justify-center text-xs text-brand-200">
            [ Embedded map ]
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 text-xs text-brand-300 text-center py-4 px-4">
        &copy; Copyright {new Date().getFullYear()}. Focused on Health Centre. All rights
        reserved. &middot;{' '}
        <Link to="/terms" className="hover:text-white">
          Terms of Service
        </Link>{' '}
        &middot;{' '}
        <Link to="/privacy" className="hover:text-white">
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
}
