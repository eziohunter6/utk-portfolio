import Image from "next/image";
import Title from "@/components/ui/Title";

const DesignExplorationSection = () => (
  <section>
    <Title index={5}>Design explorations</Title>

    <div className="w-full md:w-3/4 lg:w-3/5 flex flex-col gap-8 ml-auto">
      {/* Exploration & Tradeoffs */}
      <div className="flex flex-col gap-4">
        <h3 className="text-lg">Structural Variants Explored</h3>

        <ol className="text-base list-decimal list-inside space-y-4">
          <li>
            Flat Spec Grid
            <ul className="text-base font-light list-disc list-inside pl-4">
              <li>Equal-weight parameters.</li>
              <li>
                Rejected due to cognitive overload and low scan efficiency.
              </li>
            </ul>
          </li>
          <li>
            Card-Based Comparison
            <ul className="text-base font-light list-disc list-inside pl-4">
              <li>
                Visually simplified but reduced cross-attribute scannability
              </li>
            </ul>
          </li>
          <li>
            Hierarchical Comparison Model (Selected)
            <ul className="text-base font-light list-disc list-inside pl-4">
              <li>
                Primary attributes surfaced first (Price, EMI, Ownership,
                Mileage)
              </li>
              <li>Secondary specifications grouped logically</li>
              <li>Differences highlighted conditionally</li>
              <li>Density preserved while introducing hierarchy</li>
            </ul>
          </li>
        </ol>
      </div>
    </div>

    {/* Image */}
    <div className="bg-muted rounded-2xl mt-8">
      <div className="relative w-full aspect-29/15 rounded-lg overflow-hidden">
        <Image
          src="/images/car-comparison/design-explore.png"
          alt="Design explorations Image"
          fill
          className="object-contain object-top"
        />
      </div>
    </div>
  </section>
);

export default DesignExplorationSection;
