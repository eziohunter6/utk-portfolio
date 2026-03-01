import Title from "@/components/ui/Title";

const OutcomeSection = () => (
  <section>
    <Title index={8}>Outcome</Title>

    <div className="w-full md:w-3/4 lg:w-3/5 flex flex-col gap-8 ml-auto">
      {/* Exploration & Tradeoffs */}
      <div className="flex flex-col gap-4">
        <p className="text-base font-normal">
          Uplift increased deeper in the funnel, suggesting improved decision
          quality rather than surface engagement growth.
        </p>

        <div className="flex flex-col gap-2">
          <p className="text-base font-semibold">Business Metrics</p>
          <ul className="text-base font-semibold">
            <li className="list-disc list-inside">
              User-to-test drive scheduled (U2Tds): uplift of ↑1.6%
            </li>
            <li className="list-disc list-inside">
              User-to-token (U2T): uplift of ↑3.8%
            </li>
            <li className="list-disc list-inside">
              User-to-Delivery (U2D): uplift of ↑5.3%
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-base font-semibold">
            Key User Metrics (Turn around Time)
          </p>
          <ul className="text-base font-semibold">
            <li className="list-disc list-inside">
              Time to Token (T2T) : (down by ↓12.4%)
            </li>
            <li className="list-disc list-inside">
              Time to Visit (T2V) : (down by ↓8.3%)
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default OutcomeSection;
