"use client"

import { DashboardSidebar } from "./dashboard-sidebar"

export function DashboardLayout({
  role,
  children,
}: {
  role: "government" | "landowner"
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar role={role} />
      <div className="lg:pl-64">
        <main className="min-h-screen pt-14 lg:pt-0">
          <div className="p-6 lg:p-8">{children}</div>
        </main>
      </div>
    </div>
  )
}
