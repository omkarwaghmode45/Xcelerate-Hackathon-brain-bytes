import { AlertTriangle, TrendingUp, Scale, Clock } from "lucide-react"

const problems = [
  {
    icon: AlertTriangle,
    title: "Illegal Encroachment",
    stat: "68%",
    description:
      "of boundary disputes in India go undetected for over 6 months due to lack of continuous monitoring.",
  },
  {
    icon: TrendingUp,
    title: "Rising Disputes",
    stat: "2.4M+",
    description:
      "pending land dispute cases in Indian courts, with new cases added faster than resolution.",
  },
  {
    icon: Scale,
    title: "Legal Burden",
    stat: "20+ Years",
    description:
      "average time to resolve a land dispute through the court system, causing immense losses.",
  },
  {
    icon: Clock,
    title: "Delayed Detection",
    stat: "3-6 Months",
    description:
      "typical delay before boundary violations are noticed through manual inspection processes.",
  },
]

export function ProblemSection() {
  return (
    <section className="bg-card py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-destructive">
            The Problem
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-card-foreground text-balance">
            Boundary Encroachment is a Growing Crisis
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            Traditional manual boundary monitoring is inadequate for the scale
            and speed of modern encroachment.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="flex flex-col gap-3 rounded-lg border border-destructive/20 bg-destructive/5 p-6"
            >
              <problem.icon className="h-6 w-6 text-destructive" />
              <p className="font-display text-3xl font-bold text-foreground">{problem.stat}</p>
              <h3 className="font-semibold text-foreground">{problem.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
