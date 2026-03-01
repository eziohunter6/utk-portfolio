import Image from "next/image";
import Title from "@/components/ui/Title";

const Videos = [
  {
    src: "/Thar.mp4",
    alt: "AI Prototype 1",
  },
  {
    src: "/Thar.mp4",
    alt: "AI Prototype 2",
  },
  {
    src: "/Thar.mp4",
    alt: "AI Prototype 3",
  },
];

const AIVideoSection = () => (
  <section>
    <Title index={3}>AI + Video</Title>
    <div className="w-full md:w-3/4 lg:w-3/5 flex flex-col gap-6 ml-auto">
      <p className="text-base font-normal">
        I built an AI-powered content engine leveraging Google Veo for video
        generation and Stitch for rapid visual composition. The system
        translated structured prompts into production-ready content flows,
        reducing manual editing overhead and accelerating creative turnaround.
        The focus wasn’t just generation, but controllability, ensuring outputs
        aligned with narrative intent and product context.
      </p>
    </div>

    {/* Videos */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
      {Videos.map((video) => (
        <div key={video.alt} className="relative w-full aspect-video bg-muted">
          <video
            src={`${process.env.BLOB_BASE_URL}${video.src}`}
            className="w-full h-full object-contain"
            playsInline
            controls
            preload="none"
            muted
            loop
          />
        </div>
      ))}
    </div>

    {/* Image */}
    <div className="bg-muted rounded-2xl px-8 pt-8 mt-8">
      <div className="relative w-11/12 aspect-11/5 rounded-lg overflow-hidden mx-auto">
        <Image
          src="/images/ai-practices/dashboard.png"
          alt="Dashboard Image"
          fill
          className="object-contain object-bottom"
        />
      </div>
    </div>
  </section>
);

export default AIVideoSection;
