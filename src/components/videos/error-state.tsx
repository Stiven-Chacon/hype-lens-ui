import { AlertCircle, RefreshCw } from "lucide-react"

interface ErrorStateProps {
  message?: string
  onRetry?: () => void
}

export function ErrorState({ message, onRetry }: ErrorStateProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-destructive/30 bg-destructive/5 px-6 py-16">
      <AlertCircle className="h-12 w-12 text-destructive" aria-hidden="true" />
      <div className="flex flex-col items-center gap-1 text-center">
        <h3 className="text-lg font-semibold text-foreground">
          Error al cargar los videos
        </h3>
        <p className="max-w-md text-sm text-muted-foreground">
          {message || "No se pudieron obtener los datos. Verifica tu conexion e intenta nuevamente."}
        </p>
      </div>
      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-2 inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground transition-colors hover:bg-muted"
        >
          <RefreshCw className="h-4 w-4" aria-hidden="true" />
          Reintentar
        </button>
      )}
    </div>
  )
}
