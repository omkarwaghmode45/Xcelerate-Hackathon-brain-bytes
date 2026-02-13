import { Shield } from "lucide-react"
import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row lg:px-8">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary">
            <Shield className="h-3.5 w-3.5 text-primary-foreground" />
          </div>
          <span className="font-display text-sm font-bold text-foreground">ABIMS</span>
        </div>
        <nav className="flex gap-6 text-sm text-muted-foreground" aria-label="Footer navigation">
          <Link href="/" className="hover:text-foreground">Home</Link>
          <Link href="/about" className="hover:text-foreground">About</Link>
          <Link href="/login" className="hover:text-foreground">Login</Link>
        </nav>
        <p className="text-xs text-muted-foreground">
          2026 ABIMS. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
