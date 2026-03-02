export interface Video {
  id: string
  title: string
  thumbnailUrl: string
  channel: string
  views: number
  likes: number
  comments: number | null
  commentsDisabled: boolean
  publishedAt: string
  hypeLevel: number
}

export interface VideosResponse {
  data: Video[]
  total: number
}
