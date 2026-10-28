export default function Section({
  id,
  children,
  className = "",
  containerClassName = "",
  noPadding = false,
  ariaLabel,
}) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={`${noPadding ? "" : "py-20 md:py-28"} w-full ${className}`}
    >
      <div className={`max-w-content mx-auto px-4 sm:px-6 lg:px-8 w-full ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
}
