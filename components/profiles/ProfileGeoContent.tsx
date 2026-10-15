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
              ? "border-[#29324D]/40 bg-[#29324D]/5"
              : "border-[#C6CCDC] bg-[#E0E5EF]"
          }`}
        >
          <h2 className="break-words text-lg font-bold text-[#29324D]">{block.title}</h2>
          <p className="prose-safe mt-3 text-sm text-[#4B5168] leading-relaxed sm:text-base">{block.content}</p>
        </div>
      ))}
    </div>
  );
}
