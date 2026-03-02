import { Activity } from "lucide-react"

export function DashboardHeader() {
  return (
    <header className="flex flex-col gap-1">
      <div className="flex items-center gap-3">
        <Activity className="h-6 w-6 text-crown" aria-hidden="true" />
        <h1 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
          Video Hype
        </h1>
      </div>
      <p className="text-sm text-muted-foreground">
        Analisis de engagement y nivel de hype de videos
      </p>
    </header>
  )
}
