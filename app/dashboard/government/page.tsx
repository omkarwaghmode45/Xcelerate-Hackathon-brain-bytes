"use client"

import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { industrialLands, alerts } from "@/lib/dummy-data"
import {
  MapPin,
  AlertTriangle,
  ShieldCheck,
  Scan,
  TrendingUp,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"
import { format } from "date-fns"

const stats = [
  {
    label: "Total Plots Monitored",
    value: industrialLands.length.toString(),
    icon: MapPin,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    label: "Active Alerts",
    value: alerts.filter((a) => !a.resolved).length.toString(),
    icon: AlertTriangle,
    color: "text-destructive",
    bgColor: "bg-destructive/10",
  },
  {
    label: "Boundaries Secure",
    value: industrialLands.filter((l) => l.status === "safe").length.toString(),
    icon: ShieldCheck,
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    label: "Scans Today",
    value: "24",
    icon: Scan,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
]

export default function GovernmentDashboard() {
  const unresolvedAlerts = alerts.filter((a) => !a.resolved)

  return (
    <DashboardLayout role="government">
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="font-display text-2xl font-bold text-foreground">
            Government Officer Dashboard
          </h1>
          <p className="text-sm text-muted-foreground">
            Overview of all monitored industrial lands and boundary alerts.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.label}>
              <CardContent className="flex items-center gap-4 p-5">
                <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${stat.bgColor}`}>
                  <stat.icon className={`h-5 w-5 ${stat.color}`} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-card-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Recent Alerts */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-3">
              <CardTitle className="font-display text-base">Recent Alerts</CardTitle>
              <Link
                href="/dashboard/government/alerts"
                className="flex items-center gap-1 text-xs font-medium text-primary hover:underline"
              >
                View all <ArrowRight className="h-3 w-3" />
              </Link>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-3">
                {unresolvedAlerts.slice(0, 3).map((alert) => (
                  <div
                    key={alert.id}
                    className="flex items-start gap-3 rounded-lg border border-border p-3"
                  >
                    <div
                      className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md ${
                        alert.severity === "critical"
                          ? "bg-destructive/10"
                          : alert.severity === "high"
                          ? "bg-destructive/10"
                          : "bg-warning/10"
                      }`}
                    >
                      <AlertTriangle
                        className={`h-4 w-4 ${
                          alert.severity === "critical" || alert.severity === "high"
                            ? "text-destructive"
                            : "text-warning"
                        }`}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-semibold text-card-foreground">
                          {alert.landName}
                        </p>
                        <Badge
                          variant={
                            alert.severity === "critical"
                              ? "destructive"
                              : alert.severity === "high"
                              ? "destructive"
                              : "secondary"
                          }
                          className="text-[10px]"
                        >
                          {alert.severity}
                        </Badge>
                      </div>
                      <p className="mt-0.5 text-xs text-muted-foreground line-clamp-2">
                        {alert.description}
                      </p>
                      <p className="mt-1 text-[10px] text-muted-foreground">
                        {format(new Date(alert.date), "MMM dd, yyyy HH:mm")}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Industrial Lands */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-3">
              <CardTitle className="font-display text-base">Monitored Lands</CardTitle>
              <Link
                href="/dashboard/government/map"
                className="flex items-center gap-1 text-xs font-medium text-primary hover:underline"
              >
                Map view <ArrowRight className="h-3 w-3" />
              </Link>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-3">
                {industrialLands.slice(0, 4).map((land) => (
                  <div
                    key={land.id}
                    className="flex items-center justify-between rounded-lg border border-border p-3"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`h-2.5 w-2.5 rounded-full ${
                          land.status === "safe"
                            ? "bg-accent"
                            : land.status === "alert"
                            ? "bg-destructive"
                            : "bg-warning"
                        }`}
                      />
                      <div>
                        <p className="text-sm font-semibold text-card-foreground">{land.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {land.location} &middot; {land.area}
                        </p>
                      </div>
                    </div>
                    {land.boundaryChange > 0 && (
                      <div className="flex items-center gap-1 text-xs text-destructive">
                        <TrendingUp className="h-3 w-3" />
                        {land.boundaryChange}%
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
