/**
 * Layout container enforcing consistent max-width and responsive horizontal gutters.
 * @param {object} props
 * @param {React.ReactNode} props.children
 * @param {string} [props.className]
 * @param {React.ElementType} [props.as]
 */
export default function Container({ children, className = '', as: Component = 'div' }) {
  return (
    <Component className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`.trim()}>
      {children}
    </Component>
  );
}
