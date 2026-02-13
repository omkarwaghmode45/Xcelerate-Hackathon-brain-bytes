"use client"

import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { industrialLands } from "@/lib/dummy-data"
import { useState } from "react"
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react"

const comparisonData = [
  {
    landId: "IND-001",
    landName: "Rajiv Gandhi Industrial Estate",
    beforeDate: "2025-11-01",
    afterDate: "2026-02-12",
    change: "2.3% encroachment on southern boundary",
  },
  {
    landId: "IND-005",
    landName: "Whitefield Tech Park",
    beforeDate: "2025-10-15",
    afterDate: "2026-02-11",
    change: "3.1% boundary violation on eastern perimeter",
  },
  {
    landId: "IND-003",
    landName: "SEZ Plot 47-A",
    beforeDate: "2025-12-01",
    afterDate: "2026-02-12",
    change: "0.8% fence realignment on north-west corner",
  },
]

export default function ImageComparePage() {
  const [selectedIdx, setSelectedIdx] = useState(0)
  const current = comparisonData[selectedIdx]

  return (
    <DashboardLayout role="government">
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="font-display text-2xl font-bold text-foreground">
            Before/After Image Comparison
          </h1>
          <p className="text-sm text-muted-foreground">
            Visual comparison of boundary changes detected via satellite and
            drone imagery.
          </p>
        </div>

        {/* Comparison selector */}
        <div className="flex flex-wrap gap-2">
          {comparisonData.map((item, idx) => (
            <Button
              key={item.landId}
              variant={selectedIdx === idx ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedIdx(idx)}
            >
              {item.landName}
            </Button>
          ))}
        </div>

        {/* Comparison View */}
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-3">
              <CardTitle className="font-display text-base">Before</CardTitle>
              <Badge variant="outline">{current.beforeDate}</Badge>
            </CardHeader>
            <CardContent>
              <div className="relative aspect-square overflow-hidden rounded-lg border border-border bg-muted">
                <svg
                  viewBox="0 0 400 400"
                  className="h-full w-full"
                  role="img"
                  aria-label={`Before image for ${current.landName}`}
                >
                  <rect width="400" height="400" fill="hsl(var(--muted))" />
                  {/* Grid */}
                  {Array.from({ length: 8 }).map((_, i) => (
                    <line
                      key={`vb-${i}`}
                      x1={50 * (i + 1)}
                      y1="0"
                      x2={50 * (i + 1)}
                      y2="400"
                      stroke="hsl(var(--border))"
                      strokeWidth="0.3"
                    />
                  ))}
                  {Array.from({ length: 8 }).map((_, i) => (
                    <line
                      key={`hb-${i}`}
                      x1="0"
                      y1={50 * (i + 1)}
                      x2="400"
                      y2={50 * (i + 1)}
                      stroke="hsl(var(--border))"
                      strokeWidth="0.3"
                    />
                  ))}
                  {/* Boundary outline - original */}
                  <rect
                    x="80"
                    y="80"
                    width="240"
                    height="240"
                    fill="none"
                    stroke="hsl(var(--accent))"
                    strokeWidth="2"
                    strokeDasharray="6 3"
                  />
                  {/* Fill */}
                  <rect
                    x="80"
                    y="80"
                    width="240"
                    height="240"
                    fill="hsl(var(--accent))"
                    opacity="0.08"
                  />
                  <text
                    x="200"
                    y="195"
                    textAnchor="middle"
                    fill="hsl(var(--muted-foreground))"
                    fontSize="11"
                  >
                    Original Boundary
                  </text>
                  <text
                    x="200"
                    y="215"
                    textAnchor="middle"
                    fill="hsl(var(--muted-foreground))"
                    fontSize="10"
                  >
                    {current.landId}
                  </text>
                  <text
                    x="200"
                    y="380"
                    textAnchor="middle"
                    fill="hsl(var(--muted-foreground))"
                    fontSize="9"
                  >
                    Satellite Scan - {current.beforeDate}
                  </text>
                </svg>
                <button
                  className="absolute right-2 top-2 rounded-md bg-card/80 p-1.5 text-muted-foreground hover:text-foreground"
                  aria-label="Zoom in"
                >
                  <ZoomIn className="h-4 w-4" />
                </button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-3">
              <CardTitle className="font-display text-base">After</CardTitle>
              <Badge variant="destructive">{current.afterDate}</Badge>
            </CardHeader>
            <CardContent>
              <div className="relative aspect-square overflow-hidden rounded-lg border border-border bg-muted">
                <svg
                  viewBox="0 0 400 400"
                  className="h-full w-full"
                  role="img"
                  aria-label={`After image for ${current.landName}`}
                >
                  <rect width="400" height="400" fill="hsl(var(--muted))" />
                  {/* Grid */}
                  {Array.from({ length: 8 }).map((_, i) => (
                    <line
                      key={`va-${i}`}
                      x1={50 * (i + 1)}
                      y1="0"
                      x2={50 * (i + 1)}
                      y2="400"
                      stroke="hsl(var(--border))"
                      strokeWidth="0.3"
                    />
                  ))}
                  {Array.from({ length: 8 }).map((_, i) => (
                    <line
                      key={`ha-${i}`}
                      x1="0"
                      y1={50 * (i + 1)}
                      x2="400"
                      y2={50 * (i + 1)}
                      stroke="hsl(var(--border))"
                      strokeWidth="0.3"
                    />
                  ))}
                  {/* Original boundary */}
                  <rect
                    x="80"
                    y="80"
                    width="240"
                    height="240"
                    fill="none"
                    stroke="hsl(var(--accent))"
                    strokeWidth="2"
                    strokeDasharray="6 3"
                  />
                  <rect
                    x="80"
                    y="80"
                    width="240"
                    height="240"
                    fill="hsl(var(--accent))"
                    opacity="0.05"
                  />
                  {/* Encroachment area */}
                  <polygon
                    points="320,220 360,240 350,320 320,320"
                    fill="hsl(var(--destructive))"
                    opacity="0.25"
                    stroke="hsl(var(--destructive))"
                    strokeWidth="2"
                  />
                  <text
                    x="345"
                    y="275"
                    textAnchor="middle"
                    fill="hsl(var(--destructive))"
                    fontSize="8"
                    fontWeight="600"
                  >
                    ENCROACH
                  </text>
                  <text
                    x="200"
                    y="195"
                    textAnchor="middle"
                    fill="hsl(var(--muted-foreground))"
                    fontSize="11"
                  >
                    Boundary Violation Detected
                  </text>
                  <text
                    x="200"
                    y="215"
                    textAnchor="middle"
                    fill="hsl(var(--destructive))"
                    fontSize="10"
                    fontWeight="600"
                  >
                    {current.change}
                  </text>
                  <text
                    x="200"
                    y="380"
                    textAnchor="middle"
                    fill="hsl(var(--muted-foreground))"
                    fontSize="9"
                  >
                    Satellite Scan - {current.afterDate}
                  </text>
                </svg>
                <button
                  className="absolute right-2 top-2 rounded-md bg-card/80 p-1.5 text-muted-foreground hover:text-foreground"
                  aria-label="Zoom in"
                >
                  <ZoomIn className="h-4 w-4" />
                </button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Summary */}
        <Card>
          <CardContent className="flex flex-col gap-2 p-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold text-card-foreground">
                Change Summary: {current.landName}
              </p>
              <p className="text-sm text-muted-foreground">{current.change}</p>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  setSelectedIdx(
                    (selectedIdx - 1 + comparisonData.length) %
                      comparisonData.length
                  )
                }
              >
                <ChevronLeft className="mr-1 h-3 w-3" /> Previous
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  setSelectedIdx(
                    (selectedIdx + 1) % comparisonData.length
                  )
                }
              >
                Next <ChevronRight className="ml-1 h-3 w-3" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
