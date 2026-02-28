import Image from "next/image";
import Title from "@/components/Title";

const HeroSection = () => (
  <section>
    <Title as="h1" className="mb-8" index={1}>
      Car Comparison
    </Title>

    <div className="w-full md:w-3/4 lg:w-3/5 flex flex-col gap-6 ml-auto">
      {/* Hero Content */}
      <ul className="flex flex-col gap-1 text-base">
        <li>Spinny</li>
        <li>Lead Designer</li>
        <li>4 Weeks</li>
        <li>Mobile + Web</li>
      </ul>

      <h2 className="text-2xl mt-6">
        Spinny did not have a comparison experience. Users evaluating multiple
        cars manually navigated between detail pages to assess differences.
      </h2>

      <p className="text-base">
        After identifying a recurring high intent evaluation behaviour, I led
        the design and rollout of the platform’s first structured comparison
        system. The solution was validated through floor testing and a
        large-scale A/B experiment (~238K users), improving progression across
        test drive, token, and delivery.
      </p>
    </div>

    {/* Bento Grid */}
    <div className="mt-8 grid lg:max-h-[600px] grid-cols-1 md:grid-cols-[1.8fr_1fr_1.3fr] md:grid-rows-[1fr_1fr] lg:grid-rows-[0.8fr_1fr] gap-4">
      {/* Car Comparison Mockup */}
      <div className="group px-8 pt-8 row-span-2 bg-muted rounded-2xl overflow-hidden">
        <div className="relative w-full h-full aspect-11/16">
          <Image
            src="/images/car-comparison/mockup.png"
            alt="Car Comparison Mockup"
            fill
            className="object-cover object-top group-hover:scale-105 transition-all duration-300 ease-in-out"
          />
        </div>
      </div>

      {/* Comfort model */}
      <div className="group p-4 bg-muted rounded-2xl flex flex-col justify-between gap-4 min-w-0 overflow-hidden">
        <hgroup className="text-ai-gradient text-center text-sm lg:text-base">
          <h4 className="text-semibold">Not just similarities.</h4>
          <p className="text-[0.55em]">
            We understand comparison is just not similarities but differences.
          </p>
        </hgroup>

        <div className="relative -mb-4 overflow-hidden w-full aspect-29/20">
          <Image
            src="/images/car-comparison/comfort.png"
            alt="Comfort model"
            fill
            className="object-cover object-top group-hover:scale-105 transition-all duration-300 ease-in-out"
          />
        </div>
      </div>

      {/* Quality model */}
      <div className="group p-4 bg-muted rounded-2xl flex flex-col justify-between gap-4 min-w-0 overflow-hidden">
        <hgroup className="text-ai-gradient text-center text-sm lg:text-base">
          <h4 className="text-semibold">Read less scan more.</h4>
          <p className="text-[0.55em]">
            Internally trained model that summarises two cars swifty and
            immediately aids to the decision velocity
          </p>
        </hgroup>

        <div className="relative overflow-hidden w-full aspect-21/10">
          <Image
            src="/images/car-comparison/quality.png"
            alt="Quality model"
            fill
            className="object-contain group-hover:scale-105 transition-all duration-300 ease-in-out"
          />
        </div>
      </div>

      {/* Compare model */}
      <div className="group p-4 md:col-span-2 bg-muted rounded-2xl flex flex-row justify-between gap-8 min-w-0 overflow-hidden">
        <div className="relative w-2/5 aspect3/4 -mt-4 shrink-0">
          <Image
            src="/images/car-comparison/compare.png"
            alt="Compare model"
            fill
            className="object-cover object-bottom group-hover:scale-105 transition-all duration-300 ease-in-out"
          />
        </div>

        <hgroup className="text-ai-gradient text-right text-base lg:text-xl mt-auto">
          <h4 className="text-semibold mb-2">No explicit entry.</h4>
          <p className="text-[0.55em]">
            Inbuilt model intelligently understands the discovery pattern and
            smart shortlists car for comparison.
          </p>
        </hgroup>
      </div>
    </div>
  </section>
);

export default HeroSection;
