import { RichText } from "@payloadcms/richtext-lexical/react";
import ContactLink from "@/components/ui/ContactLink";
import StickySection from "@/components/ui/StickySection";
import Title from "@/components/ui/Title";
import { getContacts } from "@/lib/services";

const ContactSection = async ({ index }: { index?: number }) => {
  const { contacts, content } = await getContacts();

  return (
    <StickySection id="contact">
      <Title index={index ?? 3}>Contact</Title>

      <div className="w-full md:w-3/4 lg:w-3/5 flex flex-col gap-8 mb-16 mt-8 ml-auto">
        <RichText data={content} className="prose" />

        {contacts.map((contact) => (
          <ContactLink key={contact.name} {...contact} />
        ))}
      </div>
    </StickySection>
  );
};

export default ContactSection;
