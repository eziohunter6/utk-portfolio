import Title from "@/components/ui/Title";

const OutcomeSection = () => (
  <section>
    <Title index={7}>Outcome</Title>

    <div className="w-full md:w-3/4 lg:w-3/5 flex flex-col gap-8 ml-auto">
      {/* Exploration & Tradeoffs */}
      <div className="flex flex-col gap-4">
        <p className="text-base font-normal">
          Following launch, key lifecycle metrics demonstrated measurable
          improvements across progression speed and downstream conversion:
        </p>

        <ul className="text-base font-semibold">
          <li className="list-disc list-inside">
            Time-to-Visit (T2V): reduced by 5.14%
          </li>
          <li className="list-disc list-inside">
            User-to-Visit (U2V): uplift of 3.6%
          </li>
          <li className="list-disc list-inside">
            User-to-Delivery (U2D): increased by 3.2%
          </li>
        </ul>

        <p className="text-base font-normal">
          The reduction in time-to-visit shortened booking cycles and improved
          operational predictability across deliveries.
        </p>
      </div>
    </div>
  </section>
);

export default OutcomeSection;
