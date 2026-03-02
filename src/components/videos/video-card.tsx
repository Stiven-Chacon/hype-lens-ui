import { Eye, ThumbsUp, MessageCircle, Clock } from "lucide-react"
import type { Video } from "../../types/video"
import { formatViews } from "../../lib/format"
import { HypeBadge } from "./hype-badge"

interface VideoCardProps {
  video: Video
}

export function VideoCard({ video }: VideoCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:border-muted-foreground/30 hover:shadow-lg hover:shadow-background/50">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={video.thumbnailUrl}
          alt={`Miniatura de ${video.title}`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
   <div className="absolute right-2 top-2">
          <HypeBadge hype={video.hypeLevel} />
        </div> 
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <h3 className="line-clamp-2 text-sm font-semibold leading-relaxed text-card-foreground">
          {video.title}
        </h3>

        <p className="text-xs text-muted-foreground">{video.channel}</p>

        <div className="mt-auto flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Eye className="h-3.5 w-3.5" aria-hidden="true" />
            <span>{formatViews(video.views)}</span>
          </span>
          <span className="flex items-center gap-1">
            <ThumbsUp className="h-3.5 w-3.5" aria-hidden="true" />
            <span>{formatViews(video.likes)}</span>
          </span>
          {!video.commentsDisabled && video.comments !== null ? (
            <span className="flex items-center gap-1">
              <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
              <span>{formatViews(video.comments)}</span>
            </span>
          ) : (
            <span className="flex items-center gap-1 text-destructive">
              <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Desactivados</span>
            </span>
          )}
          <span className="ml-auto flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
            <span>{video.publishedAt}</span>
          </span>
        </div>
      </div>
    </article>
  )
}
