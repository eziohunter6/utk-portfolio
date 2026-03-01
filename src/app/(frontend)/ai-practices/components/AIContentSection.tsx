import Image from "next/image";
import Title from "@/components/ui/Title";

const Images = [
  {
    src: "/images/ai-practices/ai-content-1.png",
    alt: "AI Content 1",
  },
  {
    src: "/images/ai-practices/ai-content-2.png",
    alt: "AI Content 2",
  },
  {
    src: "/images/ai-practices/ai-content-3.png",
    alt: "AI Content 3",
  },
  {
    src: "/images/ai-practices/ai-content-4.png",
    alt: "AI Content 4",
  },
];

const AIContentSection = () => (
  <section>
    <Title index={2}>AI + Content</Title>
    <div className="w-full md:w-3/4 lg:w-3/5 flex flex-col gap-6 ml-auto">
      <p className="text-base font-normal">
        AI is embedded in my workflow, not just for drafting, but for
        structuring ambiguous information, synthesizing feedback patterns, and
        accelerating iteration. I’ve built custom tooling, including a Figma
        plug-in powered by GPT and Claude to extract and systematize content
        strings. While AI expands speed and surface area, judgment, framing, and
        decision quality remain human-owned.
      </p>
    </div>

    {/* Image */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
      {Images.map((image) => (
        <div key={image.alt} className="relative w-full aspect-4/3 bg-muted">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
          />
        </div>
      ))}
    </div>
  </section>
);

export default AIContentSection;
