import { EngagementChart } from "@/components/analytics/engagement-chart"

export default function Page() {
  return (
    <div className="min-h-svh p-6">
      <div className="mx-auto max-w-5xl space-y-6">
        <header>
          <h1 className="text-xl font-medium">Analytics</h1>
          <p className="text-muted-foreground text-sm">
            A first look at the shadcn chart + AnalyticsCard pattern.
          </p>
        </header>
        <EngagementChart />
      </div>
    </div>
  )
}
