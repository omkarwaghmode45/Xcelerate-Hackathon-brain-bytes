"use client"

import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { alerts } from "@/lib/dummy-data"
import { AlertTriangle, CheckCircle2, Filter, Clock } from "lucide-react"
import { format } from "date-fns"
import { useState } from "react"

type FilterType = "all" | "unresolved" | "resolved"

export default function AlertsPage() {
  const [filter, setFilter] = useState<FilterType>("all")

  const filteredAlerts =
    filter === "all"
      ? alerts
      : filter === "unresolved"
      ? alerts.filter((a) => !a.resolved)
      : alerts.filter((a) => a.resolved)

  return (
    <DashboardLayout role="government">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="font-display text-2xl font-bold text-foreground">
              Boundary Change Alerts
            </h1>
            <p className="text-sm text-muted-foreground">
              All detected boundary anomalies and encroachment alerts.
            </p>
          </div>
          <div className="flex gap-2">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter("all")}
            >
              <Filter className="mr-1 h-3 w-3" />
              All ({alerts.length})
            </Button>
            <Button
              variant={filter === "unresolved" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter("unresolved")}
            >
              <Clock className="mr-1 h-3 w-3" />
              Open ({alerts.filter((a) => !a.resolved).length})
            </Button>
            <Button
              variant={filter === "resolved" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter("resolved")}
            >
              <CheckCircle2 className="mr-1 h-3 w-3" />
              Resolved ({alerts.filter((a) => a.resolved).length})
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {filteredAlerts.map((alert) => (
            <Card key={alert.id}>
              <CardContent className="p-5">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div className="flex items-start gap-4">
                    <div
                      className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
                        alert.resolved
                          ? "bg-accent/10"
                          : alert.severity === "critical"
                          ? "bg-destructive/10"
                          : alert.severity === "high"
                          ? "bg-destructive/10"
                          : alert.severity === "medium"
                          ? "bg-warning/10"
                          : "bg-muted"
                      }`}
                    >
                      {alert.resolved ? (
                        <CheckCircle2 className="h-5 w-5 text-accent" />
                      ) : (
                        <AlertTriangle
                          className={`h-5 w-5 ${
                            alert.severity === "critical" ||
                            alert.severity === "high"
                              ? "text-destructive"
                              : "text-warning"
                          }`}
                        />
                      )}
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-display text-sm font-semibold text-card-foreground">
                          {alert.landName}
                        </h3>
                        <Badge
                          variant={
                            alert.severity === "critical" ||
                            alert.severity === "high"
                              ? "destructive"
                              : "secondary"
                          }
                          className="text-[10px]"
                        >
                          {alert.severity}
                        </Badge>
                        <Badge variant="outline" className="text-[10px]">
                          {alert.type.replace("_", " ")}
                        </Badge>
                        {alert.resolved && (
                          <Badge className="bg-accent text-accent-foreground text-[10px]">
                            resolved
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {alert.description}
                      </p>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span>Alert ID: {alert.id}</span>
                        <span>Land ID: {alert.landId}</span>
                        <span>
                          {format(new Date(alert.date), "MMM dd, yyyy HH:mm")}
                        </span>
                      </div>
                    </div>
                  </div>

                  {!alert.resolved && (
                    <Button variant="outline" size="sm" className="shrink-0">
                      Mark Resolved
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}
