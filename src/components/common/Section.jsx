const SURFACE_CLASSES = {
  white: 'bg-white text-ink',
  light: 'bg-surface-light text-ink',
  lightGradient: 'surface-light-gradient text-ink',
  navy: 'surface-navy-gradient text-white',
};

/**
 * Reusable semantic section wrapper enforcing consistent vertical rhythm and surface tokens.
 * @param {object} props
 * @param {string} [props.id]
 * @param {string} [props.labelledBy]
 * @param {'white' | 'light' | 'lightGradient' | 'navy'} [props.surface]
 * @param {'default' | 'compact' | 'hero'} [props.spacing]
 * @param {string} [props.className]
 * @param {React.ReactNode} props.children
 */
export default function Section({
  id,
  labelledBy,
  surface = 'white',
  spacing = 'default',
  className = '',
  children,
}) {
  const spacingClass =
    spacing === 'compact'
      ? 'py-4 sm:py-5'
      : spacing === 'hero'
        ? 'py-8 sm:py-10 lg:py-12'
        : 'section-padding';

  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`overflow-x-clip ${SURFACE_CLASSES[surface] || SURFACE_CLASSES.white} ${spacingClass} ${className}`.trim()}
    >
      {children}
    </section>
  );
}
