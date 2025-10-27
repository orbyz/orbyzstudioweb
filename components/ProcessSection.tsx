export default function ProcessSection() {
  const steps = [
    {
      step: "01",
      title: "Descubrimiento & Estrategia",
      desc: "Analizamos tu visión, tu mercado y definimos un plan con objetivos claros.",
    },
    {
      step: "02",
      title: "Diseño de marca & experiencia",
      desc: "Creamos la arquitectura visual, el tono de comunicación y la interfaz que refleje tu esencia.",
    },
    {
      step: "03",
      title: "Desarrollo & lanzamiento",
      desc: "Construimos tu sitio con rendimiento, seguridad y escalabilidad en mente.",
    },
    {
      step: "04",
      title: "Crecimiento & continuidad",
      desc: "Monitoreamos resultados, optimizamos campañas y acompañamos tu evolución digital.",
    },
  ];

  return (
    <section className="py-24 bg-white text-custom-black">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          Cómo lo hacemos
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step) => (
            <div
              key={step.step}
              className="relative p-8 rounded-2xl border border-neutral-200 bg-neutral-50  hover:shadow-lg transition"
            >
              <span className="absolute text-custom-black top-6 left-6 text-sm font-semibold">
                {step.step}
              </span>
              <h3 className="text-xl font-semibold mb-3 mt-8">{step.title}</h3>
              <p className="text-custom-black">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
