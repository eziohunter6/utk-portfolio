import { RichText } from "@payloadcms/richtext-lexical/react";
import ContactLink from "@/components/ui/ContactLink";
import LeftWrapper from "@/components/ui/LeftWrapper";
import Section from "@/components/ui/Section";
import Title from "@/components/ui/Title";
import { getContacts } from "@/lib/services";

const ContactSection = async ({ index }: { index?: number }) => {
  const { contacts, content } = await getContacts();

  return (
    <Section id="contact">
      <Title index={index ?? 3}>Contact</Title>

      <LeftWrapper className="flex flex-col gap-8 mb-8">
        <RichText data={content} className="prose" />

        {contacts.map((contact) => (
          <ContactLink key={contact.name} {...contact} />
        ))}
      </LeftWrapper>
    </Section>
  );
};

export default ContactSection;
