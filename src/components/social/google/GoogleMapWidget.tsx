interface GoogleMapWidgetProps {
  embedUrl: string;
  title?: string;
}

export default function GoogleMapWidget({
  embedUrl,
  title = "Google Maps",
}: GoogleMapWidgetProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold">{title}</h2>

        <p className="mt-2 text-gray-500">
          View our location and Google reviews
        </p>
      </div>

      <div className="overflow-hidden rounded-xl shadow-lg">
        <iframe
          src={embedUrl}
          width="100%"
          height="600"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          className="border-0"
        />
      </div>
    </section>
  );
}
