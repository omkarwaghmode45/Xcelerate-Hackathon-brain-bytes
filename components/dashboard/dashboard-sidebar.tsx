"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  Shield,
  LayoutDashboard,
  Map,
  BellRing,
  FileCheck,
  Images,
  LogOut,
  Scan,
  Clock,
  FileText,
  Bell,
  Menu,
  X,
} from "lucide-react"
import { useState } from "react"

interface NavItem {
  href: string
  label: string
  icon: React.ElementType
}

const govNavItems: NavItem[] = [
  { href: "/dashboard/government", label: "Overview", icon: LayoutDashboard },
  { href: "/dashboard/government/map", label: "Map View", icon: Map },
  { href: "/dashboard/government/alerts", label: "Alerts", icon: BellRing },
  { href: "/dashboard/government/compare", label: "Image Compare", icon: Images },
  { href: "/dashboard/government/documents", label: "Documents", icon: FileCheck },
]

const ownerNavItems: NavItem[] = [
  { href: "/dashboard/landowner", label: "Overview", icon: LayoutDashboard },
  { href: "/dashboard/landowner/scans", label: "Scan History", icon: Clock },
  { href: "/dashboard/landowner/documents", label: "Documents", icon: FileText },
  { href: "/dashboard/landowner/alerts", label: "Notifications", icon: Bell },
]

export function DashboardSidebar({ role }: { role: "government" | "landowner" }) {
  const pathname = usePathname()
  const navItems = role === "government" ? govNavItems : ownerNavItems
  const [mobileOpen, setMobileOpen] = useState(false)

  const roleLabel =
    role === "government" ? "Government Officer" : "Land Owner"

  return (
    <>
      {/* Mobile toggle */}
      <div className="fixed left-0 top-0 z-50 flex h-14 w-full items-center gap-3 border-b border-sidebar-border bg-sidebar px-4 lg:hidden">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-sidebar-foreground"
          aria-label="Toggle sidebar"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-sidebar-primary">
            <Shield className="h-3.5 w-3.5 text-sidebar-primary-foreground" />
          </div>
          <span className="font-display text-sm font-bold text-sidebar-foreground">ABIMS</span>
        </div>
      </div>

      {/* Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-foreground/20 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 z-40 flex h-full w-64 flex-col bg-sidebar transition-transform duration-200 lg:translate-x-0",
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-16 items-center gap-2 border-b border-sidebar-border px-5">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-sidebar-primary">
            <Shield className="h-4 w-4 text-sidebar-primary-foreground" />
          </div>
          <div>
            <p className="font-display text-sm font-bold text-sidebar-foreground">ABIMS</p>
            <p className="text-[10px] text-sidebar-foreground/60">{roleLabel}</p>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-4" aria-label="Dashboard navigation">
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors",
                      isActive
                        ? "bg-sidebar-accent text-sidebar-primary"
                        : "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground"
                    )}
                  >
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="border-t border-sidebar-border p-3">
          <Link
            href="/login"
            className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium text-sidebar-foreground/70 transition-colors hover:bg-sidebar-accent hover:text-sidebar-foreground"
          >
            <LogOut className="h-4 w-4" />
            Sign Out
          </Link>
        </div>
      </aside>
    </>
  )
}
