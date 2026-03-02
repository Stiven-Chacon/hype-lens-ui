import { DashboardHeader } from "./dashboard-header";

export function VideoDashboard() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-8">
        <DashboardHeader />
      </div>
    </main>
  )
}

