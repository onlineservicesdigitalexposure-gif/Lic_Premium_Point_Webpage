/**
 * Reusable section header with clear typographic hierarchy and subtle brand accent.
 * @param {object} props
 * @param {string} [props.eyebrow]
 * @param {string} props.title
 * @param {string} [props.subtitle]
 * @param {'left' | 'center'} [props.align]
 * @param {'light' | 'dark'} [props.tone]
 * @param {string} [props.headingId]
 * @param {string} [props.className]
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  tone = 'light',
  headingId,
  className = '',
}) {
  const isDark = tone === 'dark';
  const alignmentClass = align === 'left' ? 'text-left' : 'mx-auto text-center';
  const barAlignment = align === 'left' ? 'justify-start' : 'justify-center';

  return (
    <div className={`max-w-2xl ${alignmentClass} ${className}`.trim()}>
      {eyebrow && (
        <div className={`inline-flex items-center gap-2 ${barAlignment}`}>
          <span className="inline-flex h-2 w-2 rounded-full bg-lic-red" aria-hidden="true" />
          <p
            className={`text-xs font-bold tracking-[0.14em] uppercase ${
              isDark ? 'text-lic-yellow' : 'text-navy-800'
            }`}
          >
            {eyebrow}
          </p>
        </div>
      )}

      <h2
        id={headingId}
        className={`mt-2.5 text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-[2.125rem] lg:leading-[1.18] ${
          isDark ? 'text-white' : 'text-ink'
        }`}
      >
        {title}
      </h2>

      <div className={`mt-3.5 flex items-center gap-1.5 ${barAlignment}`} aria-hidden="true">
        <span className="h-[3px] w-11 rounded-full bg-lic-yellow" />
        <span className="h-[3px] w-3 rounded-full bg-lic-red" />
      </div>

      {subtitle && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-[1.0625rem] ${
            isDark ? 'text-navy-100' : 'text-ink-secondary'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
