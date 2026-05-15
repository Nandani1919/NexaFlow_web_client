import { cn } from "@/lib/utils";

export function BrandMark({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex shrink-0 items-center justify-center overflow-hidden rounded-xl border border-primary/25 bg-[#071417] shadow-sm",
        className,
      )}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_25%,hsl(188_88%_68%/0.3),transparent_34%)]" />
      <svg viewBox="0 0 40 40" className="relative h-[72%] w-[72%]" fill="none">
        <path
          d="M10 29V11l20 18V11"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-primary"
        />
        <path
          d="M12 20h16"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          className="text-accent"
        />
        <circle cx="30" cy="11" r="2.6" className="fill-accent" />
      </svg>
    </div>
  );
}
