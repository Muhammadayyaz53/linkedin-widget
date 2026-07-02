interface LinkedInEmbedProps {
  url: string;
  height?: number;
}

export default function LinkedInEmbed({
  url,
  height = 500,
}: LinkedInEmbedProps) {
  return (
    <iframe
      src={url}
      width="100%"
      height={height}
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
      }}
    />
  );
}
