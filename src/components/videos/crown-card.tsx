import { Eye, ThumbsUp, MessageCircle, Clock, Crown } from "lucide-react"
import type { Video } from "../../types/video"
import { formatHypeLevel, formatViews, getHypeLabel } from "../../lib/format"

interface CrownCardProps {
  video: Video
}

export function CrownCard({ video }: CrownCardProps) {
  return (
    <article className="relative overflow-hidden rounded-xl border-2 border-crown bg-card shadow-[0_0_40px_var(--crown-glow)] transition-all duration-500 hover:shadow-[0_0_60px_var(--crown-glow)]">
      <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-crown/5 blur-3xl" />
      <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-crown/5 blur-3xl" />

      <div className="flex flex-col gap-6 p-6 md:flex-row">
        <div className="relative aspect-video w-full overflow-hidden rounded-lg md:w-1/2">
          <img
            src={video.thumbnailUrl}
            alt={`Miniatura de ${video.title}`}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
        </div>

        <div className="flex flex-1 flex-col justify-between gap-4">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Crown className="h-5 w-5 text-crown" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-widest text-crown">
                La Joya de la Corona
              </span>
            </div>

            <h2 className="text-balance text-xl font-bold leading-relaxed text-card-foreground md:text-2xl">
              {video.title}
            </h2>

            <p className="text-sm font-medium text-foreground">
              {video.channel}
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 items-center gap-2 rounded-full border border-crown/30 bg-crown/10 px-3">
                <span className="text-xs font-bold text-crown">
                  Hype {formatHypeLevel(video.hypeLevel)}%
                </span>
                <span className="text-xs text-crown/70">
                  {getHypeLabel(video.hypeLevel)}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Eye className="h-4 w-4" aria-hidden="true" />
                <span>{formatViews(video.views)} vistas</span>
              </span>
              <span className="flex items-center gap-1.5">
                <ThumbsUp className="h-4 w-4" aria-hidden="true" />
                <span>{formatViews(video.likes)}</span>
              </span>
              {!video.commentsDisabled && video.comments !== null && (
                <span className="flex items-center gap-1.5">
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  <span>{formatViews(video.comments)}</span>
                </span>
              )}
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" aria-hidden="true" />
                <span>{video.publishedAt}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
