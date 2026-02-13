"use client"

import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { scanHistory } from "@/lib/dummy-data"
import { Scan, CheckCircle2 } from "lucide-react"
import { format } from "date-fns"

export default function ScanHistoryPage() {
  return (
    <DashboardLayout role="landowner">
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="font-display text-2xl font-bold text-foreground">
            Scan History
          </h1>
          <p className="text-sm text-muted-foreground">
            Timeline of all satellite and drone scans for your property.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative flex flex-col gap-0">
          {scanHistory.map((scan, idx) => (
            <div key={scan.id} className="relative flex gap-4 pb-8">
              {/* Timeline line */}
              {idx < scanHistory.length - 1 && (
                <div className="absolute left-[15px] top-[32px] h-[calc(100%-16px)] w-px bg-border" />
              )}
              {/* Timeline dot */}
              <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-card">
                <Scan className="h-3.5 w-3.5 text-primary" />
              </div>
              {/* Content */}
              <Card className="flex-1">
                <CardContent className="p-4">
                  <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-sm font-semibold text-card-foreground">
                          {scan.type}
                        </h3>
                        <Badge variant="outline" className="text-[10px]">
                          {scan.id}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {scan.findings}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <CheckCircle2 className="h-3 w-3 text-accent" />
                      {format(new Date(scan.date), "MMM dd, yyyy HH:mm")}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}
