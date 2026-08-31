import type { TeamMember } from "@/types/content";

export function TeamCard({ member }: { member: TeamMember }) {
  const initials = member.name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2);

  return (
    <div className="rounded-lg border border-ink-900/10 dark:border-white/10 bg-white dark:bg-navy-900 p-5">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-brand-orange to-domain-enterprise font-display text-lg font-semibold text-white">
        {initials}
      </div>
      <h3 className="mt-4 font-display text-[15px] font-semibold text-ink-900 dark:text-mist-100">
        {member.name}
      </h3>
      <div className="text-[12.5px] font-medium text-brand-orange">{member.role}</div>
      <p className="mt-2 text-[13px] leading-relaxed text-ink-500 dark:text-mist-200/70">{member.bio}</p>
    </div>
  );
}
