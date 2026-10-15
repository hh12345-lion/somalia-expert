import Image from "next/image";

export type FramePhoto = { src: string; alt: string };

/** The horizontal logo for light backgrounds. */
export function Logo({ className = "h-8 w-auto", priority }: { className?: string; priority?: boolean }) {
  return <Image src="/brand/logo.svg" alt="Somalia Expert" width={991} height={109} priority={priority} unoptimized className={className} />;
}

/** The logo as supplied for dark backgrounds. */
export function LogoLight({ className = "h-8 w-auto" }: { className?: string }) {
  return <Image src="/brand/logo-light.svg" alt="Somalia Expert" width={991} height={109} unoptimized className={className} />;
}

/** The monogram on its own. */
export function Mark({ className = "h-10 w-auto" }: { className?: string }) {
  return <Image src="/brand/monogram.svg" alt="" aria-hidden width={339} height={422} unoptimized className={className} />;
}

/**
 * A photograph set in the two halves of the monogram's disc: a navy half circle rising behind its top left
 * and a peach half circle behind its bottom right, the photograph itself rounded on the opposite corners.
 */
export function DiscPhoto({
  photo,
  aspect = "aspect-[4/5]",
  sizes = "(max-width: 1024px) 90vw, 480px",
  priority,
  className = "",
  position = "object-center",
  discs = true,
}: {
  photo: FramePhoto;
  aspect?: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
  position?: string;
  discs?: boolean;
}) {
  return (
    <div className={`relative ${discs ? "px-4 py-4 sm:px-6 sm:py-6" : ""} ${className}`}>
      {discs && (
        <>
          <span aria-hidden className="absolute left-0 top-0 h-[46%] w-[58%] rounded-tl-full bg-navy" />
          <span aria-hidden className="absolute bottom-0 right-0 h-[46%] w-[58%] rounded-br-full bg-peach" />
        </>
      )}
      <div className={`relative overflow-hidden rounded-tr-[2.5rem] rounded-bl-[2.5rem] bg-navy ${aspect}`}>
        <Image src={photo.src} alt={photo.alt} fill priority={priority} sizes={sizes} className={`object-cover ${position}`} />
      </div>
    </div>
  );
}
