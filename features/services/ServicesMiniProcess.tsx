export function ServicesMiniProcess() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl mb-16">
          <p className="text-lg text-primary mb-3">Proceso</p>

          <h3 className="text-3xl font-semibold text-text">
            Así trabajamos contigo
          </h3>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {[
            "Entendemos tu negocio",
            "Definimos estrategia",
            "Construimos",
            "Lanzamos y optimizamos",
          ].map((step, i) => (
            <div key={i} className="group">
              <div className="text-primary text-2xl md:text-5xl font-semibold mb-2">
                0{i + 1}
              </div>

              <p className="text-sm md:text-lg text-muted">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
