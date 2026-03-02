import type { Video } from "../../types/video"
import { CrownCard } from "./crown-card"
import { VideoCard } from "./video-card"

interface VideoGridProps {
  videos: Video[]
  crownVideo: Video | null
}

export function VideoGrid({ videos, crownVideo }: VideoGridProps) {
  const otherVideos = videos.filter((v) => v.id !== crownVideo?.id)

  return (
    <div className="flex flex-col gap-8">
      {crownVideo && (
        <section aria-label="Video destacado">
          <CrownCard video={crownVideo} />
        </section>
      )}

      <section aria-label="Todos los videos">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-foreground">
            Todos los Videos
          </h2>
          <span className="text-sm text-muted-foreground">
            {videos.length} videos
          </span>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {otherVideos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </section>
    </div>
  )
}
