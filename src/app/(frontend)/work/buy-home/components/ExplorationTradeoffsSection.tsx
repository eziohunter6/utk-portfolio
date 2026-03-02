import Image from "next/image";
import Title from "@/components/ui/Title";

const ExplorationTradeoffsSection = () => (
  <section>
    <Title index={5}>Exploration & Tradeoffs</Title>

    <div className="w-full md:w-3/4 lg:w-3/5 flex flex-col gap-8 ml-auto">
      {/* Exploration & Tradeoffs */}
      <div className="flex flex-col gap-4">
        <p className="text-base font-normal">
          We explored three approaches: enhancing banners within the existing
          layout, introducing a dedicated transactional dashboard, and adapting
          the homepage contextually by lifecycle state. Banner enhancements were
          low effort but insufficient for stage clarity, while a separate
          dashboard risked fragmentation and ownership conflict. We selected a
          state-aware homepage to preserve continuity while improving
          visibility. A snappable swipe interaction was explored but
          deprioritized due to performance limits and cognitive overhead,
          prioritizing clarity over novelty.
        </p>
      </div>
    </div>

    {/* Image */}
    <div className="bg-muted rounded-2xl mt-8">
      <div className="relative w-full aspect-29/15 rounded-lg overflow-hidden">
        <Image
          src="/images/buy-home/exploration-tradeoffs.png"
          alt="Exploration & Tradeoffs Image"
          fill
          className="object-contain object-top"
        />
      </div>
    </div>
  </section>
);

export default ExplorationTradeoffsSection;
