import Image from "next/image";
import Title from "@/components/ui/Title";

const InfoSection = () => (
  <section id="info">
    <Title index={2}>Info</Title>

    <div className="w-full md:w-3/4 lg:w-3/5 flex flex-col gap-8 ml-auto">
      {/* Info Content */}
      <div className="flex flex-col md:flex-row gap-4">
        {/* Content 1 */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl">I help teams move fast.</h3>
          <p className="text-base font-normal">
            I design features, products and apps for ambitious teams and
            organisations who want to move quickly and build things that matter.
            Based in India, I help tech companies and startups turn ideas into
            valuable useful products with less friction.
          </p>
        </div>

        {/* Content 2 */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl">I help teams move fast.</h3>
          <p className="text-base font-normal">
            I design features, products and apps for ambitious teams and
            organisations who want to move quickly and build things that matter.
            Based in India, I help tech companies and startups turn ideas into
            valuable useful products with less friction.
          </p>
        </div>
      </div>

      {/* Info Image */}
      <div className="relative w-full aspect-square bg-muted">
        <Image
          fill
          src="/images/info.png"
          alt="Info Image"
          className="object-cover"
        />
      </div>
    </div>
  </section>
);

export default InfoSection;
