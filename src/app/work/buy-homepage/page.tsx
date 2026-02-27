import { ArrowLeftIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const BuyHomepagePage = () => (
  <main className="min-h-screen py-12">
    <Link
      href="/#work"
      className="inline-flex items-center gap-2 text-sm text-primary/70 hover:text-primary transition-colors mb-8"
      aria-label="Back to work section"
    >
      <ArrowLeftIcon className="w-4 h-4" />
      Back to work
    </Link>

    <article className="space-y-8">
      <figure className="relative w-full aspect-video rounded-2xl overflow-hidden">
        <Image
          src="/images/buy-home.jpg"
          alt="Buy Homepage - Transactional Users"
          fill
          className="object-cover object-top-left"
          priority
        />
      </figure>

      <header>
        <h1 className="text-2xl sm:text-3xl font-semibold">
          Buy Homepage - Transactional Users
        </h1>
        <p className="mt-2 text-primary/70">...</p>
      </header>
    </article>
  </main>
);

export default BuyHomepagePage;
