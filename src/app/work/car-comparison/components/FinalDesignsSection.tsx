import Image from "next/image";
import Title from "@/components/Title";

const FinalDesignsSection = () => (
  <section>
    <Title index={7}>Final Designs</Title>

    <div className="w-full md:w-3/4 lg:w-3/5 flex flex-col gap-4 ml-auto">
      <h3 className="text-lg">
        The experience was triggered dynamically for users exhibiting the A → B
        → A pattern.
      </h3>
      <p className="text-base font-normal">
        No explicit “Compare” CTA was introduced to avoid artificial adoption
        bias.
      </p>

      <ol className="text-sm font-light list-decimal list-inside space-y-2">
        <li>Retaining specifications in working memory</li>
        <li>Switching between PDP’s repeatedly</li>
        <li>Comparing non-prioritized attributes</li>
      </ol>
    </div>

    {/* Image */}
    <div className="bg-muted rounded-2xl mt-8">
      <div className="relative w-full aspect-29/15 rounded-lg overflow-hidden">
        <Image
          src="/images/car-comparison/final-designs.png"
          alt="Final Designs Image"
          fill
          className="object-contain object-top"
        />
      </div>
    </div>
  </section>
);

export default FinalDesignsSection;
