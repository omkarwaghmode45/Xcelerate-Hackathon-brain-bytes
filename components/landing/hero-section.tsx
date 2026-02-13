"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield, Satellite, ScanEye, ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-card">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2 text-sm font-medium text-primary">
              <Shield className="h-4 w-4" />
              <span>Government-Grade Boundary Protection</span>
            </div>
            <h1 className="font-display text-4xl font-bold tracking-tight text-foreground lg:text-5xl xl:text-6xl text-balance">
              Automated Boundary Integrity Monitoring System
            </h1>
            <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
              Real-time satellite and drone-based boundary monitoring to detect
              and prevent illegal encroachment on industrial and government
              lands. Protect boundaries before violations become disputes.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild size="lg" className="gap-2">
                <Link href="/login">
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <StatCard
              icon={<Satellite className="h-6 w-6 text-primary" />}
              value="24/7"
              label="Satellite Monitoring"
              description="Continuous multi-spectral scanning"
            />
            <StatCard
              icon={<ScanEye className="h-6 w-6 text-primary" />}
              value="99.7%"
              label="Detection Accuracy"
              description="AI-powered boundary analysis"
            />
            <StatCard
              icon={<Shield className="h-6 w-6 text-accent" />}
              value="2,400+"
              label="Plots Monitored"
              description="Across 12 states in India"
            />
            <StatCard
              icon={<ArrowRight className="h-6 w-6 text-accent" />}
              value={"<2hrs"}
              label="Alert Response"
              description="From detection to notification"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function StatCard({
  icon,
  value,
  label,
  description,
}: {
  icon: React.ReactNode
  value: string
  label: string
  description: string
}) {
  return (
    <div className="flex flex-col gap-3 rounded-lg border border-border bg-background p-5">
      <div>{icon}</div>
      <div>
        <p className="font-display text-2xl font-bold text-foreground">{value}</p>
        <p className="text-sm font-semibold text-foreground">{label}</p>
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}
