import Image from "next/image";
import Title from "@/components/Title";

const OpportunitySection = () => (
  <section>
    <Title index={2}>Opportunity</Title>

    <div className="w-full md:w-3/4 lg:w-3/5 flex flex-col gap-8 ml-auto">
      <div className="flex flex-col gap-4">
        <p className="text-lg">
          While analysing navigation sequences, I observed a consistent
          oscillation pattern:
        </p>

        <p className="text-lg">
          This behaviour signalled re-evaluation, not casual browsing.
        </p>
        <p className="text-base font-normal">
          Back-testing revealed that users exhibiting this pattern contributed
          to (49% of total monthly test drives), disproportionately representing
          high-intent evaluators.
        </p>

        <p className="text-lg">
          This indicated comparison was already happening, unsupported and
          cognitively heavy.
        </p>
      </div>
    </div>

    {/* Image */}
    <div className="bg-muted rounded-2xl px-8 pt-8 mt-8">
      <div className="relative w-11/12 aspect-video rounded-lg overflow-hidden mx-auto">
        <Image
          src="/images/car-comparison/opportunity.png"
          alt="Opportunity Image"
          fill
          className="object-contain object-top"
        />
      </div>
    </div>
  </section>
);

export default OpportunitySection;
