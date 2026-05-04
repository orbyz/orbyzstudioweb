export function AboutPrinciples() {
  const principles = [
    {
      title: "Pensamos en resultados",
      desc: "Cada decisión tiene un objetivo claro: generar clientes.",
    },
    {
      title: "Menos diseño, más estrategia",
      desc: "No buscamos que se vea bonito, buscamos que funcione.",
    },
    {
      title: "Nada de plantillas",
      desc: "Cada proyecto se construye desde cero.",
    },
  ];

  return (
    <section className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-3">
          {principles.map((p, i) => (
            <div key={i}>
              <h3 className="text-lg font-semibold text-text mb-2">
                {p.title}
              </h3>
              <p className="text-sm text-muted">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
