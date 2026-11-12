const PADDING_CLASSES = {
  sm: 'p-4 sm:p-5',
  md: 'p-5 sm:p-6',
  lg: 'p-6 sm:p-8',
};

const TONE_CLASSES = {
  white: 'bg-white border-border-subtle text-ink',
  light: 'bg-surface-light border-border-subtle text-ink',
  navy: 'surface-navy-gradient border-navy-700/50 text-white',
};

/**
 * Reusable card surface with consistent radius, subtle navy shadow, and optional hover elevation.
 * @param {object} props
 * @param {React.ElementType} [props.as]
 * @param {'white' | 'light' | 'navy'} [props.tone]
 * @param {'sm' | 'md' | 'lg'} [props.padding]
 * @param {boolean} [props.interactive]
 * @param {string} [props.className]
 * @param {React.ReactNode} props.children
 */
export default function Card({
  as: Component = 'div',
  tone = 'white',
  padding = 'md',
  interactive = false,
  className = '',
  children,
}) {
  const baseClass = interactive ? 'card-surface-interactive' : 'card-surface';
  const toneClass = TONE_CLASSES[tone] || TONE_CLASSES.white;
  const paddingClass = PADDING_CLASSES[padding] || PADDING_CLASSES.md;

  return (
    <Component className={`${baseClass} ${toneClass} ${paddingClass} ${className}`.trim()}>
      {children}
    </Component>
  );
}
