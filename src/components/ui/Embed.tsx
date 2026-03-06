import { type HTMLAttributes } from "react";

type EmbedProps = HTMLAttributes<HTMLDivElement> & {
  iframeProps?: HTMLAttributes<HTMLIFrameElement>;
  url: string;
};

function getEmbedUrl(url: string) {
  if (url.includes("figma.com")) {
    return `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(
      url,
    )}`;
  }

  if (url.includes("docs.google.com/spreadsheets")) {
    return url.replace("/edit", "/preview");
  }

  return url;
}

export const Embed = ({
  url,
  className,
  iframeProps,
  ...props
}: EmbedProps) => {
  const embedUrl = getEmbedUrl(url);

  return (
    <div className={className} {...props}>
      <iframe
        src={embedUrl}
        width="100%"
        height="100%"
        className="bg-muted border border-black/10 rounded-2xl"
        allowFullScreen
        {...iframeProps}
      />
    </div>
  );
};
