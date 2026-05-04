import { metaContact } from "@app/metadata";
import { ContactForm } from "@/sections/contact-page/ContactForm";
import { ContactHero } from "@/sections/contact-page/ContactHero";
import { ContactFAQ } from "@/sections/contact-page/ContactFaq";
import { ContactTrust } from "@/sections/contact-page/ContactTrust";

export const metadata = metaContact;

export default function ContactPage() {
  return (
    <>
      <ContactHero />

      <section className="pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-16 lg:grid-cols-2">
            <ContactForm />

            <div>
              <ContactTrust />
              <ContactFAQ />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
