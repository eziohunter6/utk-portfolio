import Title from "@/components/Title";
import { CONTACTS } from "@/constants/contacts";
import ContactLink from "./ContactLink";

const ContactSection = () => (
  <section id="contact">
    <Title index={3}>Contact</Title>

    <div className="w-full md:w-3/4 lg:w-3/5 flex flex-col gap-8 mb-16 mt-8 ml-auto">
      <p className="text-xl font-normal">
        For new work enquiries or if you just want to say a hello - drop me a
        message.
      </p>

      {CONTACTS.map((contact) => (
        <ContactLink key={contact.name} {...contact} />
      ))}
    </div>
  </section>
);

export default ContactSection;
