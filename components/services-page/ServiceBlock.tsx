export function ServiceBlock({
  title,
  description,
  features,
  outcome,
  reverse = false,
}: Props) {
  return (
    <section className="py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className={`grid gap-16 lg:grid-cols-2 items-center`}>
          {/* LEFT */}
          <div className={`${reverse ? "lg:order-2" : ""}`}>
            <h2 className="text-3xl md:text-4xl font-semibold text-text mb-6">
              {title}
            </h2>

            <p className="text-muted mb-8 max-w-xl">{description}</p>

            <ul className="space-y-3 text-sm text-muted">
              {features.map((f, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-primary">—</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT */}
          <div className={`${reverse ? "lg:order-1" : ""}`}>
            <div
              className="
              rounded-2xl
              border border-default
              p-8
              bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent)]
            "
            >
              <p className="text-primary font-medium mb-4">{outcome}</p>

              <a href="/contact" className="btn btn-primary">
                Solicitar propuesta
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
