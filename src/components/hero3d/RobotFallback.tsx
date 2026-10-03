import { ModuleMap } from "@/components/common/ModuleMap";

export function RobotFallback() {
  return (
    <div
      className="flex h-full w-full items-center justify-center"
      role="img"
      aria-label="Illustration of EduErpee's AI technology core connected to AI, ERP, cloud, automation and security modules."
    >
      <div className="relative w-full max-w-md">
        <div className="absolute inset-0 rounded-full blur-3xl" style={{ background: "color-mix(in srgb, var(--color-teal) 12%, transparent)" }} />
        <ModuleMap className="relative h-auto w-full" />
      </div>
    </div>
  );
}
