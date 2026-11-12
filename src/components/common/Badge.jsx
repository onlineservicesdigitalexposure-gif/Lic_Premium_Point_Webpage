const TONE_CLASSES = {
  navy: 'bg-navy-100 text-navy-900 border border-navy-800/15',
  yellow: 'bg-lic-yellow text-navy-900',
  light: 'bg-surface-light text-navy-800 border border-border-subtle',
  darkSurface: 'bg-white/10 text-lic-yellow border border-white/15',
  red: 'bg-lic-red-soft text-lic-red border border-lic-red/20',
};

/**
 * Accessible pill badge component for categories, landmarks, and trust labels.
 * @param {object} props
 * @param {React.ReactNode} props.children
 * @param {'navy' | 'yellow' | 'light' | 'darkSurface' | 'red'} [props.tone]
 * @param {string} [props.className]
 */
export default function Badge({ children, tone = 'navy', className = '' }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold tracking-wide ${
        TONE_CLASSES[tone] || TONE_CLASSES.navy
      } ${className}`.trim()}
    >
      {children}
    </span>
  );
}
