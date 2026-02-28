import Image from "next/image";
import Title from "@/components/Title";

const HypothesisSection = () => (
  <section>
    <Title index={4}>HypothesisSection</Title>

    <div className="w-full md:w-3/4 lg:w-3/5 flex flex-col gap-8 ml-auto">
      {/* Hypothesis */}
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Hypothesis
        </h3>
        <p className="text-base font-normal">
          I hypothesized that if the homepage dynamically reflected a user’s
          transaction state and surfaced the most relevant next action, we could
          reduce cognitive load, shorten the time between scheduling and visit,
          and improve downstream delivery conversion.
        </p>
      </div>

      {/* Constraints */}
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Constraints
        </h3>
        <p className="text-base font-normal">
          The solution needed to operate within ReactJS performance limitations,
          which restricted complex interaction patterns. A dedicated transaction
          dashboard already existed under the Profile section and was owned by
          the Platform team, limiting structural reorganization. Leadership
          expressed concern about temporary conversion drops due to major
          interface changes. The redesign had to be delivered within a four-week
          window.
        </p>
      </div>
    </div>

    {/* Image */}
    <div className="bg-muted flex flex-col md:flex-row gap-4 rounded-2xl p-4 mt-8">
      <div className="relative w-full aspect-6/7 rounded-lg overflow-hidden">
        <Image
          src="/images/buy-home/strategy-1.png"
          alt="Process Image"
          fill
          className="object-contain object-top"
        />
      </div>
      <div className="relative w-full aspect-7/4 rounded-lg overflow-hidden">
        <Image
          src="/images/buy-home/strategy-2.png"
          alt="Process Image"
          fill
          className="object-contain object-top"
        />
      </div>
    </div>
  </section>
);

export default HypothesisSection;
