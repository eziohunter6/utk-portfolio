import Image from "next/image";
import Title from "@/components/ui/Title";

const FloorTestingSection = () => (
  <section>
    <Title index={6}>Floor Testing (Validation)</Title>

    <div className="w-full md:w-3/4 lg:w-3/5 flex flex-col gap-8 ml-auto">
      {/* Exploration & Tradeoffs */}
      <div className="flex flex-col gap-4">
        <p className="text-base font-normal">
          Before launching the experiment, I conducted in-person hub testing
          with - 10 active evaluators, comparing two structural variants.
        </p>
        <h3 className="text-lg">The key distinction tested was scale logic:</h3>

        <ol className="text-sm list-decimal list-inside space-y-2">
          <li>Variant 1: Independent scales per parameter</li>
          <li>Variant 2: Consistent normalized scale across attributes</li>
        </ol>

        <h3 className="text-lg">Observations</h3>
        <ol className="text-sm list-decimal list-inside space-y-2">
          <li>
            Users consistently reported Variant 2 as clearer due to scale
            consistency.
          </li>
          <li>
            Decision confidence improved when differences were visually
            normalized.
          </li>
          <li>
            Users made quicker choices when primary attributes were visually
            emphasized.
          </li>
          <li>
            Minor feedback led to refinements in header prominence and summary
            density.
          </li>
        </ol>

        <p className="text-base font-normal">
          Variant 2 was selected for experiment rollout.
        </p>
      </div>
    </div>

    {/* Image */}
    <div className="bg-muted flex flex-col md:flex-row gap-10 rounded-2xl p-4 mt-8">
      <div className="relative w-full aspect-13/10 rounded-lg overflow-hidden">
        <Image
          src="/images/car-comparison/user-testing.png"
          alt="Process Image"
          fill
          className="object-contain object-top"
        />
      </div>
      <div className="relative w-3/4 aspect-49/50 rounded-lg overflow-hidden mt-16">
        <Image
          src="/images/car-comparison/variants.png"
          alt="Process Image"
          fill
          className="object-contain object-top"
        />
      </div>
    </div>
  </section>
);

export default FloorTestingSection;
