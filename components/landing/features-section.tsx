import {
  Satellite,
  BellRing,
  FileCheck,
  MapPin,
  ShieldCheck,
  History,
} from "lucide-react"

const features = [
  {
    icon: Satellite,
    title: "Satellite & Drone Scanning",
    description:
      "High-resolution multi-spectral imagery captures boundary data with centimeter-level precision at regular intervals.",
  },
  {
    icon: BellRing,
    title: "Real-Time Alert System",
    description:
      "Instant notifications to government officers and landowners when boundary anomalies or encroachments are detected.",
  },
  {
    icon: FileCheck,
    title: "Document Verification",
    description:
      "Integrated document management to verify land titles, permits, and clearance certificates against boundary records.",
  },
  {
    icon: MapPin,
    title: "GIS-Powered Mapping",
    description:
      "Interactive geographic information system maps for precise boundary visualization, overlays, and historical comparison.",
  },
  {
    icon: ShieldCheck,
    title: "Tamper-Proof Records",
    description:
      "All boundary scans, alerts, and changes are logged in an immutable audit trail for legal evidence.",
  },
  {
    icon: History,
    title: "Historical Analysis",
    description:
      "Before/after image comparisons and change detection over time to track gradual encroachment patterns.",
  },
]

export function FeaturesSection() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground text-balance">
            Comprehensive Boundary Protection
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            A complete ecosystem of tools designed to detect, report, and
            prevent illegal boundary encroachment.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group flex flex-col gap-3 rounded-lg border border-border bg-card p-6 transition-shadow hover:shadow-md"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10">
                <feature.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-card-foreground">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
