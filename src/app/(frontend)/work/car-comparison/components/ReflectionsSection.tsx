import Title from "@/components/ui/Title";

const ReflectionsSection = () => (
  <section>
    <Title index={9}>Reflections</Title>

    <div className="w-full md:w-3/4 lg:w-3/5 flex flex-col gap-8 ml-auto">
      {/* Exploration & Tradeoffs */}
      <div className="flex flex-col gap-4">
        <p className="text-base font-normal">
          By structuring evaluation around weighted decision variables rather
          than flat information display, the system reduced cognitive friction
          for high-intent users and improved downstream qualification.
        </p>
        <p className="text-base font-normal">
          High-intent comparison behaviour was already present in the system.
          The opportunity was not to create demand, but to support it with
          decision architecture.
        </p>
      </div>
    </div>
  </section>
);

export default ReflectionsSection;
