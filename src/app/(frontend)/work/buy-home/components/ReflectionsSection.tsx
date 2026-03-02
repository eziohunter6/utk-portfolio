import Title from "@/components/ui/Title";

const ReflectionsSection = () => (
  <section>
    <Title index={8}>Reflections</Title>

    <div className="w-full md:w-3/4 lg:w-3/5 flex flex-col gap-8 ml-auto">
      {/* Exploration & Tradeoffs */}
      <div className="flex flex-col gap-4">
        <p className="text-base font-normal">
          This project reinforced that transactional users value progression
          clarity over feature depth. Designing for committed intent required
          structural restraint and contextual visibility rather than interface
          novelty. Working within technical and organizational constraints
          sharpened my approach to system design prioritizing clarity,
          continuity, and measurable business impact over interaction
          complexity.
        </p>
      </div>
    </div>
  </section>
);

export default ReflectionsSection;
