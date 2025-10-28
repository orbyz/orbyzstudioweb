import ContactForm from "@app/contact/ContactForm";
import { metaContact } from "@app/metadata";

export const metadata = metaContact;

export default function ContactPage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-40 bg-gradient-to-b from-neutral-950 to-neutral-900 text-white">
      <div className="max-w-3xl text-center mb-12">
        <h1 className="text-4xl text-shadow-custom-white md:text-5xl font-bold mb-4">
          Conversemos sobre{" "}
          <span className="text-custom-green">tu próximo proyecto 🚀</span>
        </h1>
        <p className="text-custom-white ">
          Ya sea que necesites una identidad visual, una web profesional o una
          estrategia digital integral, estamos listos para escucharte y llevar
          tu marca al siguiente nivel.
        </p>
      </div>
      <ContactForm />
    </section>
  );
}
