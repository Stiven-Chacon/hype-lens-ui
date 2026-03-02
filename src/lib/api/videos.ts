import type { VideosResponse } from "../../types/video"

const API_BASE_URL = import.meta.env.VITE_API_URL ?? "/api"

export async function fetchVideos(): Promise<VideosResponse> {
  const response = await fetch(`${API_BASE_URL}/videos`)

  if (!response.ok) {
    throw new Error(`Error al obtener videos: ${response.status}`)
  }

  return response.json()
}
