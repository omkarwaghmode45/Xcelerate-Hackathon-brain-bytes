"use client"

import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { alerts } from "@/lib/dummy-data"
import { AlertTriangle, ShieldCheck, BellRing } from "lucide-react"
import { format } from "date-fns"

// Landowner gets alerts for IND-001
const myAlerts = alerts.filter((a) => a.landId === "IND-001")

export default function OwnerAlertsPage() {
  return (
    <DashboardLayout role="landowner">
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="font-display text-2xl font-bold text-foreground">
            Alert Notifications
          </h1>
          <p className="text-sm text-muted-foreground">
            Boundary alerts and notifications for your property.
          </p>
        </div>

        {myAlerts.length === 0 ? (
          <Card>
            <CardContent className="flex flex-col items-center gap-3 p-12">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                <ShieldCheck className="h-6 w-6 text-accent" />
              </div>
              <p className="text-sm font-semibold text-card-foreground">No alerts</p>
              <p className="text-sm text-muted-foreground">
                Your property boundaries are secure.
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="flex flex-col gap-4">
            {myAlerts.map((alert) => (
              <Card key={alert.id}>
                <CardContent className="p-5">
                  <div className="flex items-start gap-4">
                    <div
                      className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
                        alert.resolved
                          ? "bg-accent/10"
                          : "bg-destructive/10"
                      }`}
                    >
                      {alert.resolved ? (
                        <ShieldCheck className="h-5 w-5 text-accent" />
                      ) : (
                        <AlertTriangle className="h-5 w-5 text-destructive" />
                      )}
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-sm font-semibold text-card-foreground">
                          {alert.type === "encroachment"
                            ? "Boundary Encroachment Detected"
                            : alert.type === "boundary_shift"
                            ? "Boundary Shift Detected"
                            : "Vegetation Alert"}
                        </h3>
                        <Badge
                          variant={
                            alert.resolved
                              ? "secondary"
                              : alert.severity === "critical" ||
                                alert.severity === "high"
                              ? "destructive"
                              : "secondary"
                          }
                          className="text-[10px]"
                        >
                          {alert.resolved ? "resolved" : alert.severity}
                        </Badge>
                      </div>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {alert.description}
                      </p>
                      <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                        <BellRing className="h-3 w-3" />
                        {format(new Date(alert.date), "MMM dd, yyyy 'at' HH:mm")}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </DashboardLayout>
  )
}
