import Title from "@/components/Title";
import { CONTACTS } from "@/constants/contacts";
import CopyButton from "./CopyButton";

const ContactSection = () => (
  <section id="contact">
    <Title index={3}>Contact</Title>

    <div className="w-full md:w-3/4 lg:w-3/5 flex flex-col gap-8 mb-16 mt-8 ml-auto">
      <p className="text-xl font-normal">
        For new work enquiries or if you just want to say a hello - drop me a
        message.
      </p>

      {CONTACTS.map(({ name, value, type }) => (
        <CopyButton key={name} name={name} value={value} type={type} />
      ))}
    </div>
  </section>
);

export default ContactSection;
