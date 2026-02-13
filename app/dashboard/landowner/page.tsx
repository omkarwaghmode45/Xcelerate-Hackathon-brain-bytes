"use client"

import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { industrialLands, scanHistory, alerts } from "@/lib/dummy-data"
import { ShieldCheck, AlertTriangle, Scan, Calendar, ArrowRight } from "lucide-react"
import { format } from "date-fns"
import Link from "next/link"

// Simulate the landowner having "IND-001" assigned
const myLand = industrialLands[0]
const myAlerts = alerts.filter((a) => a.landId === myLand.id)

export default function LandownerDashboard() {
  return (
    <DashboardLayout role="landowner">
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="font-display text-2xl font-bold text-foreground">
            Land Owner Dashboard
          </h1>
          <p className="text-sm text-muted-foreground">
            Boundary status and monitoring overview for your assigned land.
          </p>
        </div>

        {/* Property Card */}
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <h2 className="font-display text-xl font-bold text-card-foreground">
                    {myLand.name}
                  </h2>
                  <Badge
                    variant={myLand.status === "safe" ? "secondary" : "destructive"}
                  >
                    {myLand.status === "safe" ? "Secure" : "Alert Active"}
                  </Badge>
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span>ID: {myLand.id}</span>
                  <span>{myLand.location}</span>
                  <span>{myLand.area}</span>
                </div>
              </div>
              <div className="flex flex-col items-end gap-1">
                <p className="text-xs text-muted-foreground">Boundary Integrity</p>
                <p className="font-display text-3xl font-bold text-card-foreground">
                  {(100 - myLand.boundaryChange).toFixed(1)}%
                </p>
                <Progress
                  value={100 - myLand.boundaryChange}
                  className="h-2 w-32"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats */}
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardContent className="flex items-center gap-4 p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Scan className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-card-foreground">{scanHistory.length}</p>
                <p className="text-xs text-muted-foreground">Total Scans</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center gap-4 p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-destructive/10">
                <AlertTriangle className="h-5 w-5 text-destructive" />
              </div>
              <div>
                <p className="text-2xl font-bold text-card-foreground">
                  {myAlerts.filter((a) => !a.resolved).length}
                </p>
                <p className="text-xs text-muted-foreground">Active Alerts</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center gap-4 p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                <Calendar className="h-5 w-5 text-accent" />
              </div>
              <div>
                <p className="text-2xl font-bold text-card-foreground">
                  {format(new Date(myLand.lastScan), "MMM dd")}
                </p>
                <p className="text-xs text-muted-foreground">Last Scan Date</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Recent Scans */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-3">
              <CardTitle className="font-display text-base">Recent Scans</CardTitle>
              <Link
                href="/dashboard/landowner/scans"
                className="flex items-center gap-1 text-xs font-medium text-primary hover:underline"
              >
                View all <ArrowRight className="h-3 w-3" />
              </Link>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-3">
                {scanHistory.slice(0, 3).map((scan) => (
                  <div
                    key={scan.id}
                    className="flex items-center justify-between rounded-lg border border-border p-3"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10">
                        <Scan className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-card-foreground">
                          {scan.type}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {format(new Date(scan.date), "MMM dd, yyyy")}
                        </p>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-[10px]">
                      {scan.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Alerts */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-3">
              <CardTitle className="font-display text-base">Notifications</CardTitle>
              <Link
                href="/dashboard/landowner/alerts"
                className="flex items-center gap-1 text-xs font-medium text-primary hover:underline"
              >
                View all <ArrowRight className="h-3 w-3" />
              </Link>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-3">
                {myAlerts.slice(0, 3).map((alert) => (
                  <div
                    key={alert.id}
                    className="flex items-start gap-3 rounded-lg border border-border p-3"
                  >
                    <div
                      className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md ${
                        alert.resolved ? "bg-accent/10" : "bg-destructive/10"
                      }`}
                    >
                      {alert.resolved ? (
                        <ShieldCheck className="h-4 w-4 text-accent" />
                      ) : (
                        <AlertTriangle className="h-4 w-4 text-destructive" />
                      )}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-semibold text-card-foreground">
                          {alert.type.replace("_", " ")}
                        </p>
                        <Badge
                          variant={alert.resolved ? "secondary" : "destructive"}
                          className="text-[10px]"
                        >
                          {alert.resolved ? "resolved" : alert.severity}
                        </Badge>
                      </div>
                      <p className="mt-0.5 text-xs text-muted-foreground line-clamp-2">
                        {alert.description}
                      </p>
                    </div>
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
