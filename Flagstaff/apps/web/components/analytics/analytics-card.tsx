import * as React from "react"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { Skeleton } from "@workspace/ui/components/skeleton"
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@workspace/ui/components/empty"

type AnalyticsCardProps = {
  title: React.ReactNode
  description?: React.ReactNode
  action?: React.ReactNode
  loading?: boolean
  empty?: boolean
  emptyTitle?: React.ReactNode
  emptyDescription?: React.ReactNode
  children: React.ReactNode
  className?: string
}

export function AnalyticsCard({
  title,
  description,
  action,
  loading,
  empty,
  emptyTitle = "No data yet",
  emptyDescription = "Once posts start publishing, metrics will appear here.",
  children,
  className,
}: AnalyticsCardProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description ? <CardDescription>{description}</CardDescription> : null}
        {action ? <CardAction>{action}</CardAction> : null}
      </CardHeader>
      <CardContent>
        {loading ? (
          <Skeleton className="aspect-[16/7] w-full" />
        ) : empty ? (
          <Empty className="aspect-[16/7] w-full">
            <EmptyHeader>
              <EmptyTitle>{emptyTitle}</EmptyTitle>
              <EmptyDescription>{emptyDescription}</EmptyDescription>
            </EmptyHeader>
          </Empty>
        ) : (
          children
        )}
      </CardContent>
    </Card>
  )
}
