import { useVideos } from "../../hooks/use-videos"
import { DashboardHeader } from "./dashboard-header"
import { ErrorState } from "./error-state"
import { VideoGrid } from "./video-grid"
import { VideoGridSkeleton } from "./video-grid-skeleton"

export function VideoDashboard() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-8">
        <DashboardHeader />
        <VideoDashboardContent />
      </div>
    </main>
  )
}

function VideoDashboardContent() {
  const { videos, crownVideo, isLoading, isError, error, mutate } = useVideos()

  if (isLoading) {
    return <VideoGridSkeleton />
  }

  if (isError) {
    return (
      <ErrorState
        message={error?.message}
        onRetry={() => mutate()}
      />
    )
  }

  if (videos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-2 py-16">
        <p className="text-lg font-medium text-foreground">No hay videos disponibles</p>
        <p className="text-sm text-muted-foreground">No se encontraron videos para mostrar.</p>
      </div>
    )
  }

  return <VideoGrid videos={videos} crownVideo={crownVideo} />
}
