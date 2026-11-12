import { m, useReducedMotion } from 'framer-motion';

const VARIANT_CLASSES = {
  primary:
    'bg-lic-yellow text-navy-900 hover:bg-lic-yellow-hover shadow-[0_6px_18px_-4px_rgba(255,201,40,0.45)] hover:shadow-[0_10px_22px_-4px_rgba(255,201,40,0.55)] focus-visible:outline-navy-900',
  secondary:
    'bg-navy-800 text-white hover:bg-navy-900 shadow-[0_6px_18px_-4px_rgba(18,55,122,0.3)] hover:shadow-[0_10px_22px_-4px_rgba(18,55,122,0.4)] focus-visible:outline-navy-800',
  outline:
    'border border-navy-800/25 bg-white text-navy-800 hover:border-navy-800 hover:bg-surface-light focus-visible:outline-navy-800',
  outlineDark:
    'border border-white/35 bg-white/8 text-white hover:border-lic-yellow hover:bg-white/14 hover:text-lic-yellow focus-visible:outline-lic-yellow',
  ghost:
    'text-navy-800 hover:bg-navy-50 focus-visible:outline-navy-800',
};

const SIZE_CLASSES = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3.5 text-[0.9375rem]',
};

/**
 * Reusable accessible button and anchor CTA component with subtle Framer Motion hover/tap feedback.
 * @param {object} props
 * @param {React.ReactNode} props.children
 * @param {'primary' | 'secondary' | 'outline' | 'outlineDark' | 'ghost'} [props.variant]
 * @param {'sm' | 'md' | 'lg'} [props.size]
 * @param {string} [props.href]
 * @param {'button' | 'submit' | 'reset'} [props.type]
 * @param {string} [props.className]
 */
export default function PrimaryButton({
  children,
  variant = 'primary',
  size = 'md',
  href,
  type = 'button',
  className = '',
  ...rest
}) {
  const prefersReducedMotion = useReducedMotion();

  const baseStyles =
    'inline-flex items-center justify-center gap-2 rounded-lg font-semibold tracking-[0.01em] transition-colors duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-60 cursor-pointer';

  const variantClass = VARIANT_CLASSES[variant] || VARIANT_CLASSES.primary;
  const sizeClass = SIZE_CLASSES[size] || SIZE_CLASSES.md;
  const classes = `${baseStyles} ${variantClass} ${sizeClass} ${className}`.trim();

  const motionProps = prefersReducedMotion
    ? {}
    : {
        whileHover: { y: -1.5 },
        whileTap: { scale: 0.98 },
        transition: { duration: 0.16, ease: 'easeOut' },
      };

  if (href) {
    return (
      <m.a href={href} className={classes} {...motionProps} {...rest}>
        {children}
      </m.a>
    );
  }

  return (
    <m.button type={type} className={classes} {...motionProps} {...rest}>
      {children}
    </m.button>
  );
}
