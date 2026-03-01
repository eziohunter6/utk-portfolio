import Title from "@/components/ui/Title";

const HeroSection = () => (
  <section>
    <Title as="h1" className="mb-8" index={1}>
      AI Practices
    </Title>

    <div className="w-full md:w-3/4 lg:w-3/5 flex flex-col gap-6 ml-auto">
      {/* Hero Content */}

      <p className="text-base">
        Over the past few years, I’ve integrated AI tools into my daily design
        work. It’s helped me spark new ideas, communicate more effectively, and
        make sense of complex information. And also turn concepts into real,
        tangible experiences. I use AI across different domains, from content
        and imagery to rapid prototyping, enabling me to do more and stay
        creative sustainably.
      </p>
    </div>
  </section>
);

export default HeroSection;
