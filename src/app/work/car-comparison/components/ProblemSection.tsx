import Image from "next/image";
import Title from "@/components/Title";

const ProblemSection = () => (
  <section>
    <Title index={3}>Problem</Title>

    <div className="w-full md:w-3/4 lg:w-3/5 flex flex-col gap-6 ml-auto">
      <h3 className="text-lg">High-intent users were:</h3>

      <ol className="text-sm font-light">
        <li className="list-decimal list-inside">
          Retaining specifications in working memory
        </li>
        <li className="list-decimal list-inside">
          Switching between PDP’s repeatedly
        </li>
        <li className="list-decimal list-inside">
          Comparing non-prioritized attributes
        </li>
      </ol>

      <h3 className="text-lg">
        There was no structured hierarchy to guide tradeoffs between key
        variables like price, EMI, mileage, or ownership.
      </h3>

      <p className="text-base font-normal">
        The system provided information. It did not support decision-making.
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

export default ProblemSection;
