/**
 * Tiny inline-SVG icon set so the service cards don't depend on an icon
 * library. `name` picks which glyph renders.
 */
export default function ServiceIcon({ name, className = 'w-8 h-8' }) {
  const common = {
    className,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.75,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': 'true',
  };

  switch (name) {
    case 'brain':
      return (
        <svg {...common}>
          <path d="M9 3a3 3 0 0 0-3 3v1a3 3 0 0 0-2 2.8V12a3 3 0 0 0 1.5 2.6A3 3 0 0 0 8 19a3 3 0 0 0 3-3V6a3 3 0 0 0-2-3Z" />
          <path d="M15 3a3 3 0 0 1 3 3v1a3 3 0 0 1 2 2.8V12a3 3 0 0 1-1.5 2.6A3 3 0 0 1 16 19a3 3 0 0 1-3-3V6a3 3 0 0 1 2-3Z" />
        </svg>
      );
    case 'spine':
      return (
        <svg {...common}>
          <path d="M12 2v20" strokeDasharray="1 3" />
          <ellipse cx="12" cy="4" rx="3" ry="2" />
          <ellipse cx="12" cy="9" rx="4" ry="2" />
          <ellipse cx="12" cy="14" rx="4.5" ry="2" />
          <ellipse cx="12" cy="19" rx="3.5" ry="2" />
        </svg>
      );
    case 'foot':
      return (
        <svg {...common}>
          <path d="M8 21c-2 0-3-1.3-3-3.5 0-2 1-3 1-5.5S5 8 5 6a3 3 0 0 1 3-3c2 0 2.5 1.5 3.5 3S14 9 14 12v6c0 2-1.5 3-3 3H8Z" />
          <path d="M9 4c.5 1 1 2.5 1 4" />
        </svg>
      );
    default:
      return null;
  }
}
