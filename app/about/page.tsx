import Image from "next/image";
import imgEquipo from "@assets/equipo.jpg";
import imgCEO from "@assets/ceo.jpg";
import imgCMO from "@assets/cmo.jpg";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white px-6 py-20">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto text-center mb-20">
        <h1 className="text-5xl font-bold mb-6">
          El poder detrás de las marcas que inspiran
        </h1>
        <p className="text-gray-400 text-lg">
          En ORBYZ Studio creemos en la fusión entre la creatividad, la
          tecnología y la estrategia. Transformamos ideas en experiencias
          digitales que impulsan marcas hacia el futuro.
        </p>
      </section>

      {/* Nuestra Esencia */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-24">
        <div>
          <h2 className="text-3xl font-semibold mb-4 text-custom-green">
            Nuestra Esencia
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Somos una agencia digital dedicada a crear identidades de marca
            sólidas, estrategias de marketing efectivas y experiencias web que
            cautivan. Nuestra misión es ayudar a las marcas a destacar con
            autenticidad y propósito.
          </p>
          <p className="text-gray-400 mt-4">
            Basamos nuestro trabajo en tres pilares: innovación, diseño
            inteligente y resultados medibles.
          </p>
        </div>
        <div className="relative w-full h-80">
          <Image
            src={imgEquipo}
            alt="Equipo creativo trabajando"
            fill
            className="object-cover rounded-2xl opacity-90"
          />
        </div>
      </section>

      {/* El Equipo */}
      <section className="max-w-6xl mx-auto mb-24">
        <h2 className="text-3xl font-semibold text-center mb-12 text-custom-green">
          El Equipo Directivo
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          {/* CEO */}
          <div className="text-center bg-[#121212] p-8 rounded-2xl shadow-lg hover:shadow-[0_0_20px_#cef00970] transition">
            <div className="relative w-40 h-40 mx-auto mb-6">
              <Image
                src={imgCEO}
                alt="CEO - Jonathan"
                fill
                className="object-cover rounded-full border-2 border-custom-green"
              />
            </div>
            <h3 className="text-2xl font-bold">Jonathan Olbes.</h3>
            <p className="text-custom-green mb-3">CEO & Founder</p>
            <p className="text-gray-400">
              Visionario digital apasionado por la innovación, el desarrollo web
              y la ciberseguridad, liderando proyectos que fusionan diseño,
              estrategia y tecnología.
            </p>
          </div>

          {/* CMO */}
          <div className="text-center bg-[#121212] p-8 rounded-2xl shadow-lg hover:shadow-[0_0_20px_#cef00970] transition">
            <div className="relative w-40 h-40 mx-auto mb-6">
              <Image
                src={imgCMO}
                alt="CMO"
                fill
                className="object-cover rounded-full border-2 border-custom-green"
              />
            </div>
            <h3 className="text-2xl font-bold">Andreina Aguirre.</h3>
            <p className="text-custom-green mb-3">Chief Marketing Officer</p>
            <p className="text-gray-400">
              Estratega creativo con una visión clara del posicionamiento
              digital, guiando las marcas hacia el reconocimiento y la conexión
              con su audiencia.
            </p>
          </div>
        </div>
      </section>

      {/* Nuestra Cultura */}
      <section className="max-w-4xl mx-auto text-center mb-20">
        <h2 className="text-3xl font-semibold mb-6 text-custom-green">
          Nuestra Cultura
        </h2>
        <p className="text-gray-400 leading-relaxed">
          Creemos que la excelencia surge cuando la pasión y la creatividad
          trabajan de la mano. En ORBYZ Studio, cultivamos una cultura de
          aprendizaje constante, colaboración y evolución.
        </p>
      </section>

      {/* CTA */}
      <section className="text-center">
        <h3 className="text-2xl font-bold mb-4">
          ¿Listo para crear algo extraordinario?
        </h3>
        <Link
          href="/contact"
          className="inline-block bg-custom-green text-black px-8 py-3 rounded-full font-semibold hover:bg-custom-greenhover transition"
        >
          Contáctanos
        </Link>
      </section>
    </main>
  );
}
