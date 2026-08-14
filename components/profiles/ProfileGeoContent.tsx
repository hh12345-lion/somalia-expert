import type { ProfileGeoBlock } from "@/data/profile-geo";

export function ProfileGeoContent({ blocks }: { blocks: ProfileGeoBlock[] }) {
  if (blocks.length === 0) return null;

  return (
    <div className="my-8 space-y-6">
      {blocks.map((block) => (
        <div
          key={block.title}
          className={`rounded-[8px] border p-6 ${
            block.type === "highlight"
              ? "border-[#7A3048]/40 bg-[#7A3048]/5"
              : "border-[#D4D8DE] bg-[#ECEEF1]"
          }`}
        >
          <h2 className="break-words text-lg font-bold text-[#1C1F24]">{block.title}</h2>
          <p className="prose-safe mt-3 text-sm text-[#4A5058] leading-relaxed sm:text-base">{block.content}</p>
        </div>
      ))}
    </div>
  );
}
