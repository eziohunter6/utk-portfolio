import Image from "next/image";
import Title from "@/components/Title";

const AnalysisSection = () => (
  <section>
    <Title index={3}>Analysis</Title>

    <div className="w-full md:w-3/4 lg:w-3/5 flex flex-col gap-8 ml-auto">
      {/* Lifecycle mapping */}
      <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
        Lifecycle mapping
      </h3>
      <p className="text-base font-normal">
        I mapped the transactional lifecycle across four stages: test drive
        scheduled, visit confirmed, booking completed, and delivery pending, to
        identify gaps between user intent and system response. The greatest
        friction occurred between scheduling and showroom visit, where committed
        users received no visible reinforcement of progress or clarity on next
        steps, increasing cognitive load and delaying action.
      </p>
    </div>

    {/* Image */}
    <div className="bg-muted rounded-2xl px-8 pt-8 mt-8">
      <div className="relative w-11/12 aspect-video rounded-lg overflow-hidden mx-auto">
        <Image
          src="/images/buy-home/analysis.png"
          alt="Analysis Image"
          fill
          className="object-contain object-top"
        />
      </div>
    </div>
  </section>
);

export default AnalysisSection;
