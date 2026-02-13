import { SiteHeader } from "@/components/landing/site-header"
import { SiteFooter } from "@/components/landing/site-footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Factory,
  Building2,
  Trees,
  Landmark,
  Satellite,
  BellRing,
  Scale,
  FileCheck,
  Users,
  Layers,
  ArrowRight,
} from "lucide-react"

const useCases = [
  {
    icon: Factory,
    title: "Industrial Land Protection",
    description:
      "Monitor boundaries of industrial estates, SEZs, and manufacturing zones to prevent unauthorized encroachment by neighboring properties or informal settlements.",
  },
  {
    icon: Building2,
    title: "Government Land Monitoring",
    description:
      "Track government-owned parcels including railway land, defense areas, and public infrastructure zones for boundary integrity.",
  },
  {
    icon: Trees,
    title: "Forest & Reserve Protection",
    description:
      "Detect illegal deforestation and encroachment into protected forest reserves and wildlife corridors using satellite imagery.",
  },
  {
    icon: Landmark,
    title: "Heritage Site Preservation",
    description:
      "Monitor buffer zones around archaeological and heritage sites to ensure no unauthorized construction or boundary violations.",
  },
]

const howItWorks = [
  {
    step: "01",
    icon: Satellite,
    title: "Data Acquisition",
    description:
      "High-resolution satellite and drone imagery is captured at regular intervals covering all monitored land parcels.",
  },
  {
    step: "02",
    icon: Layers,
    title: "AI Analysis",
    description:
      "Machine learning algorithms compare current imagery against baseline boundary records to detect any changes or anomalies.",
  },
  {
    step: "03",
    icon: BellRing,
    title: "Alert Generation",
    description:
      "When a boundary violation is detected, instant alerts are sent to government officers and affected landowners.",
  },
  {
    step: "04",
    icon: FileCheck,
    title: "Verification & Action",
    description:
      "Officers verify the alert, review before/after imagery, check documents, and initiate appropriate legal action.",
  },
]

const team = [
  { name: "Dr. Priya Sharma", role: "Project Director", area: "Remote Sensing" },
  { name: "Rajesh Kumar", role: "Lead Engineer", area: "GIS & Mapping" },
  { name: "Anita Desai", role: "Data Scientist", area: "ML & Computer Vision" },
  { name: "Suresh Patel", role: "Legal Advisor", area: "Land Law & Policy" },
]

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-card py-20">
          <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              About ABIMS
            </p>
            <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground lg:text-4xl text-balance">
              Protecting Land Boundaries Through Technology
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              ABIMS is a comprehensive boundary monitoring platform that
              combines satellite imagery, drone surveys, and AI-powered analysis
              to detect and prevent illegal land encroachment across India.
            </p>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-background py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
                How It Works
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                A four-step process from data capture to enforcement action.
              </p>
            </div>

            <div className="mx-auto mt-14 grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-4">
              {howItWorks.map((step) => (
                <div key={step.step} className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <span className="font-display text-3xl font-bold text-primary/20">
                      {step.step}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <step.icon className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-display text-base font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="bg-card py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
                Use Cases
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                ABIMS serves diverse boundary monitoring needs across sectors.
              </p>
            </div>

            <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-2">
              {useCases.map((useCase) => (
                <Card key={useCase.title}>
                  <CardContent className="flex flex-col gap-3 p-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10">
                      <useCase.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-card-foreground">
                      {useCase.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {useCase.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="bg-background py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
                Our Team
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Experts in remote sensing, GIS, and land governance.
              </p>
            </div>

            <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-2 lg:grid-cols-4">
              {team.map((member) => (
                <Card key={member.name}>
                  <CardContent className="flex flex-col items-center gap-3 p-6 text-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-card-foreground">
                        {member.name}
                      </p>
                      <p className="text-xs text-primary">{member.role}</p>
                      <p className="text-xs text-muted-foreground">
                        {member.area}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary py-16">
          <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
            <h2 className="font-display text-2xl font-bold tracking-tight text-primary-foreground">
              Ready to Protect Your Boundaries?
            </h2>
            <p className="mt-3 text-sm text-primary-foreground/80">
              Get started with ABIMS today and ensure your land boundaries
              remain secure.
            </p>
            <div className="mt-6 flex justify-center gap-3">
              <Button asChild variant="secondary" size="lg" className="gap-2">
                <Link href="/login">
                  Get Started <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
