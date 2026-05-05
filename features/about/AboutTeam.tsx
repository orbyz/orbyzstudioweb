import Image from "next/image";

export function AboutTeam() {
  const team = [
    {
      name: "Jonathan Olbes",
      role: "CEO",
      image: "/team/ceo.jpg",
      description:
        "Enfocado en crear soluciones digitales que generen impacto real en negocio, no solo presencia online.",
    },
    {
      name: "Andreina Aguirre",
      role: "CMO",
      image: "/team/cmo.jpg",
      description:
        "Especialista en estrategia y captación de clientes, alineando marketing con resultados medibles.",
    },
  ];

  return (
    <section className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* HEADER */}
        <div className="max-w-2xl mb-16 text-center">
          <h2 className="text-3xl font-semibold text-text">
            El equipo detrás de{" "}
            <span className="text-primary font-semibold">Orbyz</span> Studio
          </h2>
        </div>

        {/* GRID */}
        <div className="grid gap-12 md:grid-cols-2">
          {team.map((person) => (
            <div
              key={person.name}
              className="flex flex-col items-center text-center md:items-center md:text-center gap-4"
            >
              {/* IMAGE */}
              <div
                className="
                  relative
                  w-48 h-48 md:w-full md:h-[450px]
                  rounded-full md:rounded-2xl
                  overflow-hidden
                  border border-default
                  transition-all duration-300
                  hover:shadow-[0_0_50px_rgba(206,240,9,0.15)]
                "
              >
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  className="object-cover object-[50%_20%]"
                  sizes="(max-width: 768px) 128px, 50vw"
                />
              </div>

              {/* INFO */}
              <div>
                <h3 className="text-xl font-semibold text-text">
                  {person.name}
                </h3>

                <p className="text-md md:text-lg text-primary text-semibold mb-2">
                  {person.role}
                </p>

                <p className="text-sm md:text-md text-muted">
                  {person.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
