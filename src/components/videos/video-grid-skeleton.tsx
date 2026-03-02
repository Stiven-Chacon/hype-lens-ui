export function VideoGridSkeleton() {
  return (
    <div className="flex flex-col gap-8">
      <div className="animate-pulse rounded-xl border border-border bg-card p-6">
        <div className="flex flex-col gap-6 md:flex-row">
          <div className="aspect-video w-full rounded-lg bg-muted md:w-1/2" />
          <div className="flex flex-1 flex-col gap-4">
            <div className="h-4 w-32 rounded bg-muted" />
            <div className="h-6 w-3/4 rounded bg-muted" />
            <div className="h-4 w-full rounded bg-muted" />
            <div className="h-4 w-2/3 rounded bg-muted" />
            <div className="mt-auto flex gap-4">
              <div className="h-4 w-16 rounded bg-muted" />
              <div className="h-4 w-16 rounded bg-muted" />
              <div className="h-4 w-16 rounded bg-muted" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 7 }).map((_, i) => (
          <div
            key={i}
            className="animate-pulse overflow-hidden rounded-lg border border-border bg-card"
          >
            <div className="aspect-video bg-muted" />
            <div className="flex flex-col gap-3 p-4">
              <div className="h-4 w-3/4 rounded bg-muted" />
              <div className="h-3 w-1/2 rounded bg-muted" />
              <div className="flex gap-3">
                <div className="h-3 w-12 rounded bg-muted" />
                <div className="h-3 w-12 rounded bg-muted" />
                <div className="h-3 w-12 rounded bg-muted" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
