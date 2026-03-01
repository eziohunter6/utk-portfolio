import Image from "next/image";
import Title from "@/components/Title";

const Images = [
  {
    src: "/images/ai-practices/ai-video-1.png",
    alt: "AI Video 1",
  },
  {
    src: "/images/ai-practices/ai-video-2.png",
    alt: "AI Video 2",
  },
];

const AIPrototypeSection = () => (
  <section>
    <Title index={4}>AI + Prototyping</Title>
    <div className="w-full md:w-3/4 lg:w-3/5 flex flex-col gap-6 ml-auto">
      <p className="text-base font-normal">
        I use AI-native development tools like Vercel, Claude, and Figma Make to
        move from idea to working software quickly. I build functional flows to
        test logic, edge cases, and interaction behaviour in real conditions.
        These newer AI-assisted environments have significantly reduced the gap
        between concept and executable product. They allow me to iterate faster,
        validate assumptions earlier, and think directly in systems rather than
        screens.
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

export default AIPrototypeSection;
