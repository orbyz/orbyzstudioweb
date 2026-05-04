import { metaContact } from "@app/metadata";
import { ContactForm } from "@/features/contact/ContactForm";
import { ContactHero } from "@/features/contact/ContactHero";
import { ContactFAQ } from "@/features/contact/ContactFaq";
import { ContactTrust } from "@/features/contact/ContactTrust";

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
