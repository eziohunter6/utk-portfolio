import Image from "next/image";
import Title from "@/components/Title";

const FinalDesignsSection = () => (
  <section>
    <Title index={6}>Final Designs</Title>

    <div className="w-full md:w-3/4 lg:w-3/5 flex flex-col gap-8 ml-auto">
      {/* Exploration & Tradeoffs */}
      <div className="flex flex-col gap-4">
        <p className="text-base font-normal">
          The redesigned homepage dynamically adapts based on the user’s
          transaction stage. For users who have scheduled a test drive, the
          interface prominently surfaces visit details and next actions. For
          users who have completed booking, the homepage shifts focus toward
          delivery tracking and reassurance.
        </p>
        <p className="text-base font-normal">
          A new status tag component was introduced to standardize stage
          visibility. Content prioritization became intent-driven rather than
          generic. Redundant modules were reduced to prevent distraction from
          high-intent actions.
        </p>
        <h3 className="text-lg">
          The homepage now distinguishes between exploratory and committed
          behaviors.
        </h3>
      </div>
    </div>

    {/* Image */}
    <div className="bg-muted rounded-2xl mt-8">
      <div className="relative w-full aspect-29/15 rounded-lg overflow-hidden">
        <Image
          src="/images/buy-home/final-designs.png"
          alt="Exploration & Tradeoffs Image"
          fill
          className="object-contain object-top"
        />
      </div>
    </div>
  </section>
);

export default FinalDesignsSection;
