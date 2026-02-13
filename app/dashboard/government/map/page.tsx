"use client"

import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { industrialLands } from "@/lib/dummy-data"
import { MapPin, Maximize2 } from "lucide-react"
import { useState } from "react"

export default function MapViewPage() {
  const [selectedLand, setSelectedLand] = useState(industrialLands[0])

  return (
    <DashboardLayout role="government">
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="font-display text-2xl font-bold text-foreground">
            Map View
          </h1>
          <p className="text-sm text-muted-foreground">
            Geographic overview of all monitored industrial lands.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Map Placeholder */}
          <Card className="lg:col-span-2">
            <CardHeader className="flex flex-row items-center justify-between pb-3">
              <CardTitle className="font-display text-base">Interactive Map</CardTitle>
              <Maximize2 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-border bg-muted">
                {/* Stylized map representation */}
                <svg
                  viewBox="0 0 800 500"
                  className="h-full w-full"
                  role="img"
                  aria-label="Map of monitored industrial lands across India"
                >
                  {/* Background */}
                  <rect
                    width="800"
                    height="500"
                    fill="hsl(var(--muted))"
                  />
                  {/* Grid lines */}
                  {Array.from({ length: 10 }).map((_, i) => (
                    <line
                      key={`v-${i}`}
                      x1={80 * (i + 1)}
                      y1="0"
                      x2={80 * (i + 1)}
                      y2="500"
                      stroke="hsl(var(--border))"
                      strokeWidth="0.5"
                    />
                  ))}
                  {Array.from({ length: 6 }).map((_, i) => (
                    <line
                      key={`h-${i}`}
                      x1="0"
                      y1={83 * (i + 1)}
                      x2="800"
                      y2={83 * (i + 1)}
                      stroke="hsl(var(--border))"
                      strokeWidth="0.5"
                    />
                  ))}
                  {/* Plot pins */}
                  {industrialLands.map((land, idx) => {
                    const positions = [
                      { x: 380, y: 120 },
                      { x: 320, y: 250 },
                      { x: 440, y: 140 },
                      { x: 280, y: 280 },
                      { x: 350, y: 320 },
                      { x: 400, y: 200 },
                    ]
                    const pos = positions[idx] || { x: 400, y: 250 }
                    const isSelected = selectedLand.id === land.id
                    const color =
                      land.status === "safe"
                        ? "hsl(var(--accent))"
                        : land.status === "alert"
                        ? "hsl(var(--destructive))"
                        : "hsl(var(--warning))"
                    return (
                      <g
                        key={land.id}
                        onClick={() => setSelectedLand(land)}
                        className="cursor-pointer"
                      >
                        {isSelected && (
                          <circle
                            cx={pos.x}
                            cy={pos.y}
                            r="20"
                            fill={color}
                            opacity="0.15"
                          >
                            <animate
                              attributeName="r"
                              values="16;22;16"
                              dur="2s"
                              repeatCount="indefinite"
                            />
                          </circle>
                        )}
                        <circle
                          cx={pos.x}
                          cy={pos.y}
                          r={isSelected ? "8" : "6"}
                          fill={color}
                          stroke="hsl(var(--card))"
                          strokeWidth="2"
                        />
                        <text
                          x={pos.x}
                          y={pos.y - 14}
                          textAnchor="middle"
                          fill="hsl(var(--foreground))"
                          fontSize="9"
                          fontWeight="600"
                        >
                          {land.id}
                        </text>
                      </g>
                    )
                  })}
                  {/* India outline hint */}
                  <text
                    x="400"
                    y="470"
                    textAnchor="middle"
                    fill="hsl(var(--muted-foreground))"
                    fontSize="11"
                  >
                    Industrial Land Monitoring - India
                  </text>
                </svg>
              </div>
            </CardContent>
          </Card>

          {/* Land List */}
          <div className="flex flex-col gap-4">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="font-display text-base">
                  Selected Plot
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <Badge
                      variant={
                        selectedLand.status === "safe"
                          ? "secondary"
                          : "destructive"
                      }
                    >
                      {selectedLand.status}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      {selectedLand.id}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-card-foreground">
                    {selectedLand.name}
                  </h3>
                  <div className="flex flex-col gap-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Location</span>
                      <span className="text-card-foreground">{selectedLand.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Area</span>
                      <span className="text-card-foreground">{selectedLand.area}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Owner</span>
                      <span className="text-card-foreground">{selectedLand.owner}</span>
                    </div>
                    {selectedLand.boundaryChange > 0 && (
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Encroachment</span>
                        <span className="font-semibold text-destructive">
                          {selectedLand.boundaryChange}%
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="font-display text-base">All Plots</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-2">
                  {industrialLands.map((land) => (
                    <button
                      key={land.id}
                      onClick={() => setSelectedLand(land)}
                      className={`flex items-center gap-3 rounded-md border p-2.5 text-left transition-colors ${
                        selectedLand.id === land.id
                          ? "border-primary bg-primary/5"
                          : "border-border hover:bg-muted"
                      }`}
                    >
                      <MapPin
                        className={`h-4 w-4 shrink-0 ${
                          land.status === "safe"
                            ? "text-accent"
                            : land.status === "alert"
                            ? "text-destructive"
                            : "text-warning"
                        }`}
                      />
                      <div className="min-w-0">
                        <p className="truncate text-xs font-semibold text-card-foreground">
                          {land.name}
                        </p>
                        <p className="text-[10px] text-muted-foreground">
                          {land.location}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
