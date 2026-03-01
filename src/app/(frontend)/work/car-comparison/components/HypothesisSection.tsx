import Title from "@/components/ui/Title";

const HypothesisSection = () => (
  <section>
    <Title index={4}>Hypothesis</Title>

    <div className="w-full md:w-3/4 lg:w-3/5 flex flex-col gap-6 ml-auto">
      <h3 className="text-lg">
        Introducing a structured comparison layer for behaviourally identified
        evaluators would:
      </h3>

      <ol className="text-base font-light list-decimal list-inside space-y-2">
        <li>Reduce cognitive strain</li>
        <li>Improve interpretation clarity</li>
        <li>Increase downstream progression quality</li>
      </ol>
    </div>
  </section>
);

export default HypothesisSection;
