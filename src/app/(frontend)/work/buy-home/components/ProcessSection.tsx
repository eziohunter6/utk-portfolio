import Image from "next/image";
import Title from "@/components/ui/Title";

const ProcessSection = () => (
  <section>
    <Title index={2}>Process</Title>

    <div className="w-full md:w-3/4 lg:w-3/5 flex flex-col gap-8 ml-auto">
      {/* Problem */}
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Problem
        </h3>
        <p className="text-base font-normal">
          Users who scheduled a test drive could not see their transaction stage
          on the homepage. Visit details, booking status, and next steps were
          missing, forcing users to check profiles or external messages.
        </p>

        <p className="text-base font-normal">
          Time-to-Visit (T2V) averaged (48 hours), visit-to-delivery (V2D) had
          plateaued, and drop-offs peaked between scheduling and showroom visit.
        </p>
      </div>

      {/* Approach */}
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Approach
        </h3>
        <p className="text-base font-normal">
          Rather than treating this as a visual refresh, I framed it as a
          lifecycle continuity issue. The core question became: how might we
          transform the homepage from a discovery surface into a state-aware
          checkpoint for committed users?
        </p>
      </div>
    </div>

    {/* Image */}
    <div className="bg-muted flex flex-col md:flex-row gap-4 rounded-2xl p-4 mt-8">
      <div className="relative w-full aspect-6/5 rounded-lg overflow-hidden">
        <Image
          src="/images/buy-home/summary.png"
          alt="Process Image"
          fill
          className="object-contain object-top"
        />
      </div>
      <div className="relative w-full aspect-3/2 rounded-lg overflow-hidden">
        <Image
          src="/images/buy-home/user-types.png"
          alt="Process Image"
          fill
          className="object-contain object-top"
        />
      </div>
    </div>
  </section>
);

export default ProcessSection;
