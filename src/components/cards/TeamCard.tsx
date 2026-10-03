import type { TeamMember } from "@/types/content";

export function TeamCard({ member }: { member: TeamMember }) {
  const initials = member.name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2);

  return (
    <div className="overflow-hidden rounded-lg border border-ink-900/10 dark:border-white/10 bg-white dark:bg-navy-900">
      {member.photoUrl ? (
        // Fixed 1:1 box regardless of the source photo's own aspect ratio —
        // object-cover + a per-person object-position (set in content.ts)
        // keeps the face framed instead of being cropped awkwardly.
        <div className="aspect-square w-full overflow-hidden bg-mist-100 dark:bg-navy-950">
          <img
            src={member.photoUrl}
            alt={member.name}
            className="h-full w-full object-cover"
            style={{ objectPosition: member.photoObjectPosition ?? "center" }}
            loading="lazy"
          />
        </div>
      ) : (
        <div className="flex aspect-square w-full items-center justify-center bg-gradient-to-br from-brand-orange to-domain-enterprise">
          <span className="font-display text-3xl font-semibold text-white">{initials}</span>
        </div>
      )}
      <div className="p-5">
        <h3 className="font-display text-[15px] font-semibold text-ink-900 dark:text-mist-100">{member.name}</h3>
        <div className="text-[12.5px] font-medium text-brand-orange">{member.role}</div>
        <p className="mt-2 text-[13px] leading-relaxed text-ink-500 dark:text-mist-200/70">{member.bio}</p>
      </div>
    </div>
  );
}
