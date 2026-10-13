"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@workspace/ui/components/chart"
import { AnalyticsCard } from "./analytics-card"

const data = [
  { day: "Mon", impressions: 2410, engagements: 180 },
  { day: "Tue", impressions: 3120, engagements: 240 },
  { day: "Wed", impressions: 2890, engagements: 210 },
  { day: "Thu", impressions: 4210, engagements: 360 },
  { day: "Fri", impressions: 5120, engagements: 480 },
  { day: "Sat", impressions: 4680, engagements: 420 },
  { day: "Sun", impressions: 5890, engagements: 540 },
]

const config = {
  impressions: {
    label: "Impressions",
    color: "var(--chart-1)",
  },
  engagements: {
    label: "Engagements",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export function EngagementChart() {
  return (
    <AnalyticsCard
      title="Engagement — last 7 days"
      description="Impressions and engagements across all connected accounts."
    >
      <ChartContainer config={config} className="aspect-[16/7] w-full">
        <AreaChart data={data} margin={{ left: 8, right: 8, top: 8 }}>
          <defs>
            <linearGradient id="fillImpressions" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="var(--color-impressions)" stopOpacity={0.5} />
              <stop offset="95%" stopColor="var(--color-impressions)" stopOpacity={0.05} />
            </linearGradient>
            <linearGradient id="fillEngagements" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="var(--color-engagements)" stopOpacity={0.5} />
              <stop offset="95%" stopColor="var(--color-engagements)" stopOpacity={0.05} />
            </linearGradient>
          </defs>
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis dataKey="day" tickLine={false} axisLine={false} tickMargin={8} />
          <YAxis tickLine={false} axisLine={false} tickMargin={8} width={40} />
          <ChartTooltip content={<ChartTooltipContent indicator="dot" />} />
          <Area
            type="monotone"
            dataKey="impressions"
            stroke="var(--color-impressions)"
            fill="url(#fillImpressions)"
            strokeWidth={2}
          />
          <Area
            type="monotone"
            dataKey="engagements"
            stroke="var(--color-engagements)"
            fill="url(#fillEngagements)"
            strokeWidth={2}
          />
          <ChartLegend content={<ChartLegendContent />} />
        </AreaChart>
      </ChartContainer>
    </AnalyticsCard>
  )
}
