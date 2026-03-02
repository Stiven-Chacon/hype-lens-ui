import useSWR from "swr"
import type { VideosResponse } from "../types/video"
import { fetchVideos } from "../lib/api/videos"

export function useVideos() {
  const { data, error, isLoading, mutate } = useSWR<VideosResponse>(
    "/api/videos",
    fetchVideos,
    {
      revalidateOnFocus: false,
      dedupingInterval: 30000,
    }
  )

  const videos = data?.data ?? []
  const crownVideo = videos.length
    ? videos.reduce((max, v) => (v.hypeLevel > max.hypeLevel ? v : max), videos[0])
    : null

  return {
    videos,
    crownVideo,
    total: data?.total ?? 0,
    isLoading,
    isError: !!error,
    error,
    mutate,
  }
}
