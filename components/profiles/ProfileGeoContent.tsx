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
              ? "border-[#E07050]/40 bg-[#E07050]/5"
              : "border-[#B8C9C4] bg-[#E8EEEC]"
          }`}
        >
          <h2 className="break-words text-lg font-bold text-[#0F2420]">{block.title}</h2>
          <p className="prose-safe mt-3 text-sm text-[#3A4542] leading-relaxed sm:text-base">{block.content}</p>
        </div>
      ))}
    </div>
  );
}
