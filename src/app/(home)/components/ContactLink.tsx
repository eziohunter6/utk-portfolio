"use client";

import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import type { TContact } from "@/lib/types";

const ContactLink = ({ name, href, type }: TContact) => {
  const [isCopied, setIsCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(href);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <Link
      href={href}
      target="_blank"
      onClick={type === "copy" ? handleCopy : undefined}
      rel="noopener noreferrer"
      className="group relative flex items-center gap-2 text-xl font-semibold hover:underline"
    >
      {name}
      {type === "link" && <ArrowUpRightIcon className="w-6 h-6" />}

      {type === "copy" && (
        <span className="bg-primary text-white rounded-4xl text-xs font-light px-2 pt-1 pb-1.5 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 ease-in-out">
          {isCopied ? "copied" : "click to copy"}
        </span>
      )}
    </Link>
  );
};

export default ContactLink;
