export function formatViews(count: number): string {
  if (count == null || isNaN(count)) return "—" 

  if (count >= 1_000_000) {
    return `${(count / 1_000_000).toFixed(1).replace(/\.0$/, "")}M`
  }
  if (count >= 1_000) {
    return `${(count / 1_000).toFixed(1).replace(/\.0$/, "")}K`
  }
  return count.toString()
}

export function formatHypeLevel(hype: number): string {
  if (hype == null || isNaN(hype)) return "0.00" 
  return (hype * 100).toFixed(2)
}

export function getHypeLabel(hype: number): string {
  if (hype == null || isNaN(hype)) return "Sin Hype" 
  if (hype === 0) return "Sin Hype"
  if (hype < 0.05) return "Bajo"
  if (hype < 0.1) return "Moderado"
  if (hype < 0.2) return "Alto"
  return "Viral"
}