import Image from "next/image";
import { PageShell } from "@/components/layout/PageShell";
import { createMetadata } from "@/lib/metadata";
import { photos } from "@/lib/photos";

export const metadata = createMetadata({
  title: "Image Credits | Somalia Expert",
  description: "Sources, authors and licences for the photographs used on this website.",
  path: "/image-credits",
});

export default function ImageCreditsPage() {
  return (
    <PageShell
      photo={photos.admiraltyChart}
      title="Image credits"
      subtitle="The photographs on this site come from Wikimedia Commons. Each has been resized or cropped to fit its frame and is otherwise unaltered."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Image credits" }]}
      showCta={false}
    >
      <ul className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {Object.values(photos).map((photo) => (
          <li key={photo.src} className="min-w-0">
            <div className="relative aspect-[4/3] overflow-hidden rounded-tr-[1.6rem] rounded-bl-[1.6rem] bg-navy">
              <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 640px) 90vw, 360px" className="object-cover" />
            </div>
            <p className="font-display mt-4 break-words text-lg font-bold text-navy">{photo.credit.title}</p>
            <p className="mt-1 text-body">
              {photo.credit.creator}
              {" · "}
              <a href={photo.credit.licenseUrl || photo.credit.source} rel="noopener noreferrer" className="font-semibold text-navy underline decoration-peach">
                {photo.credit.license}
              </a>
              {" · "}
              <a href={photo.credit.source} rel="noopener noreferrer" className="font-semibold text-navy underline decoration-peach">
                Source
              </a>
            </p>
          </li>
        ))}
      </ul>
    </PageShell>
  );
}
