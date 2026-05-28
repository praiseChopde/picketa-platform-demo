export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 p-8 font-sans dark:bg-black">
      <main className="w-full max-w-4xl rounded-2xl bg-white p-12 shadow-sm border border-zinc-200 dark:border-zinc-800 dark:bg-zinc-900">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          Enterprise Data Analytics Dashboard
        </h1>
        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
          Production-ready foundation for high-throughput data visualization and reporting.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-700">
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">Real-Time Data Sync</h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Active: Connected to secure API gateway for live data ingestion.
            </p>
          </div>
          <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-700">
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">System Metrics</h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Status: Operational. High-performance data pipelines running at 99.9% uptime.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}