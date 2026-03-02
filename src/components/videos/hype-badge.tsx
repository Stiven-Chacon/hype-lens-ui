import { formatHypeLevel, getHypeLabel } from "../../lib/format"

interface HypeBadgeProps {
  hype: number
}

export function HypeBadge({ hype }: HypeBadgeProps) {
  const label = getHypeLabel(hype)

  const colorClass =
    hype === 0
      ? "bg-muted text-muted-foreground"
      : hype < 0.05
        ? "bg-secondary text-secondary-foreground"
        : hype < 0.1
          ? "bg-crown/20 text-crown border border-crown/30"
          : "bg-crown text-primary-foreground"

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${colorClass}`}
    >
      {label} {hype > 0 && `${formatHypeLevel(hype)}%`}
    </span>
  )
}
